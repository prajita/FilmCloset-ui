import React from 'react';
import {
    REQUEST_MOVIE, OPEN_ADD_MOVIE_MODAL, CLOSE_ADD_MOVIE_MODAL, SET_ACTORS, SET_PRODUCERS,
    REQUEST_UPLOAD_POSTER
} from './actionTypes';
import {
    fetchActorsApi, fetchProducersApi
} from '../utils/fetchDetails';
import Promise from 'promise'; // to use Promises
import fetch from 'isomorphic-fetch';


export const requestMovie = (movieName) => {
    return {
        type: REQUEST_MOVIE,
        loading: true
    }
}
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


export const uploadPoster = () => {
    return function (dispatch) {
        dispatch({
            type: REQUEST_UPLOAD_POSTER,
            loader: true
        });
        // fetchUploadPosterApi(movieName, (movieDetails) => {
        //                 dispatch(setMovieDetails(movieDetails.id));
        //             });

    }
}


export const openAddMovieModal = (movieName) => {
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
                type: OPEN_ADD_MOVIE_MODAL,
                addMovieModal: true

            });
        });

    }
}
export const closeAddMovieModal = (movieName) => {
    return function (dispatch) {
        dispatch({
            type: CLOSE_ADD_MOVIE_MODAL,
            addMovieModal: false
        });

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
