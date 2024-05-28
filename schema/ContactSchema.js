const z = require("zod");

const phoneRegex = /^(\+\d{1,3})?(\d{10,11})$/;

const ContactSchema = z.object({
    name: z.string({"message": "name is required"}).min(3),
    email: z.string({"message": "email is required"}).email(),
    phone: z.string({"message": "phone is required"}).regex(phoneRegex,"invalid phone number format"),
})

module.exports = ContactSchema;