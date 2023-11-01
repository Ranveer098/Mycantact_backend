const express = require("express"); // import express
const erroHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config;
 // import dotenv

const app = express(); // initialize express

const port = process.env.PORT || 3000; // set port

app.use(express.json()); // middleware TO RECEIVE DATA FROM CILENT and reqest to server by parsing json data

app.use("/api/contacts",require("./routes/contactRoutes")); // use express router  //adding middleware
app.use(erroHandler)  //adding middleware to handle error


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); // start server