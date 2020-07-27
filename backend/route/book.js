const express = require('express')
const router = express.Router()

const Book = require('../model/book')
const Author = require('../model/author')

// CRUD methods
router.post('', async (req, res) => {
    try {
        if (!req.body.author) return res.status(400).send({ error: 'missing author' }) // stop execution flow

        // is there a valid author?
        let author = await Author.findOne({ first_name: req.body.author.first_name, last_name: req.body.author.last_name })

        // is there already a book with given name AND isbn?
        let book = await Book.findOne({ name: req.body.name, isbn: req.body.isbn })

        if (book) throw new Error('Book already exists')

        if (!author) {
            // create
            author = await new Author(req.body.author)
            await author.save() // save author to database
        }

        if (!book) {
            book = new Book(req.body) // read JSON from body and create our model
        }
        
        book.author = author // attach author
        await book.save() // using ES6 feature async await to save document to database

        return res.status(201).send(book) // status 201 indicated that we created successfully our doc 
    } catch (error) {
        // catch required fields or not connected to db
        return res.status(500).send({ error })
    }
})

// Read single book
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findOne({ _id: req.params.id }).populate('author') // find one book and populate the corresponding author doc

        if (!book) {
            return res.status(404).send({ error: 'book with id cannot be found' })
        }

        return res.send(book)
    } catch (error) {
        res.status(500).send({ error })
    }
})

// Read all books
router.get('', async (req, res) => {
    try {
        const books = await Book.find({}) // find all books

        // no books found
        // if (books && books.length === 0) {
        //     return res.status(404).send({ error: 'no books were found' }) // return is important because we stop the execution flow
        // }

        // everything went fine
        return res.send(books)
    } catch (error) {
        res.status(500).send({ error })
    }
})


// Update single book
// nullable param
router.patch('/:id?', async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).send({ error: 'Bad Request' })
        }

        // update book and return the new updated book
        const book = await Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })

        // book not found with given id
        if (!book) {
            return res.status(404).send({ error: 'Unable to update book' })
        }

        return res.send(book)
    } catch (error) {
        return res.status(400).send({ error }) // bad request
    }
})

// Delete single book
// nullable param
router.delete('/:id?', async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).send({ error: 'Bad Request' })
        }

        // try to delete book
        const book = await Book.findOneAndDelete({ _id: req.params.id })

        if (!book) {
            return res.status(404).send({ error: 'book with id cannot be deleted' })
        }

        // everything went fine status code 200 return book
        return res.send(book)
    } catch (error) {
        return res.status(500).send({ error }) // bad request
    }
})

module.exports = router