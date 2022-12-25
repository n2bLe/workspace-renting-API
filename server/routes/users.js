import express from 'express';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
import {getUser, getUsers, updateUser, deleteUser} from '../controllers/user.js';

const router = express.Router();

// UPDATE USER
router.put("/:id", verifyUser, updateUser)

// DELETE USER
router.delete("/:id", verifyUser, deleteUser)

// GET USER
router.get("/find/:id", verifyUser, getUser);

// GET USERS
router.get("/", verifyAdmin, getUsers)

export default router;