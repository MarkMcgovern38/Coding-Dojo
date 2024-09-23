import {Router} from 'express'
import { bookController } from '../controllers/book.controller.js'

const router = Router()

router.route('/books')
    .post(bookController.createBook)
    .get(bookController.getAllBooks)
router.route('/books/:id')
    .get(bookController.getBook)
    .delete(bookController.deleteBook)
    .put(bookController.updateBook)


export default router;