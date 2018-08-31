import { SelectInput, TextInput } from '../../widgets/render_field'


export const items={
    donor:[
        {
            comp:TextInput,
            placeholder:'Enter your name', 
            name:'name',
            type:'text',
            icon:'user circle'
        },
        {
            comp:TextInput,
            placeholder:'Enter your last Name', 
            name:'lastname',
            type:'text',
            icon:'user circle'
        },
        {
            comp:TextInput,
            placeholder:'Email', 
            name:'email',
            type:'email',
            icon:'mail'
        },
        {
            comp:TextInput,
            placeholder:'Enter your phone number', 
            name:'phone_number',
            type:'number',
            icon:'phone'
        },
        {
            comp:TextInput,
            placeholder:'Enter your password', 
            name:'password',
            type:'password',
            icon:'key'
        },
        {
            comp:TextInput,
            placeholder:'Re-enter your password', 
            name:'password_confirm',
            type:'password',
            icon:'key'
        }
    ],
    charity:[
        {
            comp:TextInput,
            placeholder:'Enter your name', 
            name:'name',
            type:'text',
            icon:'user circle'
        },
        {
            comp:TextInput,
            placeholder:'Enter your adress', 
            name:'adress',
            type:'text',
            icon:'map'
        },
        {
            comp:SelectInput,
            placeholder:'Which category', 
            name:'type',
            type:'select',
            icon:'sort'
        },
        {
            comp:TextInput,
            placeholder:'Email', 
            name:'email',
            type:'email',
            icon:'mail'
        },
        {
            comp:TextInput,
            placeholder:'Enter you website', 
            name:'website',
            type:'text',
            icon:'globe'
        },
        {
            comp:TextInput,
            placeholder:'Enter your phone number', 
            name:'phone_number',
            type:'number',
            icon:'phone'
        },
        {
            comp:TextInput,
            placeholder:'Enter your password', 
            name:'password',
            type:'password',
            icon:'key'
        },
        {
            comp:TextInput,
            placeholder:'Re-enter your password', 
            name:'password_confirm',
            type:'password',
            icon:'key'
        }

    ]
}