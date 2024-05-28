const z = require("zod");

const phoneRegex = /^(\+\d{1,3})?(\d{10,11})$/;

const ContactUpdateSchema = z.object({
    name: z.string({"message": "name is required"}).min(3).optional(),
    email: z.string({"message": "email is required"}).email().optional(),
    phone: z.string({"message": "phone is required"}).regex(phoneRegex,"invalid phone number format").optional(),
})

module.exports = ContactUpdateSchema;