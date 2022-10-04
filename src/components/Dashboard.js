// Importing Libararies
import React from "react";
import ReactApexChart from "react-apexcharts";

function Dashboard(){
  let urlEmpty = '';
  // Inisiasi Series
  const series= [{
    name: 'Novel',
    data: [31, 40, 28, 51, 42, 82, 56],
  }, {
    name: 'Buku Ilmiah',
    data: [11, 32, 45, 32, 34, 52, 41]
  }, {
    name: 'Komik',
    data: [15, 11, 32, 18, 9, 24, 11]
  }, {
    name: 'Ensiklopedia',
    data: [8, 10, 24, 26, 7, 30, 16]
  }, {
    name: 'Buku Panduan',
    data: [19, 14, 41, 25, 19, 29, 30]
  }];

  // Inisiasi Options
  const options = {
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false
      },
    },
    markers: {
      size: 4
    },
    colors: ['#4154f1', '#2eca6a', '#ff771d', '#aa6969', '#aa2a9f'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  };

  // Inisiasi Series 2
  const series2= [{
    name: 'Sales',
    data: [31, 40, 28, 51, 42, 82, 56],
  }, {
    name: 'Revenue',
    data: [11, 32, 45, 32, 34, 52, 41]
  }];

  // Inisiasi Options 2
  const options2 = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false
      },
    },
    markers: {
      size: 4
    },
    colors: ['#4154f1', '#2eca6a', '#ff771d'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.3,
        opacityTo: 0.4,
        stops: [0, 90, 100]
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    }
  };
  
  return(
    <React.Fragment>
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href={urlEmpty}>Home</a></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      <section className="section dashboard">
        <div className="row">
          
          <div className="col-lg-12">
            <div className="row">
              
              <div className="col-12">
                <div className="card">

                    <div className="card-body">
                      <h5 className="card-title">Report - The Books Sold<span> | Today</span></h5>

                      <div id="reportsBookChart">
                        <ReactApexChart
                          options={options}
                          series={series}
                          type="area"
                          height={350}
                        />
                      </div>

                  </div>

                </div>
              </div>

              <div className="col-12">
                <div className="card">

                    <div className="card-body">
                      <h5 className="card-title">Report - The Sells ($)<span> | Today</span></h5>
       
                      <div id="reportsChart">
                        <ReactApexChart
                          options={options2}
                          series={series2}
                          type="line"
                          height={350}
                        />
                      </div>

                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
      </React.Fragment>
  );
}

export default Dashboard;