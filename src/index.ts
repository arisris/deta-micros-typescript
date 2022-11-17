import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/hello.json", (_, res) => {
  res.json({ msg: "Hello World" });
});

export default app;
