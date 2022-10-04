// Importing Libraries
import React from 'react';

// Importing Components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Main from '../components/Main';
import About from '../components/About';

// Importing Style
import './App.css';

function PageAbout() {
  const page = 'About';
  return (
  <React.Fragment>
    <div className="niceadmin">
      <Header />
      <Sidebar page={page}/>
        <Main>
          <About />
        </Main>
      <Footer />
    </div>
  </React.Fragment>
  )
}

export default PageAbout;