// Importing Libraries
import React from 'react';

// Importing Compponents
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Main from '../components/Main';
import Dashboard from '../components/Dashboard';

// Importing Style
import './App.css';

function PageDashboard({nonActive}) {
  const page = 'Dashboard';
  return (
  <React.Fragment>
    <div className="niceadmin">
      <Header />
      <Sidebar page={page}/>
        <Main>
          <Dashboard />
        </Main>
      <Footer />
    </div>
  </React.Fragment>
  )
}

export default PageDashboard;