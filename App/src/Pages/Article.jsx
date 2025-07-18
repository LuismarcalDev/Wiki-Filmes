import '../styles/Article.css'
import '../styles/Header.css'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import cont from '../imgs/18.png'

function Article(){

     const navigate = useNavigate()
    const irParaCatalogo01 = (buscar) => {
        navigate('/catalogosobre', { state: { buscar: 872585 } })
    }

    return(
        <div>
            <main>
        <div className="container-main">
                <h1>OPPENHEIMER</h1>
                  
                <p className='comomns'><span>2023</span> | <img src={cont} alt="" /> | <span id='yellow'>Suspense</span> | <span>136m</span></p>
                 
            <p id='yester'>O filme 'Oppenheimer', dirigido por Christopher Nolan, acompanha
            a história do físico J. Robert Oppenheimer e sua participação no
            desenvolvimento da bomba atômica durante o Projeto Manhattan.
            Cillian Murphy interpreta Oppenheimer, retratando o 
            "pai da bomba atômica o da bomba atômica durante o Projeto Manhattan.
            Cillian Murphy interpreta Oppenheimer, retratando o 
            "pai da bomba atômica
            </p>
        <div className="btns">
            <button onClick={()=>{window.open('https://www.youtube.com/watch?v=F3OxA9Cz17A', '_blank')}}>Ver Trailer</button>

            <button id='btn2' onClick={() => irParaCatalogo01(872585)}>Saber Mais</button>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Article