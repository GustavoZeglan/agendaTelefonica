const {generatePassword} = require("../utils/generatePassword");
const prisma = require("../db/prisma");

const getUserByEmail = async (email) => {
    return prisma.user.findFirst({
        where: {
            email
        }
    });
}

const getUserById = async (userId) => {
    return prisma.user.findFirst({
        where: {
            id: userId
        }
    });
}

const createUser = async (email, password) => {
    const hashedPassword = await generatePassword(password);
    return prisma.user.create({
        data: {
            email,
            password: hashedPassword
        }
    });
}

module.exports = {
    createUser,
    getUserById,
    getUserByEmail
}