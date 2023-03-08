const User = require("../models/User");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ users: users, message: "Users were found" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const deleteUsers = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ id: req.params.id, message: "User has been deleted." });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const blockUsers = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: { userStatus: "blocked" },
      },
      { new: true }
    );
    res.status(200).json({ id: req.params.id, message: "User was blocked." });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const unblockUsers = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: { userStatus: "active" },
      },
      { new: true }
    );
    res.status(200).json({ id: req.params.id, message: "User was unblocked." });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

module.exports = { getUsers, deleteUsers, blockUsers, unblockUsers };
