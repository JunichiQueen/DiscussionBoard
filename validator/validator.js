const Validator = require("validator");
const isEmpty = require("./isEmpty");

const validateUser = (data) => {
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : "";


    if (!Validator.isAlphanumeric(data.username)){
        errors.username = "Username is invalid"
    }

        
    if (isEmpty(data.username)){
        errors.username = "Username is empty"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};

module.exports = validateUser;