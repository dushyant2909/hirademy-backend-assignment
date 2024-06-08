import { Assistant } from "../models/assistant.model.js";

const createAssistant = async (req, res) => {
    try {
        const { email, name, mobile, salary, city, country, department, role, password } = req.body;

        if (!email || !name || !mobile || !salary || !city || !country || !department || !role || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const imageSeed = `${name}`.replace(/\s+/g, '%20');

        const newAssistant = await Assistant.create({
            email,
            name,
            mobile,
            salary,
            city,
            country,
            department,
            role,
            password,
            thumbnail: `https://api.dicebear.com/5.x/initials/svg?seed=${imageSeed}`
        });

        return res.status(200).json({
            success: "true",
            message: "Assistant created successfully",
            id: newAssistant._id
        });

    } catch (error) {
        console.log("Error in createAssistant controller::", error);
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong while creating assistant",
                error: error.message
            }
        )
    }
}

const assistantDetails = async (req, res) => {
    try {
        const { id } = req.params

        if (!id)
            return res.status(400).json({ message: 'Id is required' });

        const assistantDetails = await Assistant.findById(id)

        return res.status(200).json({
            success: "true",
            message: "Assistant details fetched successfully",
            data: assistantDetails
        });
    } catch (error) {
        console.log("Erron in getting assistant details::", error);
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong while getting assistant details",
                error: error.message
            }
        )
    }
}

export {
    createAssistant,
    assistantDetails
}