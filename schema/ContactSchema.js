const z = require("zod");

const phoneRegex = /^(\+\d{1,3})?(\d{10,11})$/;

const ContactSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    phone: z.string().regex(phoneRegex,"invalid phone number format"),
})

module.exports = ContactSchema;