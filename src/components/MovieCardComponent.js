import React, { Component } from 'react';

export default class MovieCardComponent extends Component {


    render() {
        let listActors = [];
        this.props.data.actors.map(e => {
            listActors.push(<span  className="card-text">{e}&nbsp;{","}</span>)
        })
        return (
            <div className="card" style={{ width: "20rem" }}>
                <img className="card-img-top imageBorder cardImageStyle" src={this.props.data.poster} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.data.name}</h5>
                    <p className="card-text">{this.props.data.yearOfRelease}</p>
                    {this.props.data.producers.length && <p className="card-text">{"Produced by "}{this.props.data.producers[0]}</p>}
                    {this.props.data.actors.length && <p>{"Actors-"}{listActors}</p>}
                    <a href="javascript:void(0)"
                        // onClick={() => this.props.checkCollection(this.props.data.collection_id)}
                        className="btn btn-success">check this</a>
                </div>
            </div>

        )
    }
}
