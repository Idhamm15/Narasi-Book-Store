import React from 'react';

// Importing Components
import './PageError404.css';

// Importing Style
import './App.css';

function PageError404() {
  let urlEmpty = '';
  return(
    <React.Fragment>
      <div className="niceadmin">
        <main>
          <div className="container">

            <section className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
              <h1>404</h1>
              <h2>The page you are looking for doesn't exist.</h2>
              <a className="btn" href={window.location.origin}><span>Back to home</span></a>
              <img src="NiceAdmin/img/not-found.svg" class="img-fluid py-5" alt="Page Not Found" />
              <div className="credits">
                Designed by <a href={urlEmpty}>Narasi</a>
              </div>
            </section>

          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

export default PageError404;