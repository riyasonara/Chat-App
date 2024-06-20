import { compare } from "bcrypt";
import { User } from "../models/user.js";
import { cookieOptions, emitEvent, sendToken } from "../utils/features.js";
import { TryCatch } from "../middleware/error.js";
import { ErrorHandler } from "../utils/utility.js";
import { Chat } from "../models/chat.js";
import { Request } from "../models/request.js";
import { NEW_REQUEST } from "../constants/events.js";
import { response } from "express";

// Create a new user and save it to the database and save token in cookie
const newUser = async (req, res, next) => {
  const { name, username, password, bio } = req.body;
  console.log(req.body);
  const avatar = {
    public_id: "1",
    url: "url",
  };
  const user = await User.create({
    name,
    bio,
    username,
    password,
    avatar,
  });

  sendToken(res, user, 201, "User created");
};

const login = TryCatch(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username }).select("+password");
  if (!user) return next(new ErrorHandler("Invalid username or password", 404));

  const isMatch = await compare(password, user.password);

  if (!isMatch)
    return next(new ErrorHandler("Invalid username or password", 404));
  sendToken(res, user, 200, `Welcome Back , ${user.name}`);
});

const getMyProfile = TryCatch(async (req, res) => {
  const user = await User.findById(req.user);
  res.status(200).json({
    success: true,
    user,
  });
});

const logout = TryCatch(async (req, res) => {
  return res
    .status(200)
    .cookie("chatnest-token", "", { ...cookieOptions, maxAge: 0 })
    .json({
      success: true,
      message: "Logged out successfully",
    });
});

const searchUser = TryCatch(async (req, res) => {
  const { name = "" } = req.query;

  // Finding All my Chats
  const myChats = await Chat.find({ groupChat: false, members: req.user });

  // extracting All Users from my chats means friends or people I have chatted with
  const allUsersFromMyChats = myChats.flatMap((chat) => chat.members);

  // Finding All Users Except Me and Friends
  const allUsersExceptMeAndFriends = await User.find({
    _id: { $nin: allUsersFromMyChats },
    name: { $regex: name, $options: "i" },
  });

  // Modifying the response
  const users = allUsersExceptMeAndFriends.map(({ _id, name, avatar }) => ({
    _id,
    name,
    avatar: avatar.url,
  }));

  return res.status(200).json({
    success: true,
    users,
  });
});

const sendRequest = TryCatch(async (req, res) => {
  const { userId } = req.body;
  const request = await Request.findOne({
    $or: [
      { sender: req.user, receiver: userId },
      { sender: userId, receiver: req.user },
    ],
  });
  if (request) return next(new ErrorHandler("Request already sent", 400));

  await Request.create({
    sender: req.user,
    receiver: userId,
  });

  emitEvent(req, NEW_REQUEST, [userId]);

  return res.status(200).json({
    success: true,
    message: "Request sent successfully",
  });
});

const acceptFriendRequest = TryCatch(async (req, res) => {
  const { requestId, accept } = req.body;

  const request = await Request.findById(requestId)
    .populate("sender", "name")
    .populate("receiver", "name");

  if (!request) return next(new ErrorHandler("Request not found", 404));

  if (request.receiver.toString() !== req.user.toString()) {
    return next(new ErrorHandler("You are not authorized to accept this request", 401));
  }

  if (!accept) {
    await request.remove();

    return res.status(200).json({
      success : true,
      message: "Friend request rejected"
    })
  }
  return res.status(200).json({
    success: true,
    message: `Request ${accept ? "accepted" : "rejected"} successfully`,
    request,
  });
});

export {
  newUser,
  login,
  getMyProfile,
  logout,
  searchUser,
  sendRequest,
  acceptFriendRequest,
};
