import express from "express";
import { isAuthenticated } from "../middleware/auth";
import { newGroupChat } from "../controllers/chat";

const app = express.Router();

app.use(isAuthenticated);

app.post("/new",newGroupChat)

export default app;
