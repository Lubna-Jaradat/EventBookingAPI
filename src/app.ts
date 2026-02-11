import express, {Request, Response, NextFunction} from "express";
import { authRouter } from "./modules/auth/auth.route";
import { ResponseEnhancer } from "./middlewares/resposnes.middleware";
import { HandleError } from "./util/exeption.util";
import { getEnv } from "./util/get-env.uti";
import path from "path/win32";
import { setupSwagger } from "./config/swagger";

const PORT = getEnv("PORT");

const app = express();
setupSwagger(app);
app.use(express.json());
app.use(express.urlencoded());
app.use(ResponseEnhancer);

app.use(
  express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, path) => {
      res.setHeader('cache-control', `public max-age=${5}`);
    }
  })
);
app.use("/auth", authRouter);

app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  HandleError(err, res);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});