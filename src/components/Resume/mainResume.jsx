import lojas from "../Lojas.json"

export default function Resume (){    
 
      return (
        <div>
          <h1>Resume</h1>
          <ul>
            {lojas.map((usuario) => (
              <li key={usuario.codigo}>
                Nome Filial: {usuario.nomeFilial} | uf: {usuario.uf}
              </li>
            ))}
          </ul>
        </div>
      );
}