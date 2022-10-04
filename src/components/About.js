// Importing Libraries
import React, { useEffect, useState } from 'react';

// Importing Style
import './About.css';

function About() {
  // Inisiasi Varibel dan State
  let urlEmpty = '';
  const [authors, setAuthors] = useState([]);

  // set Data authors
  useEffect(() => {
    setAuthors([
      // Data anggota kelompok
      { id: 1, name: 'Rifky Maulana', education: 'S1 Informatika', experience: 'Pengalaman 6 bulan magang sebagai web developer di PT Pupuk Kujang', image: 'rifky.jpeg'},
      { id: 2, name: 'Oki Nurul Abada', education: 'S1 Informatika', experience: '', image: 'oki-subagia.jpeg'},
      { id: 3, name: 'Mohamad Idham Bahri', education: 'Sarjana Terapan D4 Teknik Informatika Poltek Harber Tegal', experience: '', image: 'idham.jpeg'},
      { id: 4, name: 'Lia Apriani', education: 'S1 Administrasi Publik', experience: '', image: 'lia.jpeg'},
      { id: 5, name: 'Rizka Fauziah', education: 'S1 Sistem Informasi', experience: '', image: 'riska.jpeg'},
    ])
  }, [])
  
  return (
  <React.Fragment>
      <div className="pagetitle">
        <h1>Team</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href={urlEmpty}>Home</a></li>
            <li className="breadcrumb-item active">Team</li>
          </ol>
        </nav>
      </div>

      <section className="section profile">
        <div className="row">
        {authors.map((value, index) => (
          <div className="col-xl-4">
            <div className="card" style={{height: '350px'}}>
              <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
                <div className="row" style={{height: '290px'}}>
                  <div className="card-body profile-card d-flex flex-column align-items-center">
                    <img src={'NiceAdmin/img/' + value.image} alt="Profile" className="rounded-circle" />
                    <h2 className="mt-2" style={{ textAlign: 'center' }}>{value.name}</h2>
                    <h3 style={{ textAlign: 'center' }}>{value.education}</h3>
                    <p style={{ textAlign: 'center' }}>{value.experience}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="social-links">
                    <a href={urlEmpty} className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href={urlEmpty} className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href={urlEmpty} className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href={urlEmpty} className="linkedin"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        </div>
      </section>
  </React.Fragment>
  )
}

export default About;