import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar (){
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to= '/'>
                    <h3>Ecommerce</h3>
                </Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <p className="navbar-item"><NavLink to={`/category/gaming`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Gaming</NavLink></p>
                    <p className="navbar-item"><NavLink to={`/category/accesorio`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Accesorio</NavLink></p>
                    <p className="navbar-item"><NavLink to={`/category/oficina`} className={({isActive})=> isActive ? 'ActiveOption' : 'Option'}>Oficina</NavLink></p>
                </div>
                <div className="navbar-end">
                    <CartWidget></CartWidget>
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/signup" className="button is-primary">
                                Sign Up
                            </Link>
                            <Link to="/login" className="button is-light">
                                Log In
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;