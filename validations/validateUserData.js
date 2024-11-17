
const validateUserData = (username, email) => {
    if (!username || !email) {
        return  "Username or Email are required";
    }

    if (!email.includes('@') || !email.includes('.')) {
        return "Invalid Email format. Please check @ or . added in your email";
    }
}
module.exports = {validateUserData};