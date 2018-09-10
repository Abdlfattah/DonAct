import { combineReducers  } from 'redux'
import { reducer as formReducer } from 'redux-form'
// import reducers
import donation from './donation_reducers'
import user from './user_reducers'
import post from './post_reducers'


export default combineReducers({
    form : formReducer,
    donation,
    user,
    post
})