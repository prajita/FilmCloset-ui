import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class DropdownMultiSelect extends Component {
  render() {
    let actorOptionsDefault = [];
    if (this.props.defaultValue && this.props.defaultValue.length > 0) {
      let temp = Object.assign([], this.props.defaultValue);
      temp.map(e => {
        actorOptionsDefault.push({ key: e, value: e, text: e });
        return null;
      })
    }
    return (
      <Dropdown placeholder='select actor' fluid multiple selection
        options={this.props.actorOptions}
        onChange={(e, { value }) => this.props.updateActors({ value })}
        defaultValue={actorOptionsDefault} />
    )
  }

}

export default DropdownMultiSelect;