require('dotenv').config();
const express = require("express");
const sequelize = require("./config/connection");
const routes = require("./routes");


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.send("Welcome to the Tech Blog API!");
});


sequelize.sync({ force: true }) 
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  })
  .catch(err => {
    console.error("Failed to sync database:", err);
  });
