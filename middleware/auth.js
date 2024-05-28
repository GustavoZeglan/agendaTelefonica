const { verify } = require("jsonwebtoken");

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) return res.status(401).json({message: "Credential invalid", status: 401});
        const { id }  = verify(token, process.env.SECRET);
        req.user = id;
        next();
    } catch (e) {
        return res.status(401).json("Credential invalid");
    }
}

module.exports = { auth }