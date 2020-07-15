const express = require("express");
const router = express.Router();

const userRouter = require("./user");
const chatRouter = require("./chat");

router.get("/", (req, res) => {
  res.json({ intro: "How we can go Naver?" });
});

router.use("/user", userRouter);
router.use("/chat", chatRouter);

module.exports = router;
