import express from "express";
import {
  getMyProfile,
  login,
  logout,
  searchUser,
} from "../controllers/user.js";
import { singleAvatar } from "../middleware/multer.js";
import { newUser } from "../controllers/user.js";
import { isAuthenticated } from "../middleware/auth.js";

const app = express.Router();

app.post("/new", singleAvatar, newUser);
app.post("/login", login);

// From here user must be logged in to access the routes
app.use(isAuthenticated);
app.get("/me", getMyProfile);
app.get("/logout", logout);
app.get("/searchUser", searchUser);

export default app;
