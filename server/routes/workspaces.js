import express from 'express';
import { verifyAdmin } from '../utils/verifyToken.js';
import { createWorkspace, updateWorkspace, deleteWorkspace, getWorkspaces, getWorkspace } from '../controllers/workspace.js';

const router = express.Router();

// CREATE WORKSPACE
router.post("/", verifyAdmin, createWorkspace);

//UPDATE WORKSPACE
router.put('/:id', verifyAdmin, updateWorkspace);

//DELETE WORKSPAPCE
router.delete('/:id', verifyAdmin, deleteWorkspace);

//GET WORKSPACE
router.get('/find/:id', getWorkspace)

// GET ALL WORKSPACES
router.get('/', getWorkspaces)


export default router;