const express = require("express");
const cors=require("cors");
const app = express();
require("dotenv").config();
const PORT = 3000;
const connectDB =
  require("./config/db");
const notesRoutes =
  require("./routes/notesRoutes");
const authRoutes =
  require("./routes/authRoutes");
const habitRoutes =
  require("./routes/habitRoutes");

app.use(express.json());
app.use(cors());
app.use("/notes", notesRoutes);
app.use("/auth", authRoutes);
app.use("/habits", habitRoutes);

app.get("/", (req, res) => {

		res.send("Backend Running");

});
connectDB();

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});

const aiRoutes =
  require("./routes/aiRoutes");

app.use("/ai", aiRoutes);