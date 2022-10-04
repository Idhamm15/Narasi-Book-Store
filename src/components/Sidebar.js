// Importing Libraries
import React from "react";
import { useNavigate } from "react-router-dom";

// Importing Style
import './Sidebar.css';

function Sidebar({page}) {
  const navigate = useNavigate();
  let urlEmpty = '';

  // Set Active Menu
  const dashboard = page === 'Dashboard'? '':'collapsed';
  const masterBook = page === 'Master Book'? '':'collapsed';
  const about = page === 'About'? '':'collapsed';

  // Function Logout
  function handlerAction(type) {
    switch (type) {
      case 'logout':
        localStorage.removeItem('login');
        localStorage.setItem('access_token', null)
        navigate('/login');
        break;
      default:
        navigate('/*');
        break;  
    }
  }

  return (
    <React.Fragment>
      <div className="niceadmin">
        <aside id="sidebar" className="sidebar">
          <ul className="sidebar-nav" id="sidebar-nav">

            <li className="nav-item">
              <a className={'nav-link ' + dashboard } href={window.location.origin + '/dashboard'}>
                <i className="bi bi-grid"></i>
                <span>Dashboard</span>
              </a>
            </li>

            <li className="nav-item">
              <a className={'nav-link ' + masterBook } href={window.location.origin + '/master-books'}>
                <i className="bi bi-layout-text-window-reverse"></i><span>Data Buku</span>
              </a>
            </li>

            <li className="nav-heading">Pages</li>

            <li className="nav-item">
              <a className={'nav-link ' + about } href={window.location.origin + '/about'}>
                <i className="bi bi-person"></i>
                <span>Team</span>
              </a>
            </li>

            <li className="nav-item">
              <a className={'nav-link collapsed'} href={urlEmpty} onClick={(e) => handlerAction('logout')}>
              <i className="bi bi-box-arrow-right"></i><span>Sign Out</span>
              </a>
            </li>

          </ul>
        </aside>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;