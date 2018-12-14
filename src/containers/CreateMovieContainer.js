import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import DropdownMultiSelect from '../components/DropdownMultiSelect';
import DropdownSingleSelect from '../components/DropdownSingleSelect';
import Dropzone from '../components/Dropzone';
export default class CreateMovieContainer extends Component {
  submitForm() {
    console.log("submit ....")
  }
 
  render() {

    const actorOptions = [], producerOptions = [];
    this.props.actorOptions.map(e => { actorOptions.push({ key: e.name, value: e.name, text: e.name }) });
    this.props.producerOptions.map(e => { producerOptions.push({ key: e.name, value: e.name, text: e.name }) });


    //[{ key: 'AL', value: 'AL', text: 'Alabama' }, { key: 'KK', value: 'KK', text: 'KKKKK' }]
    return (
      <div>
        <h2>Add new movie</h2>
        <Form onSubmit={this.submitForm} id="form1" style={{ width: "600px" }} >
          <div className="row">
            <div className="col-3">
              <label >Movie Name</label>
            </div>
            <div className="col-9">
              <input type="text" id="fname" placeholder="enter movie name.." />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label >year of release</label>
            </div>
            <div className="col-9">
              <input type="text" name="lastname" />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label >Actors</label>
            </div>
            <div className="col-6">
              <DropdownMultiSelect actorOptions={actorOptions} label="Options 1" />
            </div>
            {/* <AddActor/> */}
            <div className="col-3">
              <button className='btn buttonSearch borderBlack'>+</button>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label >Producer</label>
            </div>
            <div className="col-6">
              <DropdownSingleSelect producerOptions={producerOptions} label="Options 1" />
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
              <textarea id="subject" name="subject" placeholder="Write something about the movie .." style={{ height: "100px" }}></textarea>
            </div>
          </div>
          <Dropzone /><br />
          <div className="row">
            <div className="col-4" >
              <button className='btn buttonSearch borderBlack' type="submit"> Create Movie</button>
            </div>
            <div className="col-8">
            </div>
          </div>
        </Form>
      </div>
    )
  }
}
