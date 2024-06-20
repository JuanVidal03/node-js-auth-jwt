import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
        maxLength: 20,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minLength: 8,
    }
});

export const authModel = mongoose.model('auth', authSchema);