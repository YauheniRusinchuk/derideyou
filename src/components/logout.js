import React from 'react';

export default ({logout}) => {
  return (
    <div className='btn_logout'>
      <button onClick={logout}>LOG OUT</button>
    </div>
  );
}
