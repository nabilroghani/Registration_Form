const express = require("express");
require("dotenv").config();
const connectedDB = require("./config/DB");
const router = require("./routes/route");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

connectedDB();

app.use(express.json());

app.use(cors());

app.use("/api", router);


app.listen(PORT, ()=> {
    console.log(`server running on http://localhost:${PORT}`);
})
