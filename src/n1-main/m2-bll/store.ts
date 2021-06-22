import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {loginReducer} from './reducers/loginReducer';
import {registrationReducer} from './reducers/registrationReducer';
import {profileReducer} from './reducers/profileReducer';
import {recoverPasswordReducer} from './reducers/recoverPasswordReducer';
import {createPasswordReducer} from './reducers/createPasswordReducer';


const rootReducer = combineReducers({
    login : loginReducer,
    registration : registrationReducer,
    profile : profileReducer,
    recoverPassword : recoverPasswordReducer,
    createPassword: createPasswordReducer
})


export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export default store