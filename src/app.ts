import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Hipster Castle!</h1>");
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
