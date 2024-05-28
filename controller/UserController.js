const UserService = require("../service/UserService")
const {comparePassword} = require("../utils/comparePassword");
const {generateToken} = require("../utils/generateToken");
const UserSchema = require("../schema/UserSchema");
const z = require("zod");

const login = async (req, res) => {
    const { email, password } = req.body;

    const storageUser = await UserService.getUserByEmail(email);
    if (!storageUser) return res.status(400).json({message: "An unexpected error occurred", status: 400});

    const passwordBelongsToUser = await comparePassword(password, storageUser.password);
    if (!passwordBelongsToUser) return res.status(400).json({message: "An unexpected error occurred", status: 400});

    const token = await generateToken(storageUser);
    return res.status(200).json({message: "You are Authenticated", status: 200, token: token})
}

const register = async (req, res) => {
    const {email, password} = req.body;

    const storageUser = await UserService.getUserByEmail(email);
    if (storageUser) return res.status(400).json({message: "An Error ocurred", status: 400});

    const user = await UserService.createUser(email, password);
    delete user.password;
    return res.status(200).json({message: "User is saved with succes", status: 200, user})
}

module.exports = {
    register,
    login
}