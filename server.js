// Dependencies
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// app use express
const app = express();

// creating environment variable port
const PORT = process.env.PORT || 3001;

// asks express to create a route for every file in the 'public' folder and give it a '/' route
//app.use(express.static("public"));
// sets up express app to handel data parser, middle wear created req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// routes to route files
//require("./routes/apiRoutes")(app);
//require('./routes/htmlRoutes')(app);
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// app listener - starts the server
app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
