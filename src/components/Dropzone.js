import React, { Component } from 'react';
import { DropzoneArea, DropzoneDialog } from 'material-ui-dropzone';
//import Button from '@material-ui/core/Button';

class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      open: false
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
    this.setState({
      files: files,
      open: false
    });
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
          acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={this.handleClose.bind(this)}
        />
      </div>
    )
  }
}

export default Dropzone;