import axios from 'axios';
import * as Constants from '../Constants';
export const fetchActorsApi = (callback) => {
    fetch("http://localhost:3000/api/actors",
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
export const getAllMovies = (callback) => {
    fetch(`${Constants.URL_MOVIE}`,
        {
            method: "GET",
            cache: "no-cache",
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


export const fetchProducersApi = (callback) => {
    fetch("http://localhost:3000/api/producers",
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
// export const uploadPoster = async (req, callback) => {

//     await fetch("http://localhost:3000/upload",
//         {
//             method: "POST",
//             cache: "no-cache",
//             // headers: {
//             //      "Content-Type":"multipart/form-data"
//             // },
//             body: req,
//             //body: JSON.stringify(req)
//         }
//     )
//         .then(
//             res => res.json())
//         .then(
//             data => {
//                 console.log(data)
//                 callback(data);
//             }
//         ).catch(e => console.log('request failed::' + e));
// }

export const createMovieApi = (req, callback) => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    };
    axios.post(`${Constants.URL_MOVIE}`, req, config).then((response) => {
        //alert("New Movie Created");
        callback(response);
    }).catch((error) => {
        console.log("error occurred while fetching api")
    });
}
export const editMovieApi = (req, callback) => {
    fetch(`${Constants.URL_MOVIE}/${req._id}`,
        {
            method: "PUT", 
            // mode: "no-cors", // no-cors, cors, *same-origin
            cache: "no-cache",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(req)
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
export const UpdateAllActorApi = (req, callback) => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    };
    axios.put(`${Constants.URL_UPDATE_ACTOR}`, req, config).then((response) => {
        //alert("actor updated");
        callback(response);
    }).catch((error) => {
        console.log("error occurred while fetching api")
    });
}

export const createAllActorApi = (allActorObj, callback) => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    };
    allActorObj.map((e, index) => {
        axios.post(`${Constants.URL_MOVIE}`, allActorObj[index], config).then((response) => {
            console.log("new actor created")
        }).catch((error) => {
            console.log("error occurred while fetching api")
        });
        callback("success")
    })
}
export const createActor = (obj, callback) => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    };
    axios.post(`${Constants.URL_ACTOR}`, obj, config).then((response) => {
        console.log("new actor created")
    }).catch((error) => {
        console.log("error occurred while fetching api")
    });
    callback("success")
}


export const createProducer = (obj, callback) => {
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    };
    axios.post(`${Constants.URL_PRODUCER}`, obj, config).then((response) => {
        console.log("new actor created")
    }).catch((error) => {
        console.log("error occurred while fetching api")
    });
    callback("success")
}


