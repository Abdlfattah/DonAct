import { TextInput, FileInput, TextAreaInput, SelectInput  } from '../../widgets/render_field'
import { options } from '../../widgets/charity_type'

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
        placeholder:'Upload image',
        comp:FileInput
    }
]