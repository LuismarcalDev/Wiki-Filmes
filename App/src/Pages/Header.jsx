import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import '../styles/style.css';
import lupa from '../imgs/lupa.png'
import menu from '../imgs/menu.png'
import { useState } from 'react';

function Header() {

     const navigate = useNavigate(); // hook pra navegar entre rotas
    const irParapesquisa = (input) => {
        navigate('/pesquisa', { state: { input} })
    }
const [input, setInput] = useState("")


  return (
    <div>
      <header>
        <h2 onClick={()=> window.location.href= '/inicio'}>WIKI | FILMES</h2>

        <div className="menu">
           <a href="/inicio">Inicio</a>
                <a href="/FiltroFilmes">Filmes</a>
                <a href="/FiltroSerie">Series</a>
                <a href="/FiltroDocumentario">Documentarios</a>
        </div>

        <button >
            <img src={lupa} alt="lupa de pesquisa" />
          <input
           type="text"
           placeholder='Pesquisar Filme'
           value={input}
           onChange={(e)=> setInput(e.target.value)}
          />

         <button id='click' onClick={()=> irParapesquisa(input)}>
           Procurar
        </button>
        </button>
       
      
       
      </header>
    </div>
  );
}

export default Header;
