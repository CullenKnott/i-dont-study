// Dependencies
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// app use express
const app = express();

// creating environment variable port
const PORT = process.env.PORT || 3001;

// sets up express app to handel data parser, middle wear created req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create a route for every file in the public folder
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// app listener - starts the server
app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
