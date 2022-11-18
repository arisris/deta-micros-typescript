/** @type {import("express").Application} */
const app = require("./server").app;
if (!process.env.DETA_RUNTIME) {
  app.listen(3000, () => {
    console.log("Listening HTTP port 3000");
  });
} else {
  module.exports = app;
}
