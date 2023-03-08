const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const config = require("config");
const JWTSECRET = config.get("jwtSecret");

const register = async (req, res) => {
  try {
    const { userName, mail, password } = req.body;

    const candidate = await User.findOne({ mail });

    if (candidate) {
      return res
        .status(400)
        .json({ message: "User with such an email already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await new User({
      userName,
      mail,
      password,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User was successfully created!" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

const login = async (req, res) => {
  try {
    const { mail, password } = req.body;

    const user = await User.findOne({ mail });

    if (!user) return res.status(400).json({ message: "User is not found!" });
    if (user.userStatus === "blocked")
      return res.status(400).json({ message: "Sorry, you are blocked." });

    const IsMatch = await bcrypt.compare(password, user.password);

    if (!IsMatch) {
      return res
        .status(400)
        .json({ message: "Incorrect password, try again!" });
    }

    const token = jwt.sign({ id: user._id }, JWTSECRET);
    res.json({
      user: {
        token: token,
        id: user._id,
        userName: user.userName,
        mail: mail,
        userStatus: user.userStatus,
      },
      message: "You are successfully loged in!",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Something went wrong, try again!" });
  }
};

module.exports = { register, login };
