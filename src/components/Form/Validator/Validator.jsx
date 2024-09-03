
import rules from "../../../Validators/rules";
import testEmail from "../../../Validators/regex";


const validator = (value, validations) => {
    console.log('validator=>', value, validations);
    const validationResult = [];
    for (const validator of validations) {
        console.log(validator);
        if (validator.value === rules.requiredValue) {
            value.trim().length === 0 && validationResult.push(false)
        }
        else if (validator.value === rules.minValue) {
            value.trim().length < validator.min && validationResult.push(false)
        }
        else if (validator.value === rules.maxValue) {
            value.trim().length > validator.max && validationResult.push(false);
        }
        if (validator.value === rules.emailValue) {
            !testEmail(value.trim()) && validationResult.push(false);
        }
    }
    console.log(validationResult);
    if (validationResult.length) {
        return false;
    }
    else {
        return true;
    }
}

export default validator;