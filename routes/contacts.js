const express = require('express');
const zodValidationMiddleware = require("../middleware/zodValidationMiddleware");
const ContactSchema = require("../schema/ContactSchema");
const {createContact, updateContact, getAllContacts, deleteContact} = require("../controller/ContactController");
const {auth} = require("../middleware/auth");
const router = express.Router();

// Create Contact
router.post("/contato", auth, zodValidationMiddleware(ContactSchema), createContact);

// Get All Contacts
router.get("/contatos", auth, getAllContacts);

// Update Contact
router.put("/contato/:id", auth, zodValidationMiddleware(ContactSchema), updateContact);

// Delete Contact
router.delete("/contato/:id", auth, deleteContact);

module.exports = router;