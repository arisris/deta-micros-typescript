import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(process.cwd(), "public"), {
  
}));
app.get("/", (_, res) => {
  res.send("Hello Broww");
});
app.get("/hello.json", (_, res) => {
  res.json({ msg: "Hello World" });
});

export { app };
