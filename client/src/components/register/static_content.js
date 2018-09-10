import { SelectInput, TextInput } from '../../widgets/input_field/render_field'
import { options } from '../../config/donation_type'


export const items={
    donor:[
        {
            comp:TextInput,
            placeholder:'Enter your name', 
            name:'name',
            type:'text',
            icon:{name:'user circle',color:'blue'}
        },
        {
            comp:TextInput,
            placeholder:'Enter your last Name', 
            name:'lastname',
            type:'text',
            icon:{name:'user circle',color:'blue'}
        },
        {
            comp:TextInput,
            placeholder:'Email', 
            name:'email',
            type:'email',
            icon:{name:'mail',color:'blue'}
        },
        {
            comp:TextInput,
            placeholder:'Enter your phone number', 
            name:'phone_number',
            type:'number',
            icon:{name:'phone',color:'blue'}
        },
        {
            comp:TextInput,
            placeholder:'Enter your password', 
            name:'password',
            type:'password',
            icon:{name:'key',color:'blue'}
        },
        {
            comp:TextInput,
            placeholder:'Re-enter your password', 
            name:'password_confirm',
            type:'password',
            icon:{name:'key',color:'blue'}
        }
    ],
    charity:[
        {
            comp:TextInput,
            placeholder:'Enter your name', 
            name:'name',
            type:'text',
            icon:{name:'user circle',color:'blue'}
        },
        {
            comp:TextInput,
            placeholder:'Enter your adress', 
            name:'adress',
            type:'text',
            icon:{name:'map',color:'blue'}
        },
        {
            comp:SelectInput,
            placeholder:'Which category', 
            name:'type',
            type:'select',
            icon:{name:'sort',color:'blue'},
            options:options
        },
        {
            comp:TextInput,
            placeholder:'Email', 
            name:'email',
            type:'email',
            icon:{name:'mail',color:'blue'}
        },
        {
            comp:TextInput,
            placeholder:'Enter you website', 
            name:'website',
            type:'text',
            icon:{name:'globe',color:'blue'}
        },
        {
            comp:TextInput,
            placeholder:'Enter your phone number', 
            name:'phone_number',
            type:'number',
            icon:{name:'phone',color:'blue'}
        },
        {
            comp:TextInput,
            placeholder:'Enter your password', 
            name:'password',
            type:'password',
            icon:{name:'key',color:'blue'}
        },
        {
            comp:TextInput,
            placeholder:'Re-enter your password', 
            name:'password_confirm',
            type:'password',
            icon:{name:'key',color:'blue'}
        }

    ]
}