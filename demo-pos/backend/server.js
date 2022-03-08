const express = require("express");
const app = express();
app.use(express.json());

app.use("/api/v2", require("./api"));

app.listen(8081, () => console.log("Server is running"));
