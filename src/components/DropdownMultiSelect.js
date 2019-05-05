import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class DropdownMultiSelect extends Component {
  render() {
   
    return (
      <Dropdown placeholder='select actor' fluid multiple selection
        options={this.props.actorOptions} defaultValue={this.props.showData}
        onChange={(e, { value }) => this.props.updateActors({ value })}
         />
    )
  }

}

export default DropdownMultiSelect;