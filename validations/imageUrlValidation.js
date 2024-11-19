

const imageUrlValidation = (imageUrl) => {
    if (!imageUrl.startsWith('https://images.unsplash.com/')) {
        return true;
    }
    return null;
}
module.exports = imageUrlValidation;