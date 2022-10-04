// Importing Libraries
import React, { useEffect, useState } from 'react';
import axios from "axios";
//import hook history dan params dari react router dom
import { useHistory, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditMasterBooks() {
  const navigate = useNavigate();

  // State to store to API
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  // State to store uploaded file
  const [file, setFile] = useState();
  // Inisiasi State Book
  const [books, setBooks] = useState([]);
  let urlEmpty = '';

  // get Data from API
  useEffect(() => {
    axios.get("https://kawahedukasibackend.herokuapp.com/content/data/narasi")
    .then(res => {
        setBooks(res.data)
    })
    .catch(error => {
        console.log("Error:", error);
    })
  }, []);


  // get ID from parameter URL
  const { id } = useParams();
  // get data from API
  const name = books.filter(book => book.id == id).map(filterData => filterData.name)
  const description1 = books.filter(book => book.id == id).map(filterData => filterData.description1)
  const description2 = books.filter(book => book.id == id).map(filterData => filterData.description2)
  const description3 = books.filter(book => book.id == id).map(filterData => filterData.description3)
  const description4 = books.filter(book => book.id == id).map(filterData => filterData.description4)
  const description5 = books.filter(book => book.id == id).map(filterData => filterData.description5)
  const description6 = books.filter(book => book.id == id).map(filterData => filterData.description6)
  const image = books.filter(book => book.id == id).map(filterData => filterData.image)


  // useEffect(() => {
  //   setTitle(name);
  //   setPrice(description1);
  //   setAuthor(description2);
  //   setPublisher(description3);
  //   setYear(description4);
  //   setCategory(description5);
  //   setDescription(description6);
  //   setFile(image);
  // }, [])
  /*
   * Function handlerForm untuk mengambil value dari form 
   */
  function handlerForm(type, value) {
    switch (type) {
      case 'title':
        setTitle(value)
        break;
      case 'price':
        setPrice(value);
        break;
      case 'author':
        setAuthor(value);
        break;
      case 'publisher':
        setPublisher(value);
        break;
      case 'year':
        setYear(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'file':
        setFile(value);
        break;
      default:
        break;
    }
  }

  /*
   * Function submitLogin untuk mengirimkan method post ke API dengan body username dan password
   */
  const submitLogin = async (event) => {
    event.preventDefault()
    // get acces_token
    const access_token = localStorage.getItem('access_token');
    try {
        const res = await axios.put(`https://kawahedukasibackend.herokuapp.com/content/update/${id}`,
          {
            name: title,
            image: file,
            description1: price,
            description2: author,
            description3: publisher,
            description4: year,
            description5: category,
            description6: description,
          }, 
          // `headers` are custom headers to be sent
          {
            headers: {
            access_token: access_token,
            }
          },
        );

        if (res.status === 201) {
          navigate('/master-books');
        }

        console.log(res);

    } catch (err) {
        console.log(err);
        if (err.response.status === 401) {
          navigate('/master-books');
        } else if (err.response.status === 0) {
          window.message = "Data Buku Gagal Dibuat";
          navigate('/master-books');
        }
    }
  }


  return (
    <React.Fragment>
      <div className="pagetitle">
        <h1>Edit Data Buku</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href={urlEmpty}>Home</a></li>
            <li className="breadcrumb-item active">Edit Data Buku</li>
          </ol>
        </nav>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-12">

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Edit Data Buku</h5>


                <form onSubmit={(event) => submitLogin(event)} method="post" encType="multipart/form-data">
                  <div className="row mb-3">
                    <label for="inputText" className="col-sm-2 col-form-label">Judul</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={name}
                        onChange={(event) => handlerForm('title', event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label for="inputNumber" className="col-sm-2 col-form-label">Harga</label>
                    <div className="col-sm-10">
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={description1}
                        onChange={(event) => handlerForm('price', event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label for="inputText" className="col-sm-2 col-form-label">Penulis</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={description2}
                        onChange={(event) => handlerForm('author', event.target.value)}
                      />
                    </div>
                    
                  </div>

                  <div className="row mb-3">
                    <label for="inputText" className="col-sm-2 col-form-label">Penerbit</label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={description3}
                        onChange={(event) => handlerForm('publisher', event.target.value)}
                      />
                    </div>
                  </div>
    
                  <div className="row mb-3">
                    <label for="inputNumber" className="col-sm-2 col-form-label">Tahun</label>
                    <div className="col-sm-10">
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={description4}
                        onChange={(event) => handlerForm('year', event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Kategori</label>
                    <div className="col-sm-10">
                      <select
                          className="form-select"
                          aria-label="Default select example"
                          onChange={(event) => handlerForm('category', event.target.value)}
                          defaultValue={description5}
                        >
                          <option value="" disabled >Open this select menu</option>
                          <option value="Novel">Novel</option>
                          <option value="Ensiklopedia">Ensiklopedia</option>
                          <option value="Komik">Komik</option>
                          <option value="Ilmiah">Ilmiah</option>
                          <option value="Panduan">Panduan</option>
                        </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Deskripsi</label>
                    <div className="col-sm-10">
                      <textarea
                        className="form-control"
                        style={{height: '100px'}}
                        onChange={(event) => handlerForm('description', event.target.value)}
                        defaultValue={description6}
                      ></textarea>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label for="inputNumber" className="col-sm-2 col-form-label">Gambar</label>
                    <div className="col-sm-10">
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                        onChange={(event) => handlerForm('file', event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-10">
                      <button type="submit" className="btn btn-primary">Edit</button>
                    </div>
                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>
    </React.Fragment>
  );
}

export default EditMasterBooks;