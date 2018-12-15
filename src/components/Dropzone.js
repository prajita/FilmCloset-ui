import React, { Component } from 'react';
import { DropzoneDialog } from 'material-ui-dropzone';
import SpinnerComponent from './SpinnerComponent';
import FormData from 'form-data';
import { uploadPoster } from '../utils/fetchDetails';
const axios = require("axios");
//import Button from '@material-ui/core/Button';

export default class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      open: false,
      showSpinner: false
    };
  }

  handleClose() {
    this.setState({
      open: false
    });
  }
  handleOpen() {
    this.setState({
      open: true,
    });
  }
  handleChange(files) {
    this.setState({
      files: files,
      open: false
    });
  }
  handleSave(files) {
    //Saving files to state for further use and closing Modal.

    if (files && files.length === 1) {
      console.log("submit successfully");
      this.setState({
        files: files,
        open: false,
        showSpinner: true
      });
      // this.props.updateSelectedImage(files[0]);
      //call api
      const fd = new FormData();
      fd.append('myImage', files[0]);
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      uploadPoster(fd, (res) => {
        console.log("response:::" + res)
      })
      // axios.post("/api/movies/image/", fd, config)
      //   .then((response) => {
      //     alert("The file is successfully uploaded");
      //   }).catch((error) => {
      //   });
    } else {
      alert("select only one image");
      this.setState({
        open: true
      });
    }
  }
  render() {
    return (
      <div>
        <button className='btn borderGray' onClick={this.handleOpen.bind(this)}>
          Add Image
        </button>
        <DropzoneDialog
          open={this.state.open}
          onSave={this.handleSave.bind(this)}
          acceptedFiles={['image/jpeg', 'image/jpg', 'image/png', 'image/bmp']}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={this.handleClose.bind(this)}
        />
        {this.state.showSpinner && <SpinnerComponent message="Loading image..." />}

      </div>
    )
  }
}