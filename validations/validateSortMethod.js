
const validateSortMethod = (order) => {
    if (!["ASC", "DESC"].includes(order.toUpperCase())) {
        return true;
    }
    return null;
}
module.exports = validateSortMethod;