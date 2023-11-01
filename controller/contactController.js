//we will giviing label to nparticular API

//@desc Get all contact
//@route GET /api/contact
//@access Public

const getContacts = async(req, res) => {       //to resolve the promise we use async and await in mongoose
  res.status(200).json({ message: "Get all contacts" });
};

//@desc post new  contacts
//@route GET/api/contacts
//@access Public

const createContact =async (req, res) => {
  //get request

  console.log("This request Body",req.body); //req.body is used to get the data from the body of th
  
  const { name, email, phone} = req.body; //destructuring
  if (!name || !email|| !phone ) {
     res.status(400);
     throw new Error("Please enter all fields" );
  } 
  res.status(201).json({ message: "create contact" });
};

//@desc GET  contacts
//@route GET/api/contacts:id
//@access Public

const getContact =async (req, res) => {
  //get request
  res.status(200).json({ message: `Get contact for ${req.params.id}` }); //req.params.id is used to get the id from the url
};

//@desc Update  contacts
//@route PUT /api/contacts:id
//@access Public

const UpdateContact =async (req, res) => {
  //get request
  res.status(200).json({ message: `update contact for ${req.params.id}` }); //req.params.id is used to get the id from the url
};

//@desc delete contacts
//@route DELETE /api/contacts:id
//@access Public

const deleteContact =async (req, res) => {
  //get request
  res.status(200).json({ message: `Delete contact for  ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  getContact,
  UpdateContact,
  deleteContact,
}; //exporting router
