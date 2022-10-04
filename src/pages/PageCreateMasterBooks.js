// Importing Libraries
import React from 'react';

// Importing Components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Main from '../components/Main';
import CreateMasterBooks from '../components/CreateMasterBooks';

// Importing Style
import './App.css'; 

function PageCreateMasterBooks() {
  const page = 'Master Book';
  return (
  <React.Fragment>
    <div className="niceadmin">
      <Header />
      <Sidebar page={page}/>
        <Main>
          <CreateMasterBooks />
        </Main>
    <Footer />
    </div>
  </React.Fragment>
  )
}

export default PageCreateMasterBooks;