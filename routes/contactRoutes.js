const express = require("express");
const router = express.Router(); //router is a method in express
const {
  getContacts,
  createContact,
  UpdateContact,
  deleteContact,
  getContact, 
} = require("../controller/contactController"); //importing getContacts function from contactController.js

router.route("/").get(getContacts).post(createContact); //get request



router.route("/:id").get(getContact).put(UpdateContact).delete(deleteContact);


module.exports = router; //exporting router
