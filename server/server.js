const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.URL)
  .then(() => console.log("Database is connected successfully"))
  .catch((err) => console.error(err));

// -----> Routes
app.use("/api/info", require("./routes/infoRoutes"));
app.use("/api/skills", require("./routes/skillRoutes"));
app.use("/api/project", require("./routes/projectRoutes"));
app.use("/api/experience", require("./routes/experienceRoutes"));
app.use("/api/training", require("./routes/trainingRoutes"));
app.use("/api/school", require("./routes/sclRoutes"));
app.use("/api/varsity", require("./routes/varsityRoutes"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
