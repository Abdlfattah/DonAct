import { TextInput, TextAreaInput, SelectInput  } from '../../widgets/input_field/render_field'
import { options } from '../../config/donation_type'
import InputFile from '../../widgets/input_file'

export const items=[
    { 
        name:'title',
        type:'text',
        icon:'file alternate',
        placeholder:'Enter a title to your request',
        comp:TextInput
    },
    { 
        name:'type',
        type:'select',
        icon:'sort',
        placeholder:'Choose the type of your post', 
        comp:SelectInput,
        options:options
    },
    { 
        name:'description',
        type:'text',
        icon:'pencil alternate',
        placeholder:'Enter a short description of your need',
        comp:TextAreaInput,
        required:true 
    },
    { 
        name:'image',
        type:'file',
        icon:'',
        title:'Upload an image for your post',
        placeholder:'Upload image',
        comp:InputFile,
    }
]