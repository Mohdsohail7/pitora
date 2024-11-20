const { query } = require("express");
const { photo } = require("../models/photo");
const { searchHistory } = require("../models/searchHistory");
const { tag: tagModel } = require("../models/tag");
const inputTagValidation = require("../validations/inputTagValidation");
const validateSortMethod = require("../validations/validateSortMethod");

const searchPhotosByTagsAndSortingByDate = async (req, res) => {
    try {
        const { tags } = req.query;
        const { userId } = req.query;
        const order = req.query.order || "ASC";

        if (!userId) {
            return res.status(400).json({ error: "userId is missing."});
        }

        // tag validations
        const validateTag = inputTagValidation(tags);
        if (validateTag) {
            return res.status(400).json({ error: validateTag});
        }
        // sorting validation
        const checkSortedMethod = validateSortMethod(order);
        if (checkSortedMethod) {
            return res.status(400).json({ error: "Invalid sort order. Use 'ASC' or 'DESC'." });
        }

        const photoByTag = await tagModel.findOne({ where: { name: tags.trim() }});
        if (!photoByTag) {
            return res.status(404).json({ error: "Photo not found by this tag"});
        }

        const { photoId } = photoByTag;
        console.log("photoId-->", photoId);
        // we need to add include
        const photos = await photo.findAll({ where: { id: photoId },
            order: [["dateSaved", order.toUpperCase()]],
        });

        // user id Valiadtion
        if (userId) {
            await searchHistory.create({
                userId,
                query: tags.trim(),
            });
        }
        // this work with associations 
        // const response = photos.map((photo) => ({
        //     id: photo.id,
        //     imageUrl: photo.imageUrl,
        //     description: photo.description,
        //     altDescription: photo.altDescription,
        //     dateSaved: photo.dateSaved,
        //     tags: photo.tags.map(tag => tag.name)
        // }));

        const response = await Promise.all(photos.map(async (photo) => {
            const tagsForPhoto = await tagModel.findAll({ where: { photoId: photo.id } });
            return {
                //id: photo.id,
                imageUrl: photo.imageUrl,
                description: photo.description,
                altDescription: photo.altDescription,
                dateSaved: photo.dateSaved,
                tags: tagsForPhoto.map(tag => tag.name),
            };
        }));

        return res.status(200).json({ photos: response });


    } catch (error) {
        return res.status(500).json({ message: "An error occurred while searching photos.", error: error.message });
    }
}

module.exports = searchPhotosByTagsAndSortingByDate;