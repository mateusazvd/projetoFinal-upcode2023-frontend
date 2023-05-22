import React, { useContext, useState } from 'react';
import { FormContext } from '../../Context/formPesquisaContext';
import './style.css';

export default function InputDate({ mudarData }) {
  const {setTeste} = useContext(FormContext)
  const [data, setData] = useState('');

  return (
    <div className='containerInputDate'>
      <input
        className='inputCampo'
        type="date"
        value={data}
        onChange={(e) => { mudarData(e.target.value)}}
      />
    </div>
  );
}