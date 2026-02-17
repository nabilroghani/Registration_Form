const express = require("express");
const connectedDB = require("./config/DB");
const router = require("./routes/route");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

connectedDB();

app.use(express.json());

app.use("/api", router);


app.listen(PORT, ()=> {
    console.log(`server running on http://localhost:${PORT}`);
})
