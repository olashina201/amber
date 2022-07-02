import mongoose, { Schema } from "mongoose"

const Emergency = new Schema({
    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    middlename: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
})

export default mongoose.models.emergency || mongoose.model("emergency", Emergency);
