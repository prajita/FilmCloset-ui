import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import DropdownMultiSelect from '../components/DropdownMultiSelect';
import DropdownSingleSelect from '../components/DropdownSingleSelect';
//import Dropzone from '../components/Dropzone';
import Modal from 'react-responsive-modal';
import CreateActorProducerContainer from './CreateActorProducerContainer';
// import { uploadPoster } from '../utils/fetchDetails';
import axios from 'axios';
import * as Constants from '../Constants';


export default class CreateMovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poster: this.props.currMovie.poster || {},
      title: this.props.currMovie.name || "",
      actors: this.props.currMovie.actors || [],
      producer: this.props.currMovie.producers || [],
      plot: this.props.currMovie.plot || "",
      yearOfRelease: this.props.currMovie.yearOfRelease || "",
      _id: this.props.currMovie._id || null,
      showSuccessMsg: false,
      openCreateActor: false,
      openCreateProdicer: false,
      updatedPosterName: "",
      newActorsList: [],
      loader: false,
      actorOptions: this.props.actorOptions,
      producerOptions: this.props.producerOptions

    }
    this.updateSelectedImage = this.updateSelectedImage.bind(this);
    this.disableSubmit = this.disableSubmit.bind(this);
    this.updateActors = this.updateActors.bind(this);
    this.updateProducer = this.updateProducer.bind(this);
    this.updatePlot = this.updatePlot.bind(this);
    this.onClickModalCreateActorClose = this.onClickModalCreateActorClose.bind(this);
    this.onClickModalCreateProducerClose = this.onClickModalCreateProducerClose.bind(this);
    this.openCreateActorModal = this.openCreateActorModal.bind(this);
    this.openCreateProducerModal = this.openCreateProducerModal.bind(this);
    this.updateInputImage = this.updateInputImage.bind(this);
    this.submitCreateMovie = this.submitCreateMovie.bind(this);
    this.submitEditedMovie = this.submitEditedMovie.bind(this);

  }

  disableSubmit() {
    let toReturn = false;
    toReturn = (this.state.updatedPosterName &&
      this.state.title &&
      this.state.actors.length > 0 &&
      this.state.producer &&
      this.state.plot &&
      this.state.yearOfRelease &&
      this.state.showSuccessMsg
    ) ? false : true;
    return toReturn;
  }


  // updateSelectedImage(file) {
  //   this.setState({ poster: file, showSuccessMsg: true });
  // }

  updateSelectedImage(e) {

    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage', this.state.poster);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    axios.post(`${Constants.URL}/upload`, formData, config).then((response) => {
      this.setState({ updatedPosterName: this.state.poster.name, showSuccessMsg: true })
      alert("The file is successfully uploaded");
    }).catch((error) => {
    });

  }
  updateMovieName(temp) {
    this.setState({ title: temp })
  }
  updateYearOfRelease(temp) {
    this.setState({ yearOfRelease: temp })
  }
  updateActors(objActors) {
    console.log('actors list::', objActors);
    let listActorNames = objActors.value;
    this.setState({ actors: listActorNames })
  }
  updateProducer(objProducer) {
    console.log('producer ::', objProducer.value);
    let producerArr = [];
    producerArr.push(objProducer.value);
    this.setState({ producer: producerArr })
  }
  updatePlot(temp) {
    this.setState({ plot: temp });
  }
  submitCreateMovie() {

    let obj =
    {
      "name": this.state.title,
      "yearOfRelease": parseInt(this.state.yearOfRelease),
      "poster": `${Constants.URL}/${this.state.updatedPosterName}`,
      "actors": this.state.actors,
      "plot": this.state.plot,
      "producers": this.state.producer
    }
    console.log("input to create movie api ::::" + JSON.stringify(obj));

    this.props.submitCreateMovie(obj);

  }
  submitEditedMovie() {

    let obj =
    {
      "name": this.state.title,
      "yearOfRelease": parseInt(this.state.yearOfRelease),
      "poster": `${Constants.URL}/${this.state.updatedPosterName}`,
      "actors": this.state.actors,
      "plot": this.state.plot,
      "producers": this.state.producer,
      "_id": this.state._id
    }
    console.log("input to create movie api ::::" + JSON.stringify(obj));

    this.props.submitEditedMovie(obj);

  }

  openCreateActorModal() {
    this.setState({ openCreateActor: true })
  }
  openCreateProducerModal() {
    this.setState({ openCreateProducer: true })
  }
  onClickModalCreateActorClose() {
    this.setState({ openCreateActor: false })
  }
  onClickModalCreateProducerClose() {
    this.setState({ openCreateProducer: false })
  }
  createActorRequest(temp) {
    console.log("new actor:" + temp);
    this.setState({ openCreateActor: false, actorOptions: [...this.state.actorOptions, temp] })

  }
  createProducerRequest(temp) {
    console.log("new producer:" + temp);
    this.setState({ openCreateProducer: false, producerOptions: [...this.state.producerOptions, temp] })

  }
  updateInputImage(e) {
    this.setState({ poster: e.target.files[0] });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ actorOptions: nextProps.actorOptions, producerOptions: nextProps.producerOptions });
  }

  render() {
    const actorOptions = [], producerOptions = [];
    this.state.actorOptions.map(e => { actorOptions.push({ key: e.name, value: e.name, text: e.name }); return null; });
    this.state.producerOptions.map(e => { producerOptions.push({ key: e.name, value: e.name, text: e.name }); return null; });

    return (
      <div>
        <h2>Add new movie</h2>
        <Form id="form1" style={{ width: "600px" }} >
          <div className="row">
            <div className="col-3">
              <label >Movie Name</label>
            </div>
            <div className="col-9">
              <input type="text" id="title" placeholder="enter movie name.." value={this.state.title}
                onChange={(e) => this.updateMovieName(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label >year of release</label>
            </div>
            <div className="col-9">
              <input type="text" name="yor" placeholder="enter movie release year.." value={this.state.yearOfRelease}
                onChange={(e) => this.updateYearOfRelease(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label >Actors</label>
            </div>
            <div className="col-6">
              <DropdownMultiSelect actorOptions={actorOptions} updateActors={this.updateActors}
                showData={this.state.actors}
                label="Actors" />
              {this.props.children}
            </div>
            {/* <AddActor/> */}
            <div className="col-3">
              <button className='btn buttonSearch borderBlack' onClick={this.openCreateActorModal}>+</button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label >Producer</label>
            </div>
            <div className="col-6">
              <DropdownSingleSelect producerOptions={producerOptions} updateProducer={this.updateProducer}
                label="Producers" showData={this.state.producer} />
              {this.props.children}
            </div>
            {/* <AddProducer/> */}
            <div className="col-3">
              <button className='btn buttonSearch borderBlack' onClick={this.openCreateProducerModal}>+</button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label >Plot</label>
            </div>
            <div className="col-9">
              <textarea id="subject" name="subject" placeholder="Write something about the movie .." style={{ height: "100px" }}
                value={this.state.plot}
                onChange={(e) => this.updatePlot(e.target.value)}></textarea>
            </div>
          </div>
          <div className="row">
            {/* <Dropzone updateSelectedImage={this.updateSelectedImage} /> */}
            <div className="col-6">
              <label style={{ paddingLeft: "20px", color: "red" }}>Choose file to upload</label>
              <input type="file" accept="image/png, image/jpeg" name="myImage" alt={this.state.poster}  onChange={this.updateInputImage} />
            </div>
            <div className="col-6" style={{ paddingTop: "33px" }}>
              <button className='btn borderGray' onClick={this.updateSelectedImage}>
                Upload Image
              </button>
            </div>
          </div>

          <br />
          {this.state.showSuccessMsg && <div className="row">
            <div className="col-12">
              <i className="fa fa-check-circle" style={{ color: "green" }}></i>
              <label >image is successfully uploaded.</label>
            </div>
          </div>}
          <div className="row">
            <div className="col-4" >
              {this.props.isEdit ?

                <button className='btn buttonSearch borderBlack' disabled={this.disableSubmit()}
                  onClick={this.submitEditedMovie} type="submit"> Edit Movie</button>
                : <button className='btn buttonSearch borderBlack' disabled={this.disableSubmit()}
                  onClick={this.submitCreateMovie} type="submit"> Create Movie</button>}


            </div>
            <div className="col-8">
            </div>
          </div>
          {this.state.openCreateActor &&
            <Modal open={this.state.openCreateActor || false} onClose={this.onClickModalCreateActorClose} center >
              <CreateActorProducerContainer msg={'Create Actor'} createActorRequest={(obj) => this.createActorRequest(obj)} />
            </Modal>

          }
          {this.state.openCreateProducer &&
            <Modal open={this.state.openCreateProducer || false} onClose={this.onClickModalCreateProducerClose} center >
              <CreateActorProducerContainer msg={'Create Producer'} createProducerRequest={(obj) => this.createProducerRequest(obj)} />
            </Modal>

          }
        </Form>
        {this.props.children}
      </div>
    )
  }
}
