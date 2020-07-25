const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let routes = require("./routes/workout_routes.js");

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
