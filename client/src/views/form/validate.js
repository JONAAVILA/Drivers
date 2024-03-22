export default function validate (inputs){
    const errors = {}

    const regexNameDriver = /^[a-zA-Z0-9 ]{1,15}$/;
    const validateNameDriver = regexNameDriver.test(inputs.name.forename)
    if(inputs.name.forename && !validateNameDriver){
        errors['name'] = "Enter a valid name or Too long"
    }else{
        errors['name'] = ""
    }

    return errors;
}