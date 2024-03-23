export default function validate (inputs){
    const errors = {}

    const regexNameDriver = /^[a-zA-Z0-9 ]{1,15}$/;
    const validateNameDriver = regexNameDriver.test(inputs.name)
    if(inputs.name && !validateNameDriver){
        errors['name'] = "Enter a valid name or Too long"
    }else{
        errors['name'] = ""
    }

    return errors;
}