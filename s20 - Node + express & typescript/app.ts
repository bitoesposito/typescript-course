import express, { type Request, type Response, type NextFunction } from "express";

import todoRoutes from "./routes/todo.ts";

const app = express();

app.use(todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({message: 'An error occurred!'});
});

app.listen(3000);

// exec it with the command node --experimental-strip-types app.ts (npm run start)