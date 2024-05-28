const ContactService = require("../service/ContactService");

const createContact = async (req, res) => {
    const { name, email, phone } = req.body;
    const userId = req.user;

    const contact = await ContactService.createContact(userId, name, email, phone);
    if(!contact) return res.status(400).json({message: "An unexpected error occurred", status: 400});

    delete contact.userId;
    return res.status(201).json({message: "Contact was created with success", status: 201, contact});
}

const getAllContacts = async (req, res) => {
    const userId = req.user;

    const contacts = await ContactService.getAllContactsByUserId(userId);
    return res.status(201).json(contacts);
}

const updateContact = async (req, res) => {
    const {name, email, phone} = req.body;
    const id  = Number(req.params.id);
    const userId = req.user;

    if (!id) return res.status(400).json({message: "The id was not found", status: 400});

    const storagedContact = await ContactService.getContactById(id, userId);
    if(!storagedContact) return res.status(400).json({message: "The contact provided was not found", status: 400});

    const updatedContact = await ContactService.updateContact(userId, id, name, email, phone);
    delete updatedContact.userId;
    return res.status(200).json({message: "Contact is updated with success", status: 200, updatedContact});
}

const deleteContact = async (req, res) => {

    const id  = Number(req.params.id);
    const userId = req.user;

    if (!id) return res.status(400).json({message: "The id was not found", status: 400});

    const storagedContact = await ContactService.getContactById(id, userId);
    if(!storagedContact) return res.status(400).json({message: "The contact provided was not found", status: 400});

    await ContactService.deleteContact(userId, id)

    return res.status(200).json({message: "Contact is deleted with success", status: 200});
}

module.exports = {
    createContact,
    getAllContacts,
    updateContact,
    deleteContact
}