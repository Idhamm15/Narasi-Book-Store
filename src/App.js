// Importing Libraries
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

// Importing Pages
import PageLogin from './pages/PageLogin';
import PageError404 from './pages/PageErorr404';
import PageAbout from './pages/PageAbout';
import PageDashboard from './pages/PageDashboard';
import PageIndexMasterBooks from './pages/PageIndexMasterBooks';
import PageCreateMasterBooks from './pages/PageCreateMasterBooks';
import PageEditMasterBooks from './pages/PageEditMasterBooks';
import PageLandingPage from './pages/PageLandingPage';

/*
 * Function ProtectedRoute untuk membatasi hak akses,
 * sehingga route yang dilindungi hanya bisa diakses jika sudah login.
 */
const ProtectedRoute = ({ children }) => {
  const login = localStorage.getItem('login');
  if (!login) {
    
    return <Navigate to={'/login'} replace />;
  } else {
    return children;
  }
};

function App() {
  return (
    <React.Fragment>
      <Routes>
        {/* Non Protected Route */}
        <Route path='/' element={<PageLandingPage />} exact />
        <Route path='/login' element={<PageLogin />} exact />
        <Route path='/*' element={<PageError404 />} exact />
        {/* Protected Route */}
        <Route path='/Dashboard' element={<ProtectedRoute><PageDashboard /></ProtectedRoute>} exact />
        <Route path='/master-books' element={<ProtectedRoute><PageIndexMasterBooks /></ProtectedRoute>} exact />
        <Route path='/create-books' element={<ProtectedRoute><PageCreateMasterBooks /></ProtectedRoute>} exact />
        <Route path='/edit-books/:id' element={<ProtectedRoute><PageEditMasterBooks /></ProtectedRoute>} exact />
        <Route path='/about' element={<ProtectedRoute><PageAbout /></ProtectedRoute>} exact />
      </Routes>
    </React.Fragment>
  );
}

export default App;
