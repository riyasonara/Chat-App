import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import {
  addMembers,
  getMyChats,
  getMyGroups,
  leaveGroup,
  newGroupChat,
  removeMember,
  sendAttachments,
} from "../controllers/chat.js";
import { attachmentsMulter } from "../middleware/multer.js";

const app = express.Router();

app.use(isAuthenticated);

app.post("/new", newGroupChat);

app.get("/my", getMyChats);

app.get("/my/groups", getMyGroups);

app.put("/addmembers", addMembers);

app.put("/removemember", removeMember);

app.delete("/leave/:id", leaveGroup);

// send attachments
app.post("/message",attachmentsMulter, sendAttachments)
// Get Messages
// Get ChatDetails , rename , delete

export default app;
