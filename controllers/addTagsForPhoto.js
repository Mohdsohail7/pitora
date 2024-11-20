const { photo:photoModel } = require("../models/photo");
const { tag:tagModel } = require("../models/tag");
const tagsValidation = require("../validations/tagsValidation");



const addTagsOnPhoto = async (req, res) => {
    try {
        const photoId = parseInt(req.params.photoId);
        console.log("id -->", photoId);
        const { tags } = req.body;
        console.log("tags-->", {tags});
        
        if (!photoId || !tags) {
            return res.status(404).json({ error: "Data is missing."});
        }

        const tagsValidate = tagsValidation(tags);
        if (tagsValidate) {
            return res.status(400).json({ error: tagsValidate });
        }
        const existPhoto = await photoModel.findByPk(photoId);
        if (!existPhoto) {
            return res.status(404).json({ error: "photo not found By this id."});
        }

        const existTags = await tagModel.findAll({ where: { photoId }});
        if (!existTags) {
            return res.status(404).json({ error: "existing tags not found."});
        }

        if (existTags.length + tags.length > 5) {
            return res.status(400).json({ error: "Cannot add more than 5 tags to a photo."});
        }
        const existTagsName = existTags.map((tagName) => tagName.name);
        const uniqueNewTags = tags.filter((tag) => !existTagsName.includes(tag));
        if (uniqueNewTags.length > 0) {
            await tagModel.bulkCreate(uniqueNewTags.map((tag) => ({ name: tag, photoId})));
        }

        const updatedTags = await tagModel.findAll({ where: { photoId }});

        return res.status(201).json({ message: "Tags added successfully", updatedTags });
    
    } catch (error) {
        return res.status(500).json({ message: "tags not added."});
    }
}

const getAllTags = async (req, res) => {
    //const photoId = parseInt(req.params.photoId);
    const tags = await tagModel.findAll();
    if (tags.length === 0) {
        return res.status(400).json({ error: "tags not fetch"});
    }
    return res.status(200).json(tags);
}
module.exports = { addTagsOnPhoto, getAllTags };