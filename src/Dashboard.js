import React, { Component } from 'react';
import './style.css';
import img from './images/logo.jpg';
import NavHeader from './components/NavHeader';
import MovieContainer from './containers/MovieContainer';
import CreateMovieContainer from './containers/CreateMovieContainer';
import Modal from 'react-responsive-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SpinnerComponent from './components/SpinnerComponent'
import {
  requestAllMovie, openAddMovieModal, openEditMovieModal,
  closeAddMovieModal
} from './actions';

import { createMovieApi, UpdateAllActorApi ,editMovieApi} from './utils/fetchDetails'
import { stat } from 'fs';


class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currMovie: {}
    }
    this.onClickAddMovie = this.onClickAddMovie.bind(this);
    this.onClickModalClose = this.onClickModalClose.bind(this);
    this.submitCreateMovie = this.submitCreateMovie.bind(this);
    this.submitEditedMovie = this.submitEditedMovie.bind(this);
  }
  onClickAddMovie() {
    this.props.openAddMovieModal();
  }
  onClickModalClose() {
    this.props.closeAddMovieModal();
  }
  submitCreateMovie(temp) {

    console.log("create new movie", temp);
    createMovieApi(temp, (res) => {
      UpdateAllActorApi({ listOfActors: temp.actors, movie: temp.name }, (resp) => {
        console.log("successfully created movie");
        this.props.closeAddMovieModal();
        window.location.reload();

      })
    })
  }

  submitEditedMovie(temp){
    console.log("edit old movie", temp);
    editMovieApi(temp, (res) => {
      UpdateAllActorApi({ listOfActors: temp.actors, movie: temp.name }, (resp) => {
        console.log("successfully edited movie");
        this.props.closeAddMovieModal();
        window.location.reload();

      })
    })
  }
  editMovies(input) {
    this.setState({ currMovie: input });
    this.props.openEditMovieModal();
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

            <MovieContainer list={this.props.allMovieList} history={this.props.history} editMovies={this.editMovies.bind(this)} />
            {this.props.loader &&
              <SpinnerComponent message="Loading collections..." />
            }
          </div>
          {this.props.editMovieModal &&
            <Modal open={this.props.editMovieModal || false} onClose={this.onClickModalClose} center >
              <CreateMovieContainer actorOptions={this.props.actorsList} currMovie={this.state.currMovie}
                producerOptions={this.props.producersList} isEdit={true}
                submitEditedMovie={this.submitEditedMovie} />
              {this.props.children}
            </Modal>}
          {this.props.addMovieModal &&
            <Modal open={this.props.addMovieModal || false} onClose={this.onClickModalClose} center >
              <CreateMovieContainer actorOptions={this.props.actorsList} currMovie={this.state.currMovie}
                producerOptions={this.props.producersList}
                submitCreateMovie={this.submitCreateMovie} />
              {this.props.children}
            </Modal>}
          {this.props.children}
        </React.Fragment>
      </div>
    );
  }
}

Dashboard.propTypes = {

  addMovieModal: PropTypes.bool,
  editMovieModal: PropTypes.bool,
  openEditMovieModal: PropTypes.func,
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
    editMovieModal: state.editMovieModal,
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
        openEditMovieModal,
        requestAllMovie

      }, dispatch
    )
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
