
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

module.exports = { createNewUser };