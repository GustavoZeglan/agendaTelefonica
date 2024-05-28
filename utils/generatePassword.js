const bcrypt = require('bcrypt');
const saltRounds = 10;

const generatePassword = async (password) => {
    const salt = await bcrypt.genSaltSync(saltRounds);
    return await bcrypt.hashSync(password, salt);
}

module.exports = { generatePassword }