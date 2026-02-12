import { Role } from '@prisma/client';
/**
 * @openapi
 * components:
 * schemas:
 * AuthResponse:
 * type: object
 * properties:
 * accessToken:
 * type: string
 * refreshToken:
 * type: string
 * user:
 * $ref: '#/components/schemas/User'
 * Role:
 * $ref: '#/components/schemas/Role'
 * type: string
 * description: Prisma Role enum
 * example: 'USER'
 */
export type AuthResponseDto = {
  user: {
    id: number;
    email: string;
    name: string;
    role: Role;
  };
  accessToken: string;
  refreshToken: string;
};