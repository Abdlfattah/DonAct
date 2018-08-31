export  function validate (values){
    const errors = {}
    //validation email 
    if (!values.email) {
      errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    //validation password
    if (!values.password) {
      errors.password = 'The password is required'
    } else if (!/(?=.{6,})/.test(values.password)) {
        errors.password = 'The password must be at least 8 characters'
      
    } else if (!/(?=.*\d)(?=.*[a-z])/.test(values.password)) {
      errors.password = 'The password must be a combination of alphabets and numbers '
    }
    //validation the two password
    if (!values.password_confirm) {
        errors.password_confirm = 'The password is required'
      } else if (!(values.password_confirm === values.password)) {
          errors.password_confirm = 'Password does not match the confirm password'
      }
    
    //validation name
    if(!values.name){
        errors.name = 'The name is required'
    }
     //validation lastname
     if(!values.lastname){
        errors.lastname = 'The lastname is required'
    }
    if(values.checkbox===false){
        errors.checkbox = 'You need to agree before you sign up'
    }
    if(!values.phoneNumber){
      errors.phoneNumber = 'The phone number is required'
  }

    return errors
  }
