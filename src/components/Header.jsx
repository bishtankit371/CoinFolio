import {Link} from "react-router-dom";


function Header(){


return(
  <nav className="navbar navbar-light bg-dark">
    <Link className="navbar-brand" to="/"><i className="fa-brands fa-bitcoin fa-4x mx-4"></i> <h3 className="d-inline"> CoinFolio </h3></Link>
  </nav>
);

}

export default Header
