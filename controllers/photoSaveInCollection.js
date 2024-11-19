const { photo: photoModel } = require("../models/photo");
const imageUrlValidation = require("../validations/imageUrlValidation");
const tagsValidation = require("../validations/tagsValidation");


const photoSaveInCollection = async (req, res) => {
    try {
        console.log("data-> ", req.body);
        const { imageUrl, description, altDescription, tags, userId } = req.body;

        if (!imageUrl || !description || !altDescription || !tags || !userId) {
            return res.status(404).json({ error: "Photo data is missing. Please provide full data."});
        }

        const imageUrlValidate = imageUrlValidation(imageUrl);
        if (imageUrlValidate) {
            return res.status(400).json({ message: "Invalid image URL."});
        }

        const tagsValidate = tagsValidation(tags);
        if (tagsValidate) {
            return res.status(400).json({ error: tagsValidate });
        }

        const photo = await photoModel.create({ imageUrl, description, altDescription, tags, userId });

        return res.status(201).json({ message: "Photo saved successfully." });

    } catch (error) {
        return res.status(500).json({ message: "Photo data not save in database.", error: error.message });
    }
}

const getPhotos = async (req, res) => {
    const photos = await photoModel.findAll();

    if (!photos) {
        return res.status(404).json({ message: "Photos not found."});
    }

    return res.status(200).json({ photos });
}

module.exports = { photoSaveInCollection, getPhotos };