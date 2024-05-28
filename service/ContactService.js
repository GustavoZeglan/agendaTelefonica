const prisma = require("../db/prisma");

const createContact = async (userId, name, email, phone) => {
    return prisma.contact.create({
        data: {
            userId,
            name,
            email,
            phone
        }
    })
}

const getAllContactsByUserId = async (userId) => {
    return prisma.contact.findMany({
        where: {
            userId
        },
        select: {
            id: true,
            name: true,
            email: true,
            phone: true
        }
    })
}

const getContactById = async (id, userId) => {
    return prisma.contact.findFirst({
        where: {
            id,
            userId
        }
    })
}

const updateContact = async (userId, contactId, name, email, phone) => {
    return prisma.contact.update({
        where: {
            id: contactId,
            userId
        },
        data: {
            name,
            email,
            phone
        }
    })
}

const deleteContact = async (userId, contactId) => {
    return prisma.contact.delete({
        where: {
            id: contactId,
            userId
        }
    })
}

module.exports = {
    createContact,
    getAllContactsByUserId,
    updateContact,
    deleteContact,
    getContactById
}