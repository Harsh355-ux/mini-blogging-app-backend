import express from "express";
import { createPost, getAllPosts, getPostById } from "../controllers/postController.js";
import Auth from "../middleware/auth.js";

const router = express.Router();

// Create post (authenticated)
router.post("/", Auth, createPost);

// Get all posts (public)
router.get("/", getAllPosts);

// Get single post
router.get("/:id", getPostById);

export default router;
