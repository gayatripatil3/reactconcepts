import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar bg-${props.mode} border-bottom border-body`} data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={props.mode2}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText" style={props.mode2}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0"style={props.mode2}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <span className="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
<div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toggleFun1} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={props.mode2} >Mode Change</label>
</div>

</nav>

    </div>
  )
}
