import express from "express";
import { adminLoginValidator, validateHandler } from "../lib/validators";
import { adminLogin, adminLogout, getAdminData } from "../controllers/admin";

const app = express.Router();

app.post("/verify", adminLoginValidator(), validateHandler, adminLogin);

app.get("/logout", adminLogout);

// Only Admin Can Accecss these Routes

app.get("/", getAdminData);
