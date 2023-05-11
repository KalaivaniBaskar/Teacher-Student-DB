import { NavLink } from "react-router-dom";
import './header.css'
const Header = () => {
    return (
        <nav className="navbar navbar-expand-md text-white">
  <div className="container-fluid">
    <NavLink className="navbar-brand border border-dark fw-bold fst-italic p-1" to={"/"} >Arise Academy</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
        </li>
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-sm btn-outline-dark fw-bold" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )
}

export default Header;