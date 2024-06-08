import { Assistant } from "../models/assistant.model.js";
import mongoose from "mongoose";

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
            success: true,
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

        // Check if the entered ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid Id format' });
        }

        const assistantDetails = await Assistant.findById(id)

        if (!assistantDetails)
            return res.status(401).json({
                success: false,
                message: "No assistant found with this id"
            })

        return res.status(200).json({
            success: true,
            message: "Assistant details fetched successfully",
            data: assistantDetails
        });
    } catch (error) {
        console.log("Error in getting assistant details::", error);
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong while getting assistant details",
                error: error.message
            }
        )
    }
}

const deleteAssistant = async (req, res) => {
    try {
        const { id } = req.params

        if (!id)
            return res.status(400).json({ message: 'Id is required' });

        // Check if the entered ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid Id format' });
        }

        const deletedAssistant = await Assistant.findByIdAndDelete(id)

        if (!deletedAssistant) {
            return res.status(404).json({
                success: false,
                message: "No assistant found with this id"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Assistant deleted successfully"
        })

    } catch (error) {
        console.log("Error in deleting assistant::", error);
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong while deleting assistant details",
                error: error.message
            }
        )
    }
}

const updateAssistant = async (req, res) => {
    try {
        const { id } = req.params

        const updateData = req.body

        if (!id)
            return res.status(400).json({ message: 'Id is required' });

        // Check if the entered ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid Id format' });
        }

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ success: false, message: 'No data provided to update' });
        }

         // If name is being updated, also update the thumbnail
         if (updateData.name) {
            const imageSeed = updateData.name.replace(/\s+/g, '%20');
            updateData.thumbnail = `https://api.dicebear.com/5.x/initials/svg?seed=${imageSeed}`;
        }

        const updatedAssistant = await Assistant.findByIdAndUpdate(id, { $set: updateData }, { new: true });

        if (!updatedAssistant) {
            return res.status(404).json({
                success: false,
                message: "No assistant found with this id"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Assistant updated successfully",
        });

    } catch (error) {
        console.log("Error in updating assistant::", error);
        return res.status(500).json(
            {
                success: false,
                message: "Something went wrong while updating assistant details",
                error: error.message
            }
        )
    }
}

export {
    createAssistant,
    assistantDetails,
    deleteAssistant,
    updateAssistant
}