import { combineReducers  } from 'redux'
import { reducer as formReducer } from 'redux-form'
// import reducers
import Donation from './donation_reducers'
import User from './user_reducers'
import Association from './association_reducers'

export default combineReducers({
    form : formReducer,
    Donation,
    User,
    Association
})