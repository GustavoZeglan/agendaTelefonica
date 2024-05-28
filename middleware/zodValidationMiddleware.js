const z = require("zod");

const zodValidationMiddleware = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        return next();
    } catch (error) {
        if(error instanceof z.ZodError) {
            const errors = error.errors.map(er => er.message);
            return res.status(500).json({message: "An error occurred", errors});
        }
        return res.status(500).json({message: "An error occurred"});
    }
};

module.exports = zodValidationMiddleware;
