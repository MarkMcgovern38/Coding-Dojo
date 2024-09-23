import { Schema, model } from "mongoose";

const bookSchema = new Schema({
    title: {
        type: String,
        minLength:[2, "Title must be at least two characters"],
        maxLength:[255, "Title can not exceed 255 characters"]
    },
    author:{
        type: String,
        minLength: [5, "Title must be at least five characters"],
        maxLength: [255, "Title can not exceed 255 characters"]
    },
    pages: {
        type: Number,
        required: [true, "Number of pages is required"],
        min: [1, "Must have at least one page"]
    },
    isAvailable: {
        type: Boolean,
        default: false
    },
}, {timestamps: true})
const Book = model("Book", bookSchema)
export default Book
