const { Router } = require("express");
const {
  getUsers,
  deleteUsers,
  blockUsers,
  unblockUsers,
} = require("../controllers/users");
const { verifyToken } = require("../middlewars/verifyToken");
const router = Router();

router.get("/", verifyToken, getUsers);

router.delete("/delete/:id", verifyToken, deleteUsers);

router.put("/block/:id", blockUsers);

router.put("/unblock/:id", unblockUsers);

module.exports = router;
