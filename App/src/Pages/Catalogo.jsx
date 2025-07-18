
import { useRef } from 'react';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import arrwLeft from '../imgs/arrowLeft.png'
import arrwRight from '../imgs/arrowRight.png'

import '../styles/catalogo.css'

function Catalogo() {
    
    const [filmes, setFilmes] = useState([]);
    const ApiKey = "11759f9ea83e1c27159572b9aaaa7a69"
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=pt-BR&page=1`;
    const modoSerie = useRef(false); // começa falso


    const minhaDivRef = useRef(null);
    const navigate = useNavigate()
   const irParaCatalogo = (id) => {
  const rota = modoSerie.current ? '/CatalogoSobreSeries' : '/CatalogoSobre';
  navigate(rota, { state: { buscar: id } });
}


function series() {
  modoSerie.current = true; // ativa modo série

  const url = `https://api.themoviedb.org/3/tv/popular?api_key=${ApiKey}&language=pt-BR&page=1`;

  async function buscarFilmes() {
    const res = await fetch(url);
    const data = await res.json();
    const todosfilmes = data.results;
    const embaralhar = todosfilmes.sort(() => Math.random() - 0.5);
    const dezAleatorios = embaralhar.slice(0, 50);
    setFilmes(dezAleatorios);
  }

  buscarFilmes();
}


    function filmesnew() {
        url = `https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}&language=pt-BR&page=1`
        async function buscarFilmes() {
            const res = await fetch(url);
            const data = await res.json()
            const todosfilmes = data.results;
            const embaralhar = todosfilmes.sort(() => Math.random() - 0.5)
            const dezAleatorios = embaralhar.slice(0, 50);
            setFilmes(dezAleatorios)
        } buscarFilmes();
    }

    useEffect(() => {
        async function buscarFilmes() {
            const res = await fetch(url);
            const data = await res.json()
            const todosfilmes = data.results;
            const embaralhar = todosfilmes.sort(() => Math.random() - 0.5)
            const dezAleatorios = embaralhar.slice(0, 50);
            setFilmes(dezAleatorios)
        } buscarFilmes();
    }, [])


    return (
        <div>
            <article className="catalogo">
                <div className="options">
                    <button id="btn001" onClick={filmesnew} >
                        Filmes
                    </button>
                    <button onClick={series}>
                        Series
                    </button>
                </div>
                <div className="container-btn001">
                    <div className="btn-controle">
                        <button id='btscapone' onClick={() => { minhaDivRef.current.scrollLeft -= 600 }}>
                            <img src={arrwRight} alt="" />
                        </button>
                        <button id='btscapone' onClick={() => { minhaDivRef.current.scrollLeft += 600 }}>
                            <img src={arrwLeft} alt="" />
                        </button>
                    </div>

                    <div className="container-catalogo" ref={minhaDivRef}  >
                        {filmes.map((filmes) => (
                            <div className="poster-film" onClick={() => irParaCatalogo(filmes.id)}
                            >
                                <img
                                    key={filmes.id}
                                    src={`https://image.tmdb.org/t/p/w500${filmes.poster_path}`}
                                    alt=""
                                />
                            </div>
                        ))}

                    </div>

                </div>
            </article>
        </div>

    )

}

export default Catalogo
