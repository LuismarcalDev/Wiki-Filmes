
import '../styles/CatalogoSobre.css'
import { useLocation } from 'react-router-dom'
import RecomendacaoSobre from "./RecomendacaoSobre"
import cont from '../imgs/18.png'
import { useEffect,useState } from "react"

function CatalogoSobreSeries(){
    const location = useLocation()
    const buscar = location.state?.buscar || null
   
    const [filmeUnico, SetfilmeUnico] = useState([])
    const pesquisa = async () => {
    const ApiKey = "11759f9ea83e1c27159572b9aaaa7a69";
    const res = await fetch(`https://api.themoviedb.org/3/tv/${buscar}?api_key=${ApiKey}&language=pt-BR`);
    const data = await res.json();
  SetfilmeUnico(data);
};

pesquisa();
const [atores01, Setatores01] = useState([]);
let url = `https://api.themoviedb.org/3/tv/${buscar}/credits?api_key=11759f9ea83e1c27159572b9aaaa7a69&language=pt-BR
`;

    async function acharAtores(){
        const res = await fetch(url);
        const data = await res.json();
        const todosAtores = data.cast;
        const dezAleatorios = todosAtores.slice(0,8);
        Setatores01(dezAleatorios)
    }acharAtores()











    return(
        <div>
          
            <section className="Sobre">
                {filmeUnico && ( 
                <div className="container-filme-sobre">
                    
                    <div className="img-sobre">
                        <img src={`https://image.tmdb.org/t/p/w500${filmeUnico.poster_path}`} alt="" />
                    </div>
                    
                    <div className="container-left-description">
                        <div className="info-sobre-filme">
                        
                            <h1>{filmeUnico.name} </h1>
                            <p className='comomns'><span>{filmeUnico?.first_air_date?.split("-")[0]}</span>| <img src={cont} alt="" /> | <span id='yellow'>Suspense</span> | <span>{filmeUnico.number_of_seasons}Temporadas</span></p>
                            <p>{filmeUnico.overview}</p>
                            <p><strong>Director:</strong> Sean Parker</p>
                                                     <p>{new Intl.NumberFormat('pt-BR', {
                                                        minimumFractionDigits: 1,
                                                        maximumFractionDigits: 1,
                                                        }).format(filmeUnico.vote_average)} ⭐⭐⭐⭐⭐</p>
                        </div>
                        <div className="actors">
                            <h3>Atores:</h3>
                            <div className="ator-container">
                                {atores01.map((atores01)=> (
                                     <div className="actor-container">
                                 <img  src={`https://image.tmdb.org/t/p/w200${atores01.profile_path}`} alt="" />
                               <div className="actores-geral">
                                 <p id="nome">{atores01.name}</p>
                                 
                               </div>
                               </div>

                                ))}
                              

                            </div>

                        </div>
                    </div>
                 
                </div>
                    )}
                   
                <div className="recomendacao">

                </div>
            </section>
            <RecomendacaoSobre/>
        </div>
    )
}
export default CatalogoSobreSeries