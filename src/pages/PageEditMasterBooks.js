// Importing Libararies
import React from 'react';

// Importing Components
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Main from '../components/Main';
import EditMasterBooks from '../components/EditMasterBooks';

// Importing Style
import './App.css'; 

function PageEditMasterBooks() {
  const page = 'Master Book';
  return (
  <React.Fragment>
    <div className="niceadmin">
      <Header />
      <Sidebar page={page}/>
        <Main>
          <EditMasterBooks />
        </Main>
      <Footer />
    </div>
  </React.Fragment>
  )
}
export default PageEditMasterBooks;
