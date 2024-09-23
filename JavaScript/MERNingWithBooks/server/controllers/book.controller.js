import Book from "../models/book.model.js";


export const bookController = {
    createBook: async (req, res) => {
        try{
            const newBook = await Book.create(req.body)
            console.log(newBook);
            return res.status(201).json(newBook)
        }
        catch(err){
            return res.status(500).json(err)
        }
    },
    getAllBooks: async (req, res) => {
        try {
            const allBooks = await Book.find()
            res.status(200).json(allBooks)
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    getBook: async (req, res) => {
        try {
            const id = req.params.id
            const oneBook = await Book.findById(id)
            return res.status(200).json(oneBook)
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    updateBook: async (req, res) => {
        try {
            const options = {
                new: true,
                runValidators: true
            }
            const id = req.params.id
            const response = await Book.findByIdAndUpdate(id, req.body, options)
            return res.status(201).json(response)
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    deleteBook: async (req, res) => {
        try {
            const id = req.params.id
            await Book.findByIdAndDelete(id)
            return res.status(204).send()
        }
        catch (err) {
            return res.status(500).json(err)
        }
    }

}