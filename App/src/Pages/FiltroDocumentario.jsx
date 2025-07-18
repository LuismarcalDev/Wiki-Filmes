import { useState } from "react"
import '../styles/FiltroFilmes.css'
import { useNavigate } from 'react-router-dom'
import Select from "react-select/base";
function FiltroDocumentario(){
   
    const [movieFiltro, setMovieFiltro] = useState([])
   
  const ApiKey="11759f9ea83e1c27159572b9aaaa7a69"
 let url = `https://api.themoviedb.org/3/discover/movie?api_key=${ApiKey}&language=pt-BR&with_genres=99`;

 async function filtroapi (){
    const res = await fetch(url);
    const data = await res.json();
    const filmeFiltrado = data.results;
    setMovieFiltro(filmeFiltrado)

 }filtroapi()

   const navigate = useNavigate()
    const irParaCatalogo01 = (id) => {
        navigate('/catalogosobre', { state: { buscar: id } })
    }

        const opcoes = [
            {value: '28',label: "Selecione"},
            {value: '27',label: " Terror"}
        ]
         const handleChange = (selectedOption) => {
    console.log('Selecionado:', selectedOption)
  }





return(

    <div>
        <section className="FilmesFiltro01">
            <div className="title-filtro">
                <h2>Documentarios</h2>
             
            </div>
            <div className="filmes-geral">
                 {movieFiltro.map((movieFiltro)=>(
                     <div className="filmesFiltro" onClick={() => irParaCatalogo01(movieFiltro.id)}>
                    <img
                key={movieFiltro.id}
                src={`https://image.tmdb.org/t/p/w500${movieFiltro.poster_path}`}
                />
                </div>
                 ))}
               

            </div>

        </section>
    </div>
)



}export default FiltroDocumentario