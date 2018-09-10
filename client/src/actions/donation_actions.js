import axios from 'axios'


export function getDonations(userId,role){

    const request = axios.get(`/api/donation/get_donations?userId=${userId}&role=${role}`)
                    .then(response => response.data)
        
    return {
        type:'GET_MY_DONATIONS',
        payload:request
    }

}


export function getDonation(donationId,role){
    const request = axios.get(`/api/donation/get_donation?donationId=${donationId}&role=${role}`)
                    .then( response => response.data)
        
    return {
        type:'GET_DONATION',
        payload:request
    }
}

export function donate(donation){
    const request = axios.post(`/api/donation/donate`,donation)
                    .then( response => response.data)
        
    return {
        type:'DONATE',
        payload:request
    }
}

export function update(donationId,donation){
    const request = axios.post(`/api/donation/update?donationId=${donationId}`,donation)
                    .then( response => response.data)
        
    return {
        type:'UPDATE',
        payload:request
    }
}