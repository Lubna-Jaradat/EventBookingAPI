import { RequestHandler, Router } from 'express';
import { authController } from './auth.controller';

const router = Router();
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterDTO'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User already exists / validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 error:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                     statusCode:
 *                       type: number
 *                   required:
 *                     - message
 *                     - statusCode
 */

router.post(
  '/register',
  authController.register.bind(authController) as RequestHandler
);

export const authRouter = router;