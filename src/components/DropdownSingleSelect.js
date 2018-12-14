import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const DropdownSingleSelect = (list) => (
  <Dropdown placeholder='select producer' fluid search selection options={list.producerOptions} />
)

export default DropdownSingleSelect;