const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json({ extended: true }));
app.use(cors());

const PORT = config.get("port") || 3001;
const MONGO_URI = config.get("mongoUri");

const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose.set("strictQuery", false);

async function start() {
  try {
    await mongoose.connect(MONGO_URI).then(() => {
      console.log("Connected to DB");
    });
    app.listen(PORT, () => console.log(`App has been started on PORT ${PORT}`));
  } catch (e) {
    console.log("Server Errors", e.message);
    process.exit(1);
  }
}

start();
