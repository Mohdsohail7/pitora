const { user } = require("../models/user");



const doesUserExist = async (email) => {
    const emailExist = await user.findOne({ where: { email } });
    if (emailExist) {
        return true;
    } else {
        return false;
    }
}
module.exports = { doesUserExist }