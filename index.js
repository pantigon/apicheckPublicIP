const express = require("express");
const app = express();
const requestIp = require("request-ip");

const PORT = process.env.PORT || 3000;

app.use(requestIp.mw());

app.get("/", (req, res) => {
  const clientIp = req.clientIp;
  res.send(clientIp);
});

app.listen(PORT, () => console.log(`Server is listening on port 3000`));
