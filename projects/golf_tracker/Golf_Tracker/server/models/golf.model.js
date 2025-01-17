import { Schema, model } from "mongoose";

const golfSchema = new Schema({
    courseName: {
        type: String,
        required: [true, "Golf course name is required"],
        minLength: [1, "Name must be at least 1 characters"]
    },
    scores: {
        type: [Number],
        required: [true, "Score is required"],
        validate: {
            validator: function (arr) {
                return arr.length === 18; // Ensure exactly 18 scores are provided
            },
            message: "Scores must have exactly 18 values",
        },
    },
    notes: {
        type: String,
        minLength: [1, "Name must be at least 1 characters"]
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

}, { timestamps: true })
const Golf = model("Golf", golfSchema)
export default Golf
