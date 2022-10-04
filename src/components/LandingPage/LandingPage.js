// importing Libraries
import React from 'react';

// Importing Style
import './LandingPage.css';

function LandingPage() {
  return(
    <React.Fragment>
      <div className="yummy">
        {/* <!-- ======= Header ======= --> */}
        <header id="header" className="header fixed-top d-flex align-items-center">
          <div className="container d-flex align-items-center justify-content-between">

            <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
              {/* <!-- Uncomment the line below if you also wish to use an image logo --> */}
              <img src="favicon.ico" alt="" />
              <h1>Narasi<span></span></h1>
            </a>

            <nav id="navbar" className="navbar">
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#chefs">Teams</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            {/* <!-- .navbar --> */}

            <a className="btn-book-a-table" href={window.location.origin + '/login'}>Login</a>
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

          </div>
        </header>
        {/* <!-- End Header --> */}

        {/* <!-- ======= Hero Section ======= --> */}
        <section id="hero" className="hero d-flex align-items-center section-bg">
          <div className="container">
            <div className="row justify-content-between gy-5">
              <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
                <h2 data-aos="fade-up">Kejutan spesial<br/>dari kami hanya untukmu</h2>
                <p data-aos="fade-up" data-aos-delay="100">Toko buku online terbesar, terlengkap dan terpercaya di Indonesia</p>
                <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                  <a href="#book-a-table" className="btn-book-a-table">Pesan Sekarang</a>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
                <img src="uploads/books/1.jpg" className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="300" style={{ height: '450px' }}/>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Hero Section --> */}

        <main>

          {/* <!-- ======= About Section ======= --> */}
          <section id="about" className="about mt-1000">
            <div className="container" data-aos="fade-up">

              <div className="section-header">
                <h2>About Us</h2>
                <p>Learn More <span>About Us</span></p>
              </div>

              <div className="row gy-4">
                <div className="col-lg-7 position-relative about-img" style={{backgroundImage: 'url(Yummy/img/buku-bg.jpg)'}}
                  data-aos="fade-up" data-aos-delay="150">
                  <div className="call-us position-absolute">
                    <h4>Book a Table</h4>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
                <div className="col-lg-5 d-flex align-items-end" data-aos="fade-up" data-aos-delay="300">
                  <div className="content ps-0 ps-lg-5">
                    <p className="fst-italic">
                      Narasi book merupakan Toko buku online terbesar, terlengkap dan terpercaya di Indonesia, yang sampai sekarang paling banyak peminatnya.
                    </p>
                    <ul>
                      <li><i className="bi bi-check2-all"></i> Buku-buku yang kami jual Legal.</li>
                      <li><i className="bi bi-check2-all"></i> Mempunyai garansi resmi.</li>
                      <li><i className="bi bi-check2-all"></i> Terdapat banyak kategori buku yang bisa kamu sesuaikan sesuai dengan minat dan bakat.</li>
                    </ul>
                    <p>
                      Ayo!! Tunggu apalagi segera dapatkan koleksi buku-buku dari kami!!
                    </p>
                
        
                    <div className="position-relative mt-4">
                      <img src="Yummy/img/buku-bg-2.jpg" className="img-fluid" alt="" />
                      <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"> </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
          {/* <!-- End About Section --> */}

          {/* <!-- ======= Why Us Section ======= --> */}
          <section id="why-us" className="why-us section-bg">
            <div className="container" data-aos="fade-up">

              <div className="row gy-4">

                <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                  <div className="why-box">
                    <h3>Kenapa harus memilih Narasi Book Store?</h3>
                    <p>
                      Narasi Book Store Adalah Toko Buku yang berdiri sejak tahun 2022, Sejauh ini Narasi Book Store banyak Bekerja sama dengan banyak seniman ahli, Setiap karya-karya dari seniman ternama di dalam negeri maupun luar negeri.
                      
                    </p>
                    <div className="text-center">
                      <a href="/#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                    </div>
                  </div>
                </div>
                {/* <!-- End Why Box --> */}

                <div className="col-lg-8 d-flex align-items-center">
                  <div className="row gy-4">

                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay="200">
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-clipboard-data"></i>
                        <h4>Terjamin Legalitas</h4>
                        <p>Narasi Book Store terjamin legalitasnya.</p>

                        </div>
                    </div>
                    {/* <!-- End Icon Box --> */}

                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-gem"></i>
                        <h4>Inspirasi</h4>
                        <p>Buku-buku dari Narasi Book Store banyak memberikan Hiburan, inpirasi, bahkan motivasi. </p>

                        </div>
                    </div>
                    {/* <!-- End Icon Box --> */}

                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                      <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                        <i className="bi bi-inboxes"></i>
                        <h4>Bergaransi</h4>
                        <p>Narasi Book Store memberika garansi resmi dari toko untuk para customernya</p>

                        </div>
                    </div>
                    {/* <!-- End Icon Box --> */}

                  </div>
                </div>

              </div>

            </div>
          </section>
          {/* <!-- End Why Us Section --> */}

          {/* <!-- ======= Stats Counter Section ======= --> */}
          <section id="stats-counter" className="stats-counter">
            <div className="container" data-aos="zoom-out">

              <div className="row gy-4">

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1"
                      className="purecounter">232</span>
                    <p>Penerbit</p>
                  </div>
                </div>
                {/* <!-- End Stats Item --> */}

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1"
                      className="purecounter">521</span>
                    <p>Penulis</p>
                  </div>
                </div>
                {/* <!-- End Stats Item --> */}

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1"
                      className="purecounter">1453</span>
                    <p>Buku</p>
                  </div>
                </div>
                {/* <!-- End Stats Item --> */}

                <div className="col-lg-3 col-md-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1"
                      className="purecounter">32</span>
                    <p>Kategori</p>
                  </div>
                </div>
                {/* <!-- End Stats Item --> */}

              </div>

            </div>
          </section>
          {/* <!-- End Stats Counter Section --> */}

          {/* <!-- ======= Menu Section ======= --> */}
          <section id="menu" className="menu">
            <div className="container" data-aos="fade-up">

              <div className="section-header">
                <h2>Our Books</h2>
                <p>Check Our <span>Books</span></p>
              </div>

              <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">

                <li className="nav-item">
                  <a href='/#' className="nav-link active show" data-bs-toggle="tab" data-bs-target="#novel">
                    <h4>Novel</h4>
                  </a>
                </li>
                {/* <!-- End tab nav item --> */}

                <li className="nav-item">
                  <a href='/#' className="nav-link" data-bs-toggle="tab" data-bs-target="#ilmiah">
                    <h4>Ilmiah</h4>
                  </a>
                </li>
                {/* <!-- End tab nav item --> */}

                <li className="nav-item">
                  <a href='/#' className="nav-link" data-bs-toggle="tab" data-bs-target="#komik">
                    <h4>Komik</h4>
                  </a>
                </li>
                {/* <!-- End tab nav item --> */}

                <li className="nav-item">
                  <a href='/#' className="nav-link" data-bs-toggle="tab" data-bs-target="#ensiklopedia">
                    <h4>Ensiklopedia</h4>
                  </a>
                </li>
                {/* <!-- End tab nav item --> */}

                <li className="nav-item">
                  <a href='/#' className="nav-link" data-bs-toggle="tab" data-bs-target="#panduan">
                    <h4>Panduan</h4>
                  </a>
                </li>
                {/* <!-- End tab nav item --> */}

              </ul>

              <div className="tab-content" data-aos="fade-up" data-aos-delay="300">

                <div className="tab-pane fade active show" id="novel">

                  <div className="tab-header text-center">
                    <p>Kategori</p>
                    <h3>Novel</h3>
                  </div>

                  <div className="row gy-5">

                    <div className="col-lg-4 menu-item">
                      <a href="uploads/books/1.jpg" className="glightbox"><img src="uploads/books/1.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Novel Catatan Pembunuhan Sang Novelis (Malice)</h4>
                      <p className="ingredients">Keigo Higashino</p>
                      <p className="price">61000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="uploads/books/2.jpg" className="glightbox"><img src="uploads/books/2.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Novel Salvation of a Saint</h4>
                      <p className="ingredients">Keigo Higashin</p>
                      <p className="price">75000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="uploads/books/3.jpg" className="glightbox"><img src="uploads/books/3.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Novel Bedebah Di Ujung Tanduk</h4>
                      <p className="ingredients">Tere Liye</p>
                      <p className="price">76000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="uploads/books/4.jpg" className="glightbox"><img src="uploads/books/4.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Novel Guru Aini</h4>
                      <p className="ingredients">Andrea Hirata</p>
                      <p className="price">84000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="uploads/books/5.jpg" className="glightbox"><img src="uploads/books/5.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Novel Di Tanah Lada</h4>
                      <p className="ingredients">Ziggyzesyazeoviennazabrizkie</p>
                      <p className="price">66000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="uploads/books/6.jpg" className="glightbox"><img src="uploads/books/6.jpeg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Novel Mengapa Luka Tidak Memaafkan Pisau</h4>
                      <p className="ingredients">M. Aan Mansyur</p>
                      <p className="price">74000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                  </div>
                </div>
                {/* <!-- End Starter Menu Content --> */}

                <div className="tab-pane fade" id="ilmiah">

                  <div className="tab-header text-center">
                    <p>Kategori</p>
                    <h3>Ilmiah</h3>
                  </div>

                  <div className="row gy-5">

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-1.png" className="glightbox"><img src="uploads/books/21.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Morfologi: Kajian Proses Pembentukan Kata</h4>
                      <p className="ingredients">Prof. Dr. Drs. I Wayan Simpen, M.Hum.</p>
                      <p className="price">75000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-2.png" className="glightbox"><img src="uploads/books/22.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Studi Islam 1: Kajian Islam Kontemporer</h4>
                      <p className="ingredients">Hasani Ahmad Said</p>
                      <p className="price">96000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-3.png" className="glightbox"><img src="uploads/books/23.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Etika Umum: Kajian tentang Beberapa Masalah Pokok dan Teori Etika Normatif</h4>
                      <p className="ingredients">J. Sudarminta</p>
                      <p className="price">45000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-4.png" className="glightbox"><img src="uploads/books/24.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Fraud Auditing Kajian Teoretis Dan Empiris</h4>
                      <p className="ingredients">Dien Noviany Rahmatika</p>
                      <p className="price">129000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-5.png" className="glightbox"><img src="uploads/books/25.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Filsafat Politik Melayu Kajian Filologis & Refleksi Filosofis</h4>
                      <p className="ingredients">DR. SALEH PARTAONAN DAULAY</p>
                      <p className="price">125000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-6.png" className="glightbox"><img src="uploads/books/26.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Kajian Riset Akuntansi</h4>
                      <p className="ingredients">Hery, S.E., M.Si., CRP., RSA., CFRM.</p>
                      <p className="price">51000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                  </div>
                </div>
                {/* <!-- End Breakfast Menu Content --> */}

                <div className="tab-pane fade" id="komik">

                  <div className="tab-header text-center">
                    <p>Kategori</p>
                    <h3>Komik</h3>
                  </div>

                  <div className="row gy-5">

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-1.png" className="glightbox"><img src="uploads/books/41.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Jujutsu Kaisen 0</h4>
                      <p className="ingredients">Gege Akutami</p>
                      <p className="price">30000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-2.png" className="glightbox"><img src="uploads/books/42.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Jujutsu Kaisen 01</h4>
                      <p className="ingredients">Gege Akutami</p>
                      <p className="price">21000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-3.png" className="glightbox"><img src="uploads/books/43.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Detektif Conan 98</h4>
                      <p className="ingredients">Aoyama Gosho</p>
                      <p className="price">21000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-4.png" className="glightbox"><img src="uploads/books/44.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Detektif Conan 99</h4>
                      <p className="ingredients">Aoyama Gosho</p>
                      <p className="price">28000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-5.png" className="glightbox"><img src="uploads/books/45.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Komik Kok Gitu Sih?</h4>
                      <p className="ingredients">Dian Kristiani, Dian K</p>
                      <p className="price">119000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-6.png" className="glightbox"><img src="uploads/books/46.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Komik Next G Rahasia Murid baru</h4>
                      <p className="ingredients">Ghaina Rahimy Ahda & Satrio</p>
                      <p className="price">39000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                  </div>
                </div>
                {/* <!-- End Lunch Menu Content --> */}

                 <div className="tab-pane fade" id="ensiklopedia">

                  <div className="tab-header text-center">
                    <p>Kategori</p>
                    <h3>Ensiklopedia</h3>
                  </div>

                  <div className="row gy-5">

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-1.png" className="glightbox"><img src="uploads/books/61.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Ensiklopedi Fikih Indonesia: Pernikahan oleh Ahmad Sarwat L.c, M.A</h4>
                      <p className="ingredients">Ahmad Sarwat L.c, M.A</p>
                      <p className="price">193500</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-2.png" className="glightbox"><img src="uploads/books/62.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Ensiklopedia Sains</h4>
                      <p className="ingredients">Usborne</p>
                      <p className="price">398000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-3.png" className="glightbox"><img src="uploads/books/63.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>5000 Tahun Ensiklopedia Tionghoa 1</h4>
                      <p className="ingredients">Christine dkk.</p>
                      <p className="price">90000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-4.png" className="glightbox"><img src="uploads/books/64.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Ensiklopedia Junior Alam Sekitar</h4>
                      <p className="ingredients">Emilie Beaumont</p>
                      <p className="price">98000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-5.png" className="glightbox"><img src="uploads/books/65.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Ensiklopedia Tubuh Manusia Ed. 2</h4>
                      <p className="ingredients">Steve Parker</p>
                      <p className="price">780000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-6.png" className="glightbox"><img src="uploads/books/66.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Ensiklopedia Sejarah Dunia</h4>
                      <p className="ingredients">Usborne</p>
                      <p className="price">398000</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                  </div>
                </div>
                {/* <!-- End Breakfast Menu Content --> */}


                <div className="tab-pane fade" id="panduan">

                  <div className="tab-header text-center">
                    <p>Menu</p>
                    <h3>Panduan</h3>
                  </div>

                  <div className="row gy-5">

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-2.png" className="glightbox"><img src="uploads/books/81.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Panduan Lengkap Menulis Pengalaman Pribadi Menjadi Buku Memoar Atau Autobiografi</h4>
                      <p className="ingredients">A Wan Bong</p>
                      <p className="price">25474</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-3.png" className="glightbox"><img src="uploads/books/82.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Panduan Lengkap Menulis Pengalaman Pribadi Menjadi Buku Memoar Atau Autobiografi</h4>
                      <p className="ingredients">A Wan Bong</p>
                      <p className="price">25474</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-4.png" className="glightbox"><img src="uploads/books/83.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Buku Panduan Belajar Bahasa Mandarin</h4>
                      <p className="ingredients">Yunita Setiawati Carsim</p>
                      <p className="price">24500</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-5.png" className="glightbox"><img src="uploads/books/84.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Buku Panduan Simpan, Pinjam & Pembiayaan Model MBI Syariah</h4>
                      <p className="ingredients">Kamaruddin Batubara, SE, ME</p>
                      <p className="price">56900</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-6.png" className="glightbox"><img src="uploads/books/85.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Buku Panduan Export & Import</h4>
                      <p className="ingredients">Ifat Fauziah</p>
                      <p className="price">40700</p>
                    </div>
                    {/* <!-- Menu Item --> */}

                    <div className="col-lg-4 menu-item">
                      <a href="Yummy/img/menu/menu-item-1.png" className="glightbox"><img src="uploads/books/86.jpg"
                          className="menu-img img-fluid" alt="" /></a>
                      <h4>Buku Panduan Shalat Doa & Dzikir</h4>
                      <p className="ingredients">Ust. A Solihin As Suhaili</p>
                      <p className="price">45700</p>
                    </div>
                    {/* <!-- Menu Item --> */}


                  </div>
                </div>
                {/* <!-- End Dinner Menu Content --> */}
              </div>

            </div>
          </section>
          {/* <!-- End Menu Section --> */}

          {/* <!-- ======= Testimonials Section ======= --> */}
          <section id="testimonials" className="testimonials section-bg">
            <div className="container" data-aos="fade-up">

              <div className="section-header">
                <h2>Testimonials</h2>
                <p>What Are They <span>Saying About Us</span></p>
              </div>

              <div className="slides-1 swiper" data-aos="fade-up" data-aos-delay="100">
                <div className="swiper-wrapper">

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                          <div className="testimonial-content">
                            <p>
                              <i className="bi bi-quote quote-icon-left"></i>
                              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.
                              Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                              <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <h3>Saul Goodman</h3>
                            <h4>Ceo &amp; Founder</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 text-center">
                          <img src="Yummy/img/testimonials/testimonials-1.jpg" className="img-fluid testimonial-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End testimonial item --> */}

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                          <div className="testimonial-content">
                            <p>
                              <i className="bi bi-quote quote-icon-left"></i>
                              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram
                              malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                              <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <h3>Sara Wilsson</h3>
                            <h4>Designer</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 text-center">
                          <img src="Yummy/img/testimonials/testimonials-2.jpg" className="img-fluid testimonial-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End testimonial item --> */}

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                          <div className="testimonial-content">
                            <p>
                              <i className="bi bi-quote quote-icon-left"></i>
                              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis
                              minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                              <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 text-center">
                          <img src="Yummy/img/testimonials/testimonials-3.jpg" className="img-fluid testimonial-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End testimonial item --> */}

                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="row gy-4 justify-content-center">
                        <div className="col-lg-6">
                          <div className="testimonial-content">
                            <p>
                              <i className="bi bi-quote quote-icon-left"></i>
                              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim
                              culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum
                              quid.
                              <i className="bi bi-quote quote-icon-right"></i>
                            </p>
                            <h3>John Larson</h3>
                            <h4>Entrepreneur</h4>
                            <div className="stars">
                              <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-2 text-center">
                          <img src="Yummy/img/testimonials/testimonials-4.jpg" className="img-fluid testimonial-img" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End testimonial item --> */}

                </div>
                <div className="swiper-pagination"></div>
              </div>

            </div>
          </section>
          {/* <!-- End Testimonials Section --> */}

          {/* <!-- ======= Chefs Section ======= --> */}
          <section id="chefs" className="chefs section-bg">
            <div className="container" data-aos="fade-up">

              <div className="section-header">
                <h2>Developer Contributor</h2>
                <p>Team<span> Developer</span> Narasi Book Store</p>
              </div>

              <div className="row gy-4">

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                  <div className="chef-member">
                    <div className="member-img">
                      <img src="NiceAdmin/img/rifky.jpg" className="img-fluid" alt="" />
                      <div className="social">
                        <a href="/#"><i className="bi bi-twitter"></i></a>
                        <a href="/#"><i className="bi bi-facebook"></i></a>
                        <a href="/#"><i className="bi bi-instagram"></i></a>
                        <a href="/#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>


                    <div className="member-info">
                      <h4>Rifky Maulana</h4>
                      <span>Mahasiswa S1 Informatika</span>
                      <p>Belajar sepanjang hayat.</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Chefs Member --> */}

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                  <div className="chef-member">
                    <div className="member-img">
                      <img src="NiceAdmin/img/idham.jpeg" className="img-fluid" alt="" />
                      <div className="social">
                        <a href="/#"><i className="bi bi-twitter"></i></a>
                        <a href="/#"><i className="bi bi-facebook"></i></a>
                        <a href="/#"><i className="bi bi-instagram"></i></a>
                        <a href="/#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>


                    <div className="member-info">
                      <h4>Mohamad Idham Bahri</h4>
                      <span>D4 Sarjana Terapan Teknik Informatika</span>
                      <p>Selalu Optimis</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Chefs Member --> */}

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                  <div className="chef-member">
                    <div className="member-img">
                      <img src="NiceAdmin/img/subagia.jpeg" className="img-fluid" alt="" />
                      <div className="social">
                        <a href="/#"><i className="bi bi-twitter"></i></a>
                        <a href="/#"><i className="bi bi-facebook"></i></a>
                        <a href="/#"><i className="bi bi-instagram"></i></a>
                        <a href="/#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>


                    <div className="member-info">
                      <h4>Oki Nurul Abada</h4>
                      <span>S1 Informatika</span>
                      <p>Jangan Lupa Makan.</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Chefs Member --> */}
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                  <div className="chef-member">
                    <div className="member-img">
                      <img src="NiceAdmin/img/lia.jpeg" className="img-fluid" alt="" />
                      <div className="social">
                        <a href="/#"><i className="bi bi-twitter"></i></a>
                        <a href="/#"><i className="bi bi-facebook"></i></a>
                        <a href="/#"><i className="bi bi-instagram"></i></a>
                        <a href="/#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>


                    <div className="member-info">
                      <h4>Lia Apriliani</h4>
                      <span>S1 Administrasi publik</span>
                      <p>Tidur is my life.</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
                  <div className="chef-member">
                    <div className="member-img">
                      <img src="NiceAdmin/img/riska.jpeg" className="img-fluid" alt="" />
                      <div className="social">
                        <a href="/#"><i className="bi bi-twitter"></i></a>
                        <a href="/#"><i className="bi bi-facebook"></i></a>
                        <a href="/#"><i className="bi bi-instagram"></i></a>
                        <a href="/#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>


                    <div className="member-info">
                      <h4>Riska Pauziah</h4>
                      <span>S1 Informatika</span>
                      <p>Optimis</p>
                      <p></p>
                    </div>
                  </div>
                </div>

                

              </div>             
            </div>
          </section>
          {/* <!-- End Chefs Section --> */}

          {/* <!-- ======= Contact Section ======= --> */}
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

              <div className="section-header">
                <h2>Contact</h2>
                <p>Need Help? <span>Contact Us</span></p>
              </div>

              <div className="mb-3">
                <iframe title='maps' style={{border: '0', width: '100%', height: '350px'}}
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameBorder="0" allowFullScreen></iframe>
              </div>
              {/* <!-- End Google Maps --> */}

              <div className="row gy-4">

                <div className="col-md-6">
                  <div className="info-item  d-flex align-items-center">
                    <i className="icon bi bi-map flex-shrink-0"></i>
                    <div>
                      <h3>Our Address</h3>
                      <p>Jalan Sudirman, Jakarta Selatan</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="col-md-6">
                  <div className="info-item d-flex align-items-center">
                    <i className="icon bi bi-envelope flex-shrink-0"></i>
                    <div>
                      <h3>Email Us</h3>
                      <p>narasibookstore@gmail.com</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="col-md-6">
                  <div className="info-item  d-flex align-items-center">
                    <i className="icon bi bi-telephone flex-shrink-0"></i>
                    <div>
                      <h3>Call Us</h3>
                      <p>+1 5589 55488 55</p>
                    </div>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

                <div className="col-md-6">
                  <div className="info-item  d-flex align-items-center">
                    <i className="icon bi bi-share flex-shrink-0"></i>
                    <div>
                      <h3>Opening Hours</h3>
                      <div><strong>Mon-Sat:</strong> 11AM - 23PM;
                        <strong>Sunday:</strong> Closed
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Info Item --> */}

              </div>

              <form action="forms/contact.php" method="post" className="php-email-form p-3 p-md-4">
                <div className="row">
                  <div className="col-xl-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-xl-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Kirim Pesan</button></div>
              </form>
              {/* <!--End Contact Form --> */}

            </div>
          </section>
          {/* <!-- End Contact Section --> */}

        </main>
        {/* <!-- End #main --> */}

        {/* <!-- ======= Footer ======= --> */}
        <footer className="footer-yummy">

          <div className="container">
            <div className="row gy-3">
              <div className="col-lg-3 col-md-6 d-flex">
                <i className="bi bi-geo-alt icon"></i>
                <div>
                  <h4>Address</h4>
                  <p>
                    Jalan Sudirman <br/>
                    Jakarta Selatan<br/>
                    
                  </p>
                </div>

              </div>

              <div className="col-lg-3 col-md-6 footer-links d-flex">
                <i className="bi bi-telephone icon"></i>
                <div>
                  <h4>Reservations</h4>
                  <p>
                    <strong>Phone:</strong> +1 5589 55488 55<br/>
                    <strong>Email:</strong> narasibookstore@gmail.com<br/>
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-links d-flex">
                <i className="bi bi-clock icon"></i>
                <div>
                  <h4>Opening Hours</h4>
                  <p>
                    <strong>Mon-Sat: 11AM</strong> - 23PM<br/>
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Follow Us</h4>
                <div className="social-links d-flex">
                  <a href="/#" className="twitter"><i className="bi bi-twitter"></i></a>
                  <a href="/#" className="facebook"><i className="bi bi-facebook"></i></a>
                  <a href="/#" className="instagram"><i className="bi bi-instagram"></i></a>
                  <a href="/#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>

            </div>
          </div>

          <div className="container">
            <div className="copyright">
              &copy; Copyright <strong><span>Narasi Book Store</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/ --> */}
              Designed by <a href="https://bootstrapmade.com/">Narasi Book Store</a>
            </div>
          </div>

        </footer>
        {/* <!-- End Footer --> */}

        <a href="/#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

        {/* <div id="preloader"></div> */}
      </div>
    </React.Fragment>
  );
}

export default LandingPage;