const express = require("express");
const router = express.Router();
const Chat = require("../schemas/chat");

router.get("/", (req, res) => {
  Chat.find({}, (err, docs) => {
    if (err)
      console.log(err);
    res.json(docs)
  })
});

module.exports = router;