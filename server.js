const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
