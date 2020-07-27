const express = require('express')
const router = express.Router()

const Author = require('../model/author')
const Book = require('../model/book')

// CRUD methods
router.post('', async (req, res) => {
    try {
        // check if there is already an existing author
        let author = await Author.findOne({ first_name: req.body.first_name, last_name: req.body.last_name })

        if (!author) {
            // create
            author = new Author(req.body)
            await author.save() // save to db
            return res.status(201).send(author) // status code created
        }

        return res.send(author) // return existing author with status code ok

    } catch (error) {
        return res.status(500).send({ error })
    }
})

// Read single author
router.get('/:id', async (req, res) => {
    try {
        const author = await Author.findOne({ _id: req.params.id }) // find one author

        if (!author) {
            return res.status(404).send({ error: 'author with id cannot be found' })
        }

        return res.send(author)
    } catch (error) {
        res.status(500).send({ error })
    }
})

// Read all authors
router.get('', async (req, res) => {
    try {
        const authors = await Author.find({}) // find all authors

        // no authors found
        // if (authors && authors.length === 0) {
        //     return res.status(404).send({ error: 'no authors were found' })
        // }

        // everything went fine
        return res.send(authors)
    } catch (error) {
        res.status(500).send({ error })
    }
})


// Update single author
// nullable param
router.patch('/:id?', async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).send({ error: 'Bad Request' })
        }

        // update author and return the new updated author
        const author = await Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })

        // author not found with given id
        if (!author) {
            return res.status(404).send({ error: 'Unable to update author' })
        }

        return res.send(author)
    } catch (error) {
        return res.status(400).send({ error }) // bad request
    }
})

// Delete single author
// nullable param
router.delete('/:id?', async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).send({ error: 'Bad Request' })
        }

        // try to delete author
        const author = await Author.findOneAndDelete({ _id: req.params.id })

        if (!author) {
            return res.status(404).send({ error: 'author with id cannot be deleted' })
        }

        // delete every associated book
        await Book.deleteMany({ author: author })

        // everything went fine status code 200 return author
        return res.send(author)
    } catch (error) {
        return res.status(500).send({ error }) // bad request
    }
})

module.exports = router