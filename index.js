const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connect = require("./configs/db");
const cors = require("cors")

dotenv.config();
connect();
app.use(cors())

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

const userRoutes = require("./routes/user.route");
const postRoutes = require("./routes/post.route");

app.use("/api", userRoutes);
app.use("/api", postRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
