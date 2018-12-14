import initialState from './initialState';

import {
    REQUEST_MOVIE, OPEN_ADD_MOVIE_MODAL, CLOSE_ADD_MOVIE_MODAL, SET_ACTORS, SET_PRODUCERS,
    REQUEST_UPLOAD_POSTER
} from '../actions/actionTypes';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case REQUEST_MOVIE:
            return {
                ...state,
                loading: action.loading
            };
        case OPEN_ADD_MOVIE_MODAL:
            return {
                ...state,
                addMovieModal: action.addMovieModal
            };
        case CLOSE_ADD_MOVIE_MODAL:
            return {
                ...state,
                addMovieModal: action.addMovieModal
            };
        case SET_ACTORS:
            return {
                ...state,
                actorsList: action.actorsList
            };
        case SET_PRODUCERS:
            return {
                ...state,
                producersList: action.producersList
            };
        case REQUEST_UPLOAD_POSTER:
            return {
                ...state,
                loader: action.loader
            }

        default:
            return state;
    }
};


export default rootReducer;

