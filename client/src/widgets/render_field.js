import React from 'react'
import { Input, Select, TextArea } from 'semantic-ui-react'


export function TextInput ({
    input,
    required,
    meta: { touched, error, warning },
    ...rest
  }){
    return( 
            <div className='input-field' >
                <Input 
                    iconPosition='left'
                    fluid
                    error={touched&&error?true:false}
                    required={required} 
                    {...input} 
                    {...rest} 
                /> 
                <div className='error-input'>
                    {touched &&
                        ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
                </div>
            </div>
)}


export function SelectInput ({
    input,
    options,
    meta: { touched, error, warning },
    placeholder,
    ...rest  
  }){
    return( 
            <div >
                <Select
                    search
                    value={input.value}
                    options={options}
                    onChange={(event, data) => input.onChange(data.value)}
                   placeholder={placeholder}
                />
                <div className='error-input'>
                    {touched &&
                        ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
                </div>
            </div>
)}



const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

export const FileInput = ({ 
  input: { value, onChange, onBlur }, 
  meta: omitMeta, 
  placeholder,
  meta: { touched, error, warning },
  ...props 
}) => {
  return (
      <div>
            <input
                    onChange={adaptFileEventToValue(onChange)}
                    onBlur={adaptFileEventToValue(onBlur)}
                    type="file"
                    {...props.input}
                    {...props}
            />
            <div className='error-input'>
                {touched &&
                    ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
      </div>
    
  );
};



export const TextAreaInput = ({ 
    input, 
    required, 
    meta: { touched, error, warning }, 
    ...rest
}) => (
   <div>
        <TextArea
            required={required} 
            {...input} 
            {...rest} />
        <div className='error-input'>
                {touched &&
                    ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </div>
   </div>
  );


  