import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';

const rootReducer = combineReducers({
    counter: counterReducer,
})

export default configureStore({
    reducer: rootReducer,
})