import { Request, Response, Router } from 'express';

const router = Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello World!" });
});

export { router };
