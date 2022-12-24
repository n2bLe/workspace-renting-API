import express from 'express';
import { verify } from 'jsonwebtoken';
import { verifyAdmin, verifyUser } from '../utils/verifyToken';
import {getUser, getUsers, updateUser, deleteUser} from '../controllers/user.js';

const router = express.Router();

// UPDATE USER
router.put("/:id", verifyUser, updateUser)

// DELETE USER
router.delete("/:id", verifyUser, deleteUser)

// GET USER
router.get("/:id", verifyUser, getUser);

// GET USERS
router.get("/", verifyAdmin, getUsers)

export default router;