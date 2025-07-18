import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faWhatsapp,
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
function Footer(){
    return(
        <div>
            <footer>
                <h2>WIKI | FILMES</h2>
                <p id='rose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque debitis repellendus, dolor soluta iure dolore? Vero neque aperiam animi totam earum perferendis voluptatum quia </p>
                <div className="icons">
                  <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '25px' }} />
<FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '25px' }} />
<FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '25px' }} />
<FontAwesomeIcon icon={faGithub} style={{ fontSize: '25px' }} />
<FontAwesomeIcon icon={faInstagram} style={{ fontSize: '25px' }} />


                    <img src="" alt="" />
                </div>
                <div className="copy">
                    <p id='biju'>&copy; 2025 por WIKI FILMES. Todos os direitos reservados.</p>
                </div>
                 
            </footer>
        </div>
    )
}
export default Footer