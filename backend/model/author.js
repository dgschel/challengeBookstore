const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        trim: true
    },
    last_name: {
        type: String,
        required: true,
        trim: true
    },
    // books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book'}]
}, { timestamps: true })

const authorModel = mongoose.model('Author', authorSchema)

module.exports = authorModel