import { DatabaseService } from "../../services/prisma.service";
import { createArgonHash } from "./util/argon.util";
import { AuthResponseDto } from "./dto/response.dto";
import { RegisterDTO } from "./schema/auth.schema";
import { Role } from "@prisma/client";
import { CustomError } from "../../util/api-error";
import { signAccessToken, signRefreshToken } from "./util/jwt.util";

export class AuthService {
    
  constructor(private db = DatabaseService) {}

  public async register(payload: RegisterDTO): Promise<AuthResponseDto> {
    const { email, name, password } = payload;

    const existingUser = await this.db.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new CustomError("User already exists", "AUTH", 400);
    }

    const hashedPassword = await createArgonHash(password);
    const user = await this.db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: Role.USER,
      },
    });
    const userIdStr = user.id.toString();

    const accessToken = signAccessToken({ sub: userIdStr, role: user.role });
    const refreshToken = signRefreshToken({ sub: userIdStr, role: user.role });

    const hashedRefreshToken = await createArgonHash(refreshToken);

    await this.db.user.update({
      where: { id: user.id },
      data: { refreshToken: hashedRefreshToken },
    });
    return {
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    accessToken,
    refreshToken,
  };
  }
}
