import Header from './Pages/Header'
import Article from './Pages/Article'
import Catalogo from './Pages/Catalogo'
import CatalogoTerror from './Pages/CatalogoTerror'
import CatalogoComedia from './Pages/CatalogoComedia'
import CatalogoAcao from './Pages/CatalogoAcao'
import CatalogoFantasia from './Pages/CatalogoFantasia'
import CatalogAnimacao from './Pages/CatalogoAnimacao'
import CatalogoGuerra from './Pages/CatalogoGuerra'
import CatalogoSeriesComedia from './Pages/CatalogoSeriesComedia'
import CatalogoSeriesReality from './Pages/CatalogoSeriesReality'
import CatalogoAventura from './Pages/CatalogoAventura'
import Footer from './Pages/Footer'

function HomePage(){
    
    return(
        <div>
            
              <Article/>
              <Catalogo/>
              <CatalogoTerror/>
              <CatalogoComedia/>
              <CatalogoAcao/>
              <CatalogoFantasia/>
              <CatalogAnimacao/>
              <CatalogoGuerra/>
              <CatalogoSeriesComedia/>
              <CatalogoSeriesReality/>
              <CatalogoAventura/>
            <Footer/>
        </div>
    )
}
export default HomePage