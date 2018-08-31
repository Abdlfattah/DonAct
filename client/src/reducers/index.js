import { combineReducers  } from 'redux'
import { reducer as formReducer } from 'redux-form'
// import reducers
import donation from './donation_reducers'
import user from './user_reducers'
import association from './association_reducers'

export default combineReducers({
    form : formReducer,
    donation,
    user,
    association
})