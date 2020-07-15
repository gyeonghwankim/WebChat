const express = require("express");
const router = express.Router();
const User = require("../schemas/user");

router.get("/", (req, res) => {
  User.find({}, (err, docs) => {
    if (err)
      console.log(err);
    res.json(docs)
  })
});

router.post("/signup", async(req, res) => {
  const user_id = req.body.user_id;
  const password = req.body.password;
  const nick_name = req.body.nick_name;

  const newUser = new User({user_id: user_id, password: password, nick_name: nick_name});
  newUser.save().then(() => {
    res.status(200).send("You have created a new account!");
  }).catch(() => {
    res.status(300).send("Failed to create a new account.");
  })
});

module.exports = router;