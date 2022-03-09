const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

app.use("/api/v2", require("./api"));

app.listen(8081, () => console.log("Server is running"));
