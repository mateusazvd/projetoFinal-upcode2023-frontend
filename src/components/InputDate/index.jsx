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
  function dataFormatada() {
    var data = new Date();
    var ano = data.getFullYear();
    var mes = ('0' + (data.getMonth() + 1)).slice(-2);
    var dia = ('0' + data.getDate()).slice(-2);
    var dataFormatada = ano + '-' + mes + '-' + dia;

    return dataFormatada
  }

  return (
    <div className='containerInputDate'>
      <input
        className='inputCampo'
        type='date'
        value={data}
        onChange={(e) => { atualizaData(e.target.value)}}
        min = {dataFormatada()}
      />
    </div>
  );
}