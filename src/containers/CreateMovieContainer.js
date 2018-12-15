import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import DropdownMultiSelect from '../components/DropdownMultiSelect';
import DropdownSingleSelect from '../components/DropdownSingleSelect';
import Dropzone from '../components/Dropzone';
export default class CreateMovieContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poster: {},
      title: "",
      actors: [],
      producer: [],
      plot: "",
      yearOfRelease: "",
      showSuccessMsg: false,
      openCreateActor: false
    }
    this.updateSelectedImage = this.updateSelectedImage.bind(this);
    this.disableSubmit = this.disableSubmit.bind(this);
    this.updateActors = this.updateActors.bind(this);
    this.updateProducer = this.updateProducer.bind(this);
    this.updatePlot = this.updatePlot.bind(this);
  }
  submitForm() {
    console.log("submit ....")
  }
  disableSubmit() {
    let toReturn = false;
    toReturn = (this.state.poster.name &&
      this.state.title &&
      this.state.actors.length > 0 &&
      this.state.producer.length === 1 &&
      this.state.plot &&
      this.state.yearOfRelease &&
      this.state.showSuccessMsg
    ) ? false : true;
    return toReturn;
  }
  updateSelectedImage(file) {
    this.setState({ poster: file, showSuccessMsg: true });

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
    console.log('producer ::', objProducer);
    let producerName = objProducer.value[0];
    this.setState({ producer: producerName })
  }
  updatePlot(temp) {
    this.setState({ plot: temp });
  }
  submitCreateMovie() {

  }
  openCreateActorModal(){
    this.setState({openCreateActor: true})
  }

  render() {

    const actorOptions = [], producerOptions = [];
    this.props.actorOptions.map(e => { actorOptions.push({ key: e.name, value: e.name, text: e.name }); return null; });
    this.props.producerOptions.map(e => { producerOptions.push({ key: e.name, value: e.name, text: e.name }); return null; });

    return (
      <div>
        <h2>Add new movie</h2>
        <Form onSubmit={this.submitForm} id="form1" style={{ width: "600px" }} >
          <div className="row">
            <div className="col-3">
              <label >Movie Name</label>
            </div>
            <div className="col-9">
              <input type="text" id="title" placeholder="enter movie name.." onChange={(e) => this.updateMovieName(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label >year of release</label>
            </div>
            <div className="col-9">
              <input type="text" name="yor" placeholder="enter movie release year.." onChange={(e) => this.updateYearOfRelease(e.target.value)} />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label >Actors</label>
            </div>
            <div className="col-6">
              <DropdownMultiSelect actorOptions={actorOptions} updateActors={this.updateActors} defaultValue={this.state.actors} label="Actors" />
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
              <DropdownSingleSelect producerOptions={producerOptions} updateProducer={this.updateProducer} label="Producers" defaultValue={this.state.producer} />
            </div>
            {/* <AddProducer/> */}
            <div className="col-3">
              <button className='btn buttonSearch borderBlack'>+</button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label >Plot</label>
            </div>
            <div className="col-9">
              <textarea id="subject" name="subject" placeholder="Write something about the movie .." style={{ height: "100px" }}
                onChange={(e) => this.updatePlot(e.target.value)}></textarea>
            </div>
          </div>
          <Dropzone updateSelectedImage={this.updateSelectedImage} /><br />
          {this.state.showSuccessMsg && <div className="row">
            <div className="col-12">
              <i className="fa fa-check-circle" style={{ color: "green" }}></i>
              <label >image is successfully uploaded.</label>
            </div>
          </div>}
          <div className="row">
            <div className="col-4" >
              <button className='btn buttonSearch borderBlack' disabled={this.disableSubmit()} onClick={this.submitCreateMovie} type="submit"> Create Movie</button>
            </div>
            <div className="col-8">
            </div>
          </div>
        </Form>
      </div>
    )
  }
}
