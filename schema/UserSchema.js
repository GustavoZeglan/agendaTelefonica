const z = require("zod");

const UserSchema = z.object({
    email: z.string({"message" : "missing email value"
    }).email("Informe um email válido"),
    password: z.string({
        "message" : "missing password value"}).min(4,"Informe uma senha válida")
})

module.exports = UserSchema;