const { Schema, model, Types } = require("mongoose");

const schema = new Schema(
  {
    userName: { type: String, required: true },
    mail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userStatus: { type: String, default: "active" },
  },
  { timestamps: true }
);

module.exports = model("User", schema);
