const jwt = require("jsonwebtoken");

const generateToken = ({id, email}) => {
    const privateKey = process.env.SECRET;
    return jwt.sign({ id, email }, privateKey, { expiresIn: '7d' });
}

module.exports = {
    generateToken
}