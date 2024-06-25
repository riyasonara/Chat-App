import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utils/features.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middleware/error.js";
import chatRoute from "./routes/chat.js";
import {
  createGroupChats,
  createMessages,
  createMessagesInAChat,
  createSingleChats,
} from "./seeders/chat.js";
import adminRoute from "./routes/admin.js";

dotenv.config({
  path: "./.env",
});

const mongoURI = process.env.MONGO_URI;
const port = process.env.PORT || 3000;
const adminSecretKey = process.env.ADMIN_SECRET_KEY || "adsasdsdfsdfsdfd";

connectDB(mongoURI);
//  createUser(10);
// createSingleChats(10);
// createGroupChats(10);

// createMessagesInAChat("66729cd83e130a92a114a0d6",50);

const app = express();

// Using Middlewares Here
app.use(express.json());
app.use(cookieParser());

app.use("/user", userRoute);
app.use("/chat", chatRoute);
app.use("/admin", adminRoute);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export { adminSecretKey };
