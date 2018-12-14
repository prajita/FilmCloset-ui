import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownMultiSelect = (list) => (
  <Dropdown placeholder='select actor' fluid multiple selection options={list.actorOptions} />
)

export default DropdownMultiSelect;