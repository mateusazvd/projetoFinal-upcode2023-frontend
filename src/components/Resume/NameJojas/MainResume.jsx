import './StyleMain.css'
import { React }  from "react";

export default function MainResume (){    
    
  return (
      <div className='BlockResume'>
        <div className='BlockCategoria'>
          <fieldset classeName="TitleResumo">
            <h1 className="ResumeStyle">
              <strong>Resumo</strong>
            </h1>
            <div>
            <h1 className="CategoriaStyle">
              <strong>Categoria</strong>
              <label><input type={'search'} placeholder="pesquisa categoria"/></label>
            </h1>
            <h1>Perído</h1>
            <p>
              <i>Selecione o perído que realizarão a pesquisa</i>
            </p>
            <fieldset>
            <label id='datainicial'>
              <input className='campoPeríodo' type="date" name='datainicial' />
            </label>
            <label id='datafinal'>
            <input className='campoPeríodoFinal' type="date" name='datafinal' />
            </label>
            </fieldset>
            </div>
          </fieldset>
        </div>

        <div>
            <h2 className='BlockResumeLojas'>Lojas</h2>
            <input type="button" name="lojasnames" value={"Loja"} className="butstyle" />
        </div>
        <div className='produtosResu'>
          <div className='infoProdut'>
            <h2 className='itenProduto'>
              <strong>Produtos</strong>
            </h2>
            <input className='buttonProduto' type="button" value={"Produto"}  />
          </div>
        </div>
      </div>
  );
}