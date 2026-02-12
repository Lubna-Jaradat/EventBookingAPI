import { getEnv } from "../../../util/get-env.uti";
import jwt, { SignOptions } from "jsonwebtoken";
import { Role } from "@prisma/client";

export type JwtPayload = {
  sub: string;
  role: Role;
};

const ACCESS_SECRET = getEnv("JWT_ACCESS_SECRET");
const REFRESH_SECRET = getEnv("JWT_REFRESH_SECRET");

export const signAccessToken = (payload: JwtPayload, options?: SignOptions) => {
  return jwt.sign(payload, ACCESS_SECRET, {
    expiresIn: "15m",
    ...options,
  });
};

export const signRefreshToken = (
  payload: JwtPayload,
  options?: SignOptions,
) => {
  return jwt.sign(payload, REFRESH_SECRET, {
    expiresIn: "7d",
    ...options,
  });
};

export const verifyAccessToken = (token: string): JwtPayload => {
  return jwt.verify(token, ACCESS_SECRET) as JwtPayload;
};

export const verifyRefreshToken = (token: string): { sub: string } => {
  return jwt.verify(token, REFRESH_SECRET) as { sub: string };
};
