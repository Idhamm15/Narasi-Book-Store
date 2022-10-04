// Importing Libraries
import React from "react";
import { useNavigate } from "react-router-dom";

// Importing Style
import './Header.css';

function Header() {
  let urlEmpty = '';
  const navigate = useNavigate();

  // Function menghandle sidedar menu
  function handlerSidebar() {
    document.body.classList.toggle('toggle-sidebar');
  }

  // Function Logout
  function handlerAction(type) {
    switch (type) {
      case 'logout':
        localStorage.removeItem('login');
        localStorage.setItem('access_token', null)
        navigate('/login')
        break;
      default:
        navigate('/*');
        break;
    }
  }

  return (
    <React.Fragment>
      <header id="header" className="header fixed-top d-flex align-items-center">

      <div className="d-flex align-items-center justify-content-between">
        <a href={window.location.origin} className="logo d-flex align-items-center">
          <img src="NiceAdmin/img/logo.png" alt="" />
          <span className="d-none d-lg-block">Narasi</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn" onClick={(e) => handlerSidebar()} ></i>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">

          <li className="nav-item dropdown pe-3">

            <a className="nav-link nav-profile d-flex align-items-center pe-0" href={urlEmpty} data-bs-toggle="dropdown">
              <img src="/NiceAdmin/img/default.jpg" alt="Profile" className="rounded-circle" />
              <span className="d-none d-md-block dropdown-toggle ps-2">Narasi Team</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6>Narasi Team</h6>
                <span>Web Developer</span>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a className="dropdown-item d-flex align-items-center" href={window.location.origin + '/about'}>
                  <i className="bi bi-person"></i>
                  <span>Team</span>
                </a>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a className="dropdown-item d-flex align-items-center" href={urlEmpty} onClick={(e) => handlerAction('logout')}>
                  <i className="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </a>
              </li>

            </ul>
          </li>

        </ul>
      </nav>

      </header>
    </React.Fragment>
  );
}

export default Header;