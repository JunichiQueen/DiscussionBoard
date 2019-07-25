const Validator2 = require("validator");
const isEmpty = require("./isEmpty");

const validateEmail = (data) => {
    let errors2 = {};

    data.email = !isEmpty(data.email) ? data.email : "";

    if (!Validator2.isEmail(data.email)){
        errors2.email = "Email is invalid"
    }

        
    if (isEmpty(data.email)){
        errors2.email = "Email is empty"
    }

    return {
        errors2,
        isValid2: isEmpty(errors2)
    };
};

module.exports = validateEmail;