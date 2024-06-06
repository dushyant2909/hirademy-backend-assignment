import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const assistantSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    mobile: {
        type: String,
        required: true,
        trim: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
        trim: true,
    },
    country: {
        type: String,
        required: true,
        trim: true,
    },
    department: {
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
    },
    thumbnail: {
        type: String,
        trim: true,
    }
}, {
    timestamps: true // To add createdAt and updatedAt field 
});

// Before saving the assistant, hash the password if it has been modified
assistantSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

export const Assistant = mongoose.model("Assistant", assistantSchema);
