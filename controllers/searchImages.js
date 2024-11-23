const axiosInstance = require("../axios/axios");
const { validateQuery } = require("../validations/imageValidation");


const searchImages = async (req, res) => {
    const validateInput = validateQuery(req.query.query);
    if (validateInput) {
        return res.status(400).json(validateInput);
    }

    try {
        const query = req.query.query;
        const response = await axiosInstance.get(`/search/photos?query=${query}`);

        if (!response.data || response.data.results.length === 0) {
            return res.status(404).json({ message: "No images found for the given query."});
        }

        const photos = response.data.results.map((photo) => ({
            imageUrl: photo.urls,
            description: photo.description,
            altDescription: photo.alt_description,
        }));

        return res.status(200).json({ photos });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch data from Unsplash API.", errorDetails: error.message} );
    }
}
module.exports = { searchImages };