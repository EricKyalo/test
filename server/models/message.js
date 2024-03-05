const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        companyName: {
            type: String,
            required: true
        },
        message: {
            type: String
        }


    });

module.exports = mongoose.model("message", messageSchema);