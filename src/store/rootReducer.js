import {combineReducers} from 'redux'
import reducer from './reducer'

const rootReducer = combineReducers({
    app: reducer,
})

export default rootReducer