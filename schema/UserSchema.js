const z = require("zod");

const UserSchema = z.object({
    email: z.string().email("Informe um email válido"),
    password: z.string().min(4,"Informe uma senha válida")
})

module.exports = UserSchema;