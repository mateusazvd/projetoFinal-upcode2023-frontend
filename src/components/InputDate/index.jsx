import React, { useState } from 'react';
import './style.css';

export default function InputDate({ mudarData }) {
  const [data, setData] = useState('');

  return (
    <div className='containerInputDate'>
      <input
        className='inputCampo'
        type='date'
        value={data}
        onChange={e => mudarData(e.target.value)}
      />
    </div>
  );
}