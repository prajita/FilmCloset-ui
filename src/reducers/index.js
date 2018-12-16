import initialState from './initialState';

import {
    REQUEST_ALL_MOVIE, OPEN_ADD_MOVIE_MODAL, CLOSE_ADD_MOVIE_MODAL, SET_ACTORS, SET_PRODUCERS,
    REQUEST_UPLOAD_POSTER, REQUEST_ALL_MOVIE_SUCCESS,UPDATE_LOADER,UPDATE_CREATE_MOVIE_MODAL,
    REQUEST_CREATE_MOVIE,CREATE_MOVIE_SUCCESS
} from '../actions/actionTypes';

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_LOADER:
            return {
                ...state,
                loader: action.loader
            };
       
        case REQUEST_ALL_MOVIE_SUCCESS:
            return {
                ...state,
                loader: action.loader,
                allMovieList: action.allMovieList
            }

        case UPDATE_CREATE_MOVIE_MODAL:
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
        case REQUEST_CREATE_MOVIE:
            return {
                ...state,
                loader: action.loader,
                addMovieModal: action.addMovieModal
            }

        case CREATE_MOVIE_SUCCESS:
            return {
                ...state,
                loader: action.loader,
                addMovieModal: action.addMovieModal,
                allMovieList: action.allMovieList

            }
        default:
            return state;
    }
};


export default rootReducer;

