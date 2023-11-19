import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.json({user: 1})
});

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

export default app