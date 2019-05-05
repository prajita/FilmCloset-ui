
import {
    REQUEST_ALL_MOVIE, OPEN_ADD_MOVIE_MODAL, CLOSE_ADD_MOVIE_MODAL, SET_ACTORS, SET_PRODUCERS,
    REQUEST_UPLOAD_POSTER, REQUEST_CREATE_MOVIE, REQUEST_ALL_MOVIE_SUCCESS, CREATE_MOVIE_SUCCESS,UPDATE_EDIT_MOVIE_MODAL,
    UPDATE_CREATE_MOVIE_MODAL, UPDATE_LOADER
} from './actionTypes';
import {
    fetchActorsApi, fetchProducersApi, createMovieApi, createAllActorApi, getAllMovies,UpdateAllActorApi
} from '../utils/fetchDetails';
import Promise from 'promise'; // to use Promises



export const setActors = (actors) => {
    return {
        type: SET_ACTORS,
        actorsList: actors
    }
}

export const setProducers = (producers) => {
    return {
        type: SET_PRODUCERS,
        producersList: producers
    }
}

export const requestAllMovie = () => {

    return function (dispatch) {
        dispatch({
            type: UPDATE_LOADER,
            loader: true
        })
        getAllMovies((res) => {
            dispatch({
                type: REQUEST_ALL_MOVIE_SUCCESS,
                loader: false,
                allMovieList: res
            })
        })
    }
}
export const openAddMovieModal = () => {
    return function (dispatch) {
        Promise.all([
            fetchActorsApi((actors) => {
                dispatch(setActors(actors));
            }),
            fetchProducersApi((producers) => {
                dispatch(setProducers(producers));
            })
        ]).then(() => {
            dispatch({
                type: UPDATE_CREATE_MOVIE_MODAL,
                addMovieModal: true

            });
        });

    }
}
export const openEditMovieModal = () => {
    return function (dispatch) {
        Promise.all([
            fetchActorsApi((actors) => {
                dispatch(setActors(actors));
            }),
            fetchProducersApi((producers) => {
                dispatch(setProducers(producers));
            })
        ]).then(() => {
            dispatch({
                type: UPDATE_EDIT_MOVIE_MODAL,
                editMovieModal: true

            });
        });

    }
}
export const closeAddMovieModal = (movieName) => {
    return function (dispatch) {
        dispatch({
            type: UPDATE_CREATE_MOVIE_MODAL,
            addMovieModal: false,
            editMovieModal:false
        });

    }
}
export const createMovie = (movieObj,input) => {
    return function (dispatch) {
        dispatch({
            type: REQUEST_CREATE_MOVIE,
            addMovieModal: false,
            loader: true
        });
        Promise.all([
            createMovieApi(movieObj, (res) => {
                console.log("create movie success")
            }),
            UpdateAllActorApi(input, (res) => {
                console.log("created actors")
            })

        ]).then(() => {
            getAllMovies((res) => {
                dispatch({
                    type: CREATE_MOVIE_SUCCESS,
                    loader: true,
                    addMovieModal: false,
                    allMovieList: res

                })
            })
        })

    }
}


// export const loadMovie = (movieName) => {
//     return function (dispatch) {
//         dispatch(requestMovie(movieName));
//         fetchMovieDetailsApi(movieName, (movieDetails) => {
//             dispatch(setMovieDetails(movieDetails.id));
//         });
//     }
// }
