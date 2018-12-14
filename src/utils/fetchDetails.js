import React from 'react';
export const fetchActorsApi = async (callback) => {
    await fetch("http://localhost:3000/api/actors",
        {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            // mode: "no-cors", // no-cors, cors, *same-origin
            cache: "no-cache",
            headers: {
                'name': "Content-Type",
                'value': "application/json"
            }
        }
    )
        .then(
            res => res.json())
        .then(
            data => {
                console.log(data)
                callback(data);
            }
        ).catch(e => console.log('request failed::' + e));

}

export const fetchProducersApi = async (callback) => {
    await fetch("http://localhost:3000/api/producers",
        {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            // mode: "no-cors", // no-cors, cors, *same-origin
            cache: "no-cache",
            headers: {
                'name': "Content-Type",
                'value': "application/json"
            }
        }
    )
        .then(
            res => res.json())
        .then(
            data => {
                console.log(data)
                callback(data);
            }
        ).catch(e => console.log('request failed::' + e));

}


