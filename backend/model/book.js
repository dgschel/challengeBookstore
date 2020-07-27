const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    isbn: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' }
}, { timestamps: true })

const bookModel = mongoose.model('Book', bookSchema)

module.exports = bookModel