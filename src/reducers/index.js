import initialState from './initialState';

import {
    SET_ACTORS, SET_PRODUCERS,
    REQUEST_ALL_MOVIE_SUCCESS, UPDATE_LOADER,
    UPDATE_CREATE_MOVIE_MODAL, UPDATE_EDIT_MOVIE_MODAL,
    REQUEST_CREATE_MOVIE, CREATE_MOVIE_SUCCESS, SEARCH_MOVIE
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
                allMovieList: action.allMovieList,
                searchMovieList: action.allMovieList
            }
        case SEARCH_MOVIE:
            let searchVal = action.searchVal;
            let updatedSearchedList = state.allMovieList.filter(e => e.name.toLowerCase().includes(searchVal.toLowerCase()));
            return {
                ...state,
                searchMovieList: updatedSearchedList
            }
        case UPDATE_CREATE_MOVIE_MODAL:
            return {
                ...state,
                addMovieModal: action.addMovieModal,
                editMovieModal: action.editMovieModal

            };
        case UPDATE_EDIT_MOVIE_MODAL:
            return {
                ...state,
                editMovieModal: action.editMovieModal
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

