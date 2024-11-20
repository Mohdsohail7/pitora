

const inputTagValidation = (tag) => {
    if (!tag || tag.trim().length === 0) {
        return "Tag is missing in query parameter OR cannot be empty.";
    }
    if (typeof tag !== "string") {
        return "Tag must be a string."
    }
    if (tag.includes(",")) {
        return "Only a single tag is allowed. Multiple tags are not accepted.";
    }
    return null;

}
module.exports = inputTagValidation;