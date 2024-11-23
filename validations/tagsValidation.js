

const tagsValidation = (tags) => {
    if (!tags || !Array.isArray(tags) || tags.length === 0) {
        return "Tags array must be non-empty.";
    }

    for (let tag of tags) {
        if (!tag || tag.trim().length === 0) {
            return "Tags must be non-empty strings.";
        }

        if (tag.length > 20) {
            return "tag characters limit exceeds.";
        }
    }

    if (tags.length > 5) {
        return "tags limit exceeds. no more than 5 tags.";
    }

    return null;
    
}
module.exports = tagsValidation;