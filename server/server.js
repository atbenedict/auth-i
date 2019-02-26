const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
const express = require("express");
const server = express();
const auth = require("./data/api/routes/authRouter");
const user = require("./data/api/routes/userRouter");

const sessionConfig = {
  name: "cookieMonster",
  secret: "Mellon",
  cookie: {
    maxAge: 1000 * 60 * 30, //30 minutes
    secure: false //used over https - want to use true in production
  },
  httpOnly: true, //cannot access cookie from JS
  resave: false,
  saveUninitialized: false
  //do you create a cookie automatically without consent?
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));
server.use("/api", auth);
server.use("/api/users", user);

server.get("/", (req, res) => {
  res.send();
});

module.exports = server;
