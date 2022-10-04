// Importing Libraries
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Function CustomLoader
function CustomLoader() {
  return(
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

function IndexMasterBooks() {
  const navigate = useNavigate();
  // Inisiasi State Book
  const [books, setBooks] = useState([]);

  // get data From API
  function getData() {
    axios.get("https://kawahedukasibackend.herokuapp.com/content/data/narasi")
    .then(res => {
        setBooks(res.data)
    })
    .catch(error => {
        console.log("Error:", error);
    })
  }

  /*
   * Function submitLogin untuk mengirimkan method post ke API dengan body username dan password
   */
  const deleteContent = async (event, id) => {
    event.preventDefault()
    // get acces_token
    const access_token = localStorage.getItem('access_token');
    try {
        const res = await axios.delete("https://kawahedukasibackend.herokuapp.com/content/delete/" + id,
          // `headers` are custom headers to be sent
          {
            headers: {
            access_token: access_token,
            }
          },
        )

        if (res.status === 200) {
          navigate('/master-books');
        }

    } catch (err) {
        console.log(err);
        if (err.response.status === 401) {
          console.log("gagal 401")

        } else if (err.response.status === 0) {

        }
        console.log("gagl");
    }
    getData();
  }

  // Inisiasi Kolom Tabel
  const columns = [
    {
      name: 'Actions',
      selector: row => 
        <React.Fragment>
          <div className="container">
            <a href={window.location.origin + '/edit-books/' + row.id}><button type="button" className="btn btn-success my-1"><i className="bx bxs-edit"></i></button></a>
          </div>
          <div className='container'>
            <button type="button" className="btn btn-danger my-1" onClick={(event) => deleteContent(event, row.id)}><i className="bi bi-trash"></i></button>
          </div>
        </React.Fragment>
    },
    {
      name: 'Image',
      selector: row => <img width="100px" alt={row.name} src={ '/uploads/books/' + row.image} style={{ margin: "10px 0" }}/>
    },
    {
        name: 'Title',
        selector: row => row.name,
    },
    {
      name: 'Price',
      selector: row => row.description1,
    },
    {
        name: 'Author',
        selector: row => row.description2,
    },
    {
      name: 'Publisher',
      selector: row => row.description3,
    },
    {
      name: 'Year',
      selector: row => row.description4,
    },
    {
      name: 'Category',
      selector: row => row.description5,
    },
    {
      name: 'Desciption',
      selector: row => row.description6,
    },

  ];

  // Inisiasi State Loader
  const [pending, setPending] = React.useState(true);
	const [rows, setRows] = React.useState([]);

  // Function Loader
	useEffect(() => {
		const timeout = setTimeout(() => {
			setRows(books);
			setPending(false);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [books]);

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

  return (
    <React.Fragment>
      <div className="pagetitle">
        <h1>Data Buku</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/#">Home</a></li>
            <li className="breadcrumb-item active">Data Buku</li>
          </ol>
        </nav>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-12">

            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Data Buku</h5>

                <a href={window.location.origin + '/create-books'}>
                  <button type="button" className="btn btn-primary mb-3"><i className="bx bx-plus"></i> Buat Data Buku</button>
                </a>

                <DataTable
                  direction="auto"
                  fixedHeader
                  fixedHeaderScrollHeight="310px"
                  highlightOnHover
                  pagination
                  responsive
                  striped
                  subHeaderAlign="right"
                  subHeaderWrap
                  columns={columns}
                  data={rows}
                  progressPending={pending}
                  progressComponent={<CustomLoader />}
                />

              </div>
            </div>

          </div>
        </div>
      </section>
  </React.Fragment>
  );
}

export default IndexMasterBooks;