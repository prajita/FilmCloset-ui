import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class DropdownSingleSelect extends Component {
  render() {
    let producerOptionsDefault = [];
    if (this.props.defaultValue && this.props.defaultValue.length > 0) {
      let temp = Object.assign([], this.props.defaultValue);
      temp.map(e => {
        producerOptionsDefault.push({ key: e, value: e, text: e });
        return null;
      })
    }
    return (
      <Dropdown placeholder='select producer' fluid search selection
        options={this.props.producerOptions}
        onChange={(e, { value }) => this.props.updateProducer({ value })}
        defaultValue={producerOptionsDefault} />
    )
  }
}

export default DropdownSingleSelect;