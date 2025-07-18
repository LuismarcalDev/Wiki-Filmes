import { useLocation } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import '../styles/Pesquisar.css'
function Pesquisar(){

    const navigate = useNavigate()
    const irParaCatalogo01 = (id) => {
        navigate('/catalogosobre', { state: { buscar: id } })
    }



    const location = useLocation()
    const inputRecebido = location.state?.input || null
    const url = `https://api.themoviedb.org/3/search/movie?api_key=11759f9ea83e1c27159572b9aaaa7a69&query=${inputRecebido}&language=pt-BR`
    
    const [movie, setMovie]= useState([])
    
        async function pesquisaFilmes(){
            const res = await fetch(url);
            const data = await res.json();
            const filmeAchado = data.results;
            setMovie(filmeAchado)

        }pesquisaFilmes();
  





    return(
        <div>
           <section id='pesquisa'>
            <div className="container">
                 <h2>Resultados</h2>
            <div className="resultadosContainer">
            {movie.map((movie)=>(
                <div className="filmeSolo"  onClick={() => irParaCatalogo01(movie.id)}>
                <img
                key={movie.id}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                />
                
                </div>
                 ))}
            </div>
            </div>
           </section>
        </div>
    )
}
export default Pesquisar