import React, { Component } from 'react'
import MovieCardComponent from '../components/MovieCardComponent'

export default class MovieContainer extends Component {

  render() {
    let showData = [];
    if (this.props.list && this.props.list.length > 0) {
      this.props.list.map((e, i) => {
        showData.push(
          <div key={i} className="col-4 cardPadding">
            < MovieCardComponent data={e} />
          </div>)
      })
    }

    return (
      <div className="container">
        <div className="card-group">
          {showData}
        </div>
      </div>

    )
  }
}
