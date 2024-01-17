import React from 'react'

const SelectedItem = ({ selected }) => (
  <div>
    <span className='text-sm'>{selected.text}</span>
  </div>
);

export default SelectedItem;
