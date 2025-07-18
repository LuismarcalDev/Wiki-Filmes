import { useState, useEffect } from "react"
import arrwLeft from '../imgs/arrowLeft.png'
import arrwRight from '../imgs/arrowRight.png'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import '../styles/CatalogoGeral.css'

function RecomendacaoSobre(){


    const navigate = useNavigate()
    const irParaCatalogo = (id) => {
        navigate('/catalogosobre', { state: { buscar: id } })
    }

     const minhaDivRef = useRef(null);
     const [filmes, setFilmes] = useState([]);
    const ApiKey = "11759f9ea83e1c27159572b9aaaa7a69"
    let url = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&with_genres=28&language=pt-BR&page=1`;
 useEffect(() => {
        async function buscarFilmes() {
            const res = await fetch(url);
            const data = await res.json()
            const todosfilmes = data.results;
            const embaralhar = todosfilmes.sort(() => Math.random() - 0.5)
            const dezAleatorios = embaralhar.slice(0, 100);
            setFilmes(dezAleatorios)
        } buscarFilmes();
    }, [])

    return(
        <div>
            <div className="catalogo-geral" id="recomendacao" >

          
            <h2 id="catalogo-geral-h2">Recomendados </h2>
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
                              </div>
        </div>
    )
}




export default RecomendacaoSobre