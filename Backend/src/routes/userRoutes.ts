import { Router } from "express";
import { addUserAction, getAllActions } from "../controllers/userController";

const router = Router();

/**
 * @openapi
 * /api/action:
 *   post:
 *     tags:
 *       - Actions
 *     summary: Add a user action
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               page:
 *                 type: string
 *               action:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/action", addUserAction);

/**
 * @openapi
 * /api/actions:
 *   get:
 *     tags:
 *       - Actions
 *     summary: Get all actions
 *     responses:
 *       200:
 *         description: Success
 */
router.get("/actions", getAllActions);

export default router;
