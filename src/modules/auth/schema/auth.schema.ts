import {z} from 'zod';
import {RegisterDto} from '../dto/register.dto';
import {LoginDto} from '../dto/login.dto';

export const registerSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name is too short"),
}).strict() satisfies z.ZodType<RegisterDto>;

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
}).strict() satisfies z.ZodType<LoginDto>;

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, "Refresh token is required"),
}).strict();

export const logoutSchema = z.object({
  refreshToken: z.string().min(1, "Refresh token is required"),
}).strict();

export type RegisterDTO = z.infer<typeof registerSchema>;
export type LoginDTO = z.infer<typeof loginSchema>;
export type RefreshTokenDTO = z.infer<typeof refreshTokenSchema>;
export type LogoutDTO = z.infer<typeof logoutSchema>;
