import express, { Router } from "express";

const router: Router = express.Router();

router.use("/", (req, res) => {
  res.json({ message: "this is a home route" });
});

export default router;
// router.use('')
