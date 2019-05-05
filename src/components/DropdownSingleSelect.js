import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class DropdownSingleSelect extends Component {
  render() {
   
    return (
      <Dropdown placeholder='select producer' fluid search selection
        options={this.props.producerOptions} defaultValue={this.props.showData[0]}
        onChange={(e, { value }) => this.props.updateProducer({ value })}
         />
    )
  }
}

export default DropdownSingleSelect;