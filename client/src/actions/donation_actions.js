import axios from 'axios'


export function getDonations(role='',text='',type='',limit=10,skip=0,order='asc'){
    const request = axios.get(`/api/donation/all_donations?text=${text}&limit=${limit}&order=${order}&type=${type}&skip=${skip}&role=${role}`)
                    .then(response => response.data)

    return{
        type:'GET_DONATIONS',
        payload:request
    }
 }


 export function clearGetDonations(){
    return {
        type:'CLAER_GET_DONATIONS',
        payload:null
    }
 }

 
//------------------------- post a need --------------------------------------------

export function postDonation(data){
    console.log(data.getAll('donationImage'))
    const request = axios.post('/api/donation/post_donation',data)
                    .then( response => response.data)
        
    return{
        type:'POST_DONATION',
        payload:request
    }
}

//------------------------- get a donation --------------------

export function getDonation(donationId){
    const request = axios.get(`/api/donation/get_donation?id=${donationId}`)
                    .then( response=> response.data)

    return {
        type:'GET_DONATION',
        payload: request
    }
}
export function clearGetDonation(){
    return {
        type:'CLEAR_GET_DONATION',
        payload:null
    }
}