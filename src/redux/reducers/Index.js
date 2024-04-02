// reducer가 여러개가 되면 합쳐줘야함

import { combineReducers } from 'redux'
import authenticateReducer from './AuthentiacteReducer'
import productReducer from './ProductReducer'

export default combineReducers({
    auth: authenticateReducer,
    product: productReducer
})