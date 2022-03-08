const express = require("express");
const app = express();
app.use(express.json());

app.use("/api/v1", require("./api"));

app.listen(3000, () => console.log("Server is running"));
