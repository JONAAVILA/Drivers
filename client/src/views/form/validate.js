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

    const regexUrl = /^(http:\/\/|https:\/\/)/
    const validateUrl = regexUrl.test(inputs.url)
    if(inputs.url && !validateUrl ){
        errors['url'] = "Invalid url"
    }else{
        errors['url'] = ""
    }

    const regexText = /^.{0,100}$/
    const validateText= regexText.test(inputs.text)
    if(inputs.text && !validateText ){
        errors['text'] = "Text too long"
    }else{
        errors['text'] = ""
    }

    return errors;
}