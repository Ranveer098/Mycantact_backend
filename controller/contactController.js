//we will giviing label to nparticular API

const asyncHandler = require("express-async-handler"); //to handle the error in async await we use this package

//@desc Get all contact
//@route GET /api/contact
//@access Public

const getContacts = asyncHandler(async(req, res) => {       //to resolve the promise we use async and await in mongoose to catch error we use try and catch
  res.status(200).json({ message: "Get all contacts" });
});

//@desc post new  contacts
//@route GET/api/contacts
//@access Public

const createContact =asyncHandler(async (req, res) => {
  //get request

  console.log("This request Body",req.body); //req.body is used to get the data from the body of th
  
  const { name, email, phone} = req.body; //destructuring
  if (!name || !email|| !phone ) {
     res.status(400);
     throw new Error("Please enter all fields" );
  } 
  res.status(201).json({ message: "create contact" });
});

//@desc GET  contacts
//@route GET/api/contacts:id
//@access Public

const getContact =asyncHandler(async (req, res) => {
  //get request
  res.status(200).json({ message: `Get contact for ${req.params.id}` }); //req.params.id is used to get the id from the url
});

//@desc Update  contacts
//@route PUT /api/contacts:id
//@access Public

const UpdateContact =asyncHandler(async (req, res) => {
  //get request
  res.status(200).json({ message: `update contact for ${req.params.id}` }); //req.params.id is used to get the id from the url
});

//@desc delete contacts
//@route DELETE /api/contacts:id
//@access Public

const deleteContact =asyncHandler(async (req, res) => { //asyncHandler is used to handle the error in async await
  //get request
  res.status(200).json({ message: `Delete contact for  ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  getContact,
  UpdateContact,
  deleteContact,
}; //exporting router
