import axios from 'axios'


export function getAllPosts(text='',type='',limit=10,skip=0,order='asc'){
    const request = axios.get(`/api/post/get_posts?text=${text}&limit=${limit}&order=${order}&type=${type}&skip=${skip}`)
                    .then(response => response.data)

    return{
        type:'GET_ALL_POSTS',
        payload:request
    }
 }


 export function clearGetPosts(){
    return {
        type:'CLAER_ALL_POSTS',
        payload:null
    }
 }

 
//------------------------- post a need --------------------------------------------

export function post(data){
    const request = axios.post('/api/post/post',data)
                    .then( response => response.data)
        
    return{
        type:'POST',
        payload:request
    }
}

//------------------------- get a donation --------------------

export function getPost(postId){
    const request = axios.get(`/api/post/get_post?postId=${postId}`)
                    .then( response=> response.data)

    return {
        type:'GET_POST',
        payload: request
    }
}
export function clearGetPost(){
    return {
        type:'CLEAR_GET_POST',
        payload:null
    }
}


//......................... get posts -----------------------

export function getMyPosts(posterId){
    const request = axios.get(`/api/post/my_posts?posterId=${posterId}`)
                    .then( response => response.data)
    return {
        type:'GET_MY_POST',
        payload:request
    }
}