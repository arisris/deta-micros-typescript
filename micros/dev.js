const app = require("./dist");

app.default.listen(3000, () => {
  console.log("Dev app is now tun at port 3000");
});
