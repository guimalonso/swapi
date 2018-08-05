import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '1px solid black', height: '250px', background: 'white' }} className='fl w-third'>
      {props.children}
    </div>
  );
};

export default Scroll;