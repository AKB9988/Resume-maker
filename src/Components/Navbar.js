import React from 'react';
import { NavLink ,Link} from "react-router-dom"

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg" style={props.mode==='light'?{ backgroundColor:"#d9ecf9ff" }:{backgroundColor:"#0F172A"}} data-bs-theme={props.mode === 'light' ? 'light' : 'dark'}>

      <div className="container-fluid">
        <Link className="navbar-brand" to="/home"> <img src='https://cdn-icons-png.flaticon.com/512/942/942799.png' alt='logo'width='30' height='30'/> Resume Maker</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto gap-3">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>


          </div>
        </div>
        <label class="ui-switch">
          <input type="checkbox" onChange={props.toggle} checked={props.mode === "dark"}/>
          <div class="slider">
            <div class="circle"></div>
          </div>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
