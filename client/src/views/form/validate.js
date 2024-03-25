export default function validate (inputs){
    const errors = {}
    const regex = /^[a-zA-Z ]{1,15}$/
    
    const validateName = regex.test(inputs.name)
    if(inputs.name && !validateName){
        errors['name'] = "Invalid name or too long"
    }else{
        errors['name'] = ""
    }

    const validateLastname = regex.test(inputs.lastname)
    if(inputs.lastname && !validateLastname){
        errors['lastname'] = "Invalid lastname or too long"
    }else{
        errors['lastname'] = ""
    }

    const validateNationality = regex.test(inputs.nationality)
    if(inputs.nationality && !validateNationality ){
        errors['nationality'] = "Invalid nationality or too long"
    }else{
        errors['nationality'] = ""
    }

    const regexImage = /^(http:\/\/|https:\/\/)/
    const validateImage = regexImage.test(inputs.image)
    if(inputs.image && !validateImage ){
        errors['image'] = "Invalid url"
    }else{
        errors['image'] = ""
    }

    const regexDescription = /^.{0,100}$/
    const validateDescription = regexDescription.test(inputs.description)
    if(inputs.description && !validateDescription ){
        errors['description'] = "Description too long"
    }else{
        errors['description'] = ""
    }

    return errors;
}