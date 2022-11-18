import { Router } from "express";

const router = Router();

router.get("/login", (_, res) => {
  res.send(`
<div>Login Page</div>
  `);
});

export default router;
