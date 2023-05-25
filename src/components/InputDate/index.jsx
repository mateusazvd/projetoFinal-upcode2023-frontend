import React, { useContext, useState } from 'react';
import { FormContext } from '../../Context/formPesquisaContext';
import './style.css';

export default function InputDate({ mudarData }) {
  const {setTeste} = useContext(FormContext)
  const [data, setData] = useState('');

  function atualizaData(data){
    mudarData(data)
    setData(data)
  }

  return (
    <div className='containerInputDate'>
      <input
        className='inputCampo'
        type='date'
        value={data}
        onChange={(e) => { atualizaData(e.target.value)}}

      />
    </div>
  );
}