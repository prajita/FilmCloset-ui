import React, { Component } from 'react';
import './style.css';
import history from './history';
import img from './images/logo.jpg';
import NavHeader from './components/NavHeader';
import Movies from './containers/MovieContainer';
import CreateMovieContainer from './containers/CreateMovieContainer';
import Modal from 'react-responsive-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SpinnerComponent from './components/SpinnerComponent'
import {
  requestAllMovie, openAddMovieModal,
  closeAddMovieModal, createMovieAndActor,
  createMovie
} from './actions';

import { createMovieApi, UpdateAllActorApi } from './utils/fetchDetails'
import * as Constants from './Constants';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onClickAddMovie = this.onClickAddMovie.bind(this);
    this.onClickModalClose = this.onClickModalClose.bind(this);
    this.submitCreateMovie = this.submitCreateMovie.bind(this);
  }
  onClickAddMovie() {
    this.props.openAddMovieModal();
  }
  onClickModalClose() {
    this.props.closeAddMovieModal();
  }
  submitCreateMovie(temp) {

    console.log("create new movie", temp);
    //createMovie(temp, { listOfActors: temp.actors, movie: temp.name });
    createMovieApi(temp, (res) => {
      UpdateAllActorApi({ listOfActors: temp.actors, movie: temp.name }, (resp) => {
        console.log("successfully created movie");
        this.props.closeAddMovieModal();
        window.location.reload();

      })
    })
  }
  componentWillMount() {
    this.props.requestAllMovie();
  }
  componentWillUpdate(nextProps) {
    if (nextProps.allMovieList.length !== this.props.allMovieList.length) {
      return true
    }
  }
  render() {

    return (
      <div className="App">
        <React.Fragment>
          <NavHeader addMovie={true} onClickAddMovie={this.onClickAddMovie} onClickModalClose={this.onClickModalClose} />
          <div className="bck">
            <div className="container">
              <div className="row header-style" >
                <div className="col-2"><img src={img} className="styleImg" /></div>
                <div className="col-10" style={{ paddingRight: "15%" }}>
                  <h1>Welcome to your favourite movie site !</h1>
                  <div className="flex-container ">
                  </div>
                </div>
              </div>
              <div className="row header-style" >
                <div className="col-9">
                  <input type="text"
                    placeholder="Find by movie/actor" style={{ width: "45%", marginLeft: "32%" }}></input>
                  <button className="btn buttonSearch colorNav">search</button></div>
                <div className="col-3" >
                  <span style={{ color: "#FFBF00", paddingTop: "10%", paddingRight: "10%" }}>*find your movie here</span>
                </div>
              </div>


            </div>

            <br /><br />

            <Movies list={this.props.allMovieList} />
            {this.props.loader &&
              <SpinnerComponent message="Loading collections..." />
            }
          </div>

          {this.props.addMovieModal &&
            <Modal open={this.props.addMovieModal || false} onClose={this.onClickModalClose} center >
              <CreateMovieContainer actorOptions={this.props.actorsList}
                producerOptions={this.props.producersList}
                submitCreateMovie={this.submitCreateMovie} />
            </Modal>}
        </React.Fragment>
      </div>
    );
  }
}

Dashboard.propTypes = {
  addMovieModal: PropTypes.bool,
  openAddMovieModal: PropTypes.func,
  closeAddMovieModal: PropTypes.func,
  actorsList: PropTypes.array,
  producersList: PropTypes.array,
  requestAllMovie: PropTypes.func,
  loader: PropTypes.bool,
  allMovieList: PropTypes.array

};

const mapStateToProps = (state) => {
  return {
    addMovieModal: state.addMovieModal,
    actorsList: state.actorsList,
    producersList: state.producersList,
    loader: state.loader,
    allMovieList: state.allMovieList
  };
}
const mapDispatchToProps = (dispatch) => {
  return (
    bindActionCreators(
      {
        openAddMovieModal,
        closeAddMovieModal,
        requestAllMovie

      }, dispatch
    )
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
