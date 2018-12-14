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
import { openAddMovieModal, closeAddMovieModal } from './actions';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.onClickAddMovie = this.onClickAddMovie.bind(this);
    this.onClickModalClose = this.onClickModalClose.bind(this);
  }
  onClickAddMovie() {
    this.props.openAddMovieModal();
  }
  onClickModalClose() {
    this.props.closeAddMovieModal();
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
                  <h1>Welcome !! choose your favourite movie !</h1>
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
            <Movies />
            {/* {this.props.loading &&
                        <SpinnerComponent message="Loading collections..." />
                    } */}
          </div>
          {this.props.addMovieModal &&
            <Modal open={this.props.addMovieModal || false} onClose={this.onClickModalClose} center >
              <CreateMovieContainer actorOptions={this.props.actorsList} producerOptions={this.props.producersList}/>
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

};

const mapStateToProps = (state) => {
  return {
    addMovieModal: state.addMovieModal,
    actorsList: state.actorsList,
    producersList: state.producersList
  };
}
const mapDispatchToProps = (dispatch) => {
  return (
    bindActionCreators(
      {
        openAddMovieModal,
        closeAddMovieModal

      }, dispatch
    )
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
