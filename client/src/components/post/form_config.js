export default function validate (values){
    const errors = {}
    //validation name
    if (!values.title) {
      errors.title = 'The title is required'
    }
    //validation the two password
    if (!values.description) {
        errors.description = 'A short description of your need is required'
    }
    //validation name
    if(!values.type){
        errors.type = 'You need to specify the nature of your need'
    }
     //validation lastname
     if(!values.image){
        errors.image = 'You need to attach an adequate image four you post '
    }

    return errors
  }
