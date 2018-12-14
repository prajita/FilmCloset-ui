import { createStore, applyMiddleware, combineReducers } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    rootReducer
});
export const configureStore = () => {
    return createStore(
        rootReducer,        
         composeWithDevTools(
             applyMiddleware(thunk,logger)            
        )
        
    );
}