import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Messages API
 */

/**
 * @swagger
 * /api/messages/users:
 *   get:
 *     summary: Get users for the sidebar
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users for the sidebar
 *       401:
 *         description: Unauthorized
 */
router.get("/users", protectRoute, getUsersForSidebar);

/**
 * @swagger
 * /api/messages/{id}:
 *   get:
 *     summary: Get messages for a specific user
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user whose messages are being retrieved
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of messages
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */
router.get("/:id", protectRoute, getMessages);

/**
 * @swagger
 * /api/messages/send/{id}:
 *   post:
 *     summary: Send a message to a specific user
 *     tags: [Messages]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the recipient user
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Message sent successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */
router.post("/send/:id", protectRoute, sendMessage);

export default router;
