import { useState } from "react"
import '../styles/FiltroFilmes.css'
import { useNavigate } from 'react-router-dom'
import Select from 'react-select'
   const opcoes = [
  
  { value: '16', label: 'Animação' },
  { value: '35', label: 'Comédia' },
  { value: '80', label: 'Crime' },
  { value: '99', label: 'Documentário' },
  { value: '18', label: 'Drama' },
  { value: '10751', label: 'Família' },
  { value: '10762', label: 'Infantil' },
  { value: '9648', label: 'Mistério' },
  { value: '10763', label: 'Notícias' },
  { value: '10764', label: 'Reality' },
  { value: '10765', label: 'Ficção Científica e Fantasia' },
  { value: '10766', label: 'Soap Opera' },
  { value: '10767', label: 'Talk Show' }
]

function FiltroSerie(){
   
    const [movieFiltro, setMovieFiltro] = useState([])

const [valorSelecionado, setValorSelecionado] = useState(80)
const handleChange = (opcao) => {
    setValorSelecionado(opcao.value)
  }
  
  const ApiKey="11759f9ea83e1c27159572b9aaaa7a69"


let url = `https://api.themoviedb.org/3/discover/tv?api_key=${ApiKey}&language=pt-BR&with_genres=${valorSelecionado}&page=1`;

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


const customStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: '#222',
    borderColor: '#444',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#666',
    },
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: '#333',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? '#555' : '#333',
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#fff',
    fontFamily: 'Poppins, sans-serif',
  }),
}






return(

    <div>
        <section className="FilmesFiltro01">
            <div className="title-filtro">
                <h2>Series</h2>
       <Select className="select"
  options={opcoes}
  styles={customStyles}
  placeholder="Escolha um gênero"
  onChange={handleChange}
/>
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



}export default FiltroSerie