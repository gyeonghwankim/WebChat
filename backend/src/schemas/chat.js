const mongoose = require("mongoose");

const { Schema } = mongoose;

const ChatSchema = new Schema({
  user_id: { required: true, type: String },
  message: { required: true, type: String },
  image: { required: false, type: String },
  sendAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Chat", ChatSchema, "Chat");