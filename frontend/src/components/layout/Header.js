import '../../styles/components/layout/header.css'
import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <img src="img/logo.png" width="160" alt="Transportes x"></img>
                    <h1>Transportes<hr />
                        anónimos</h1>
                    <nav>
                        <div>
                            <ul>
                                <li> <Link to="/">Home</Link></li>
                                <li> <Link to="/nosotros">Nosotros</Link></li>
                                <li> <Link to="/contacto">Contacto</Link></li>
                                <li> <Link to="/novedades">Novedades</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Header;