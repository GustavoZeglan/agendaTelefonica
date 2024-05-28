const bcrypt = require("bcrypt");

const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compareSync(password, hashedPassword);
}

module.exports = {
    comparePassword
}