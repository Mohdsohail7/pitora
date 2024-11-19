
const { user: userModel } = require("../models/user");
const { doesUserExist } = require("../validations/doesUserExist");
const { validateUserData } = require("../validations/validateUserData");

const createNewUser = async (req, res) => {
    const { username, email } = req.body;
    try {
        const error = validateUserData(username, email);
        if (error) {
            return res.status(400).json({ error });
        }
        const emailExist = await doesUserExist(email);

        if (emailExist) {
            return res.status(400).json({ error: "User already exists with this email. Please try to new email." });
        }

        const user = await userModel.create({ username, email });

        return res.status(201).json({ message: "User created successfully", user});
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error", error });
    }
}

// get all users
const getAllUsers = async (req, res) => {
    const users = await userModel.findAll();

    if (!users || users.length === 0) {
        return res.status(404).json({ message: "Users not found."});
    }

    return res.status(200).json({ users });
}

// get user by id
const getUserById = async (req, res) => {
    const id = req.params.id;
    if (!id || id.length === 0) {
        return res.status(400).json({ message: "Id is missing."});
    }

    const user = await userModel.findOne({ where: { id }});

    if (!user || user.length === 0) {
        return res.status(404).json({ message: "User not found by this id. ",id })
    }
    return res.status(200).json({ user });
}

module.exports = { createNewUser, getAllUsers, getUserById };