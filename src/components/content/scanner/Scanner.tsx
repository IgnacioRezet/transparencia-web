import React, { useState } from 'react';
import Check from '../../../assets/img/check.png';
import UnCheck from '../../../assets/img/uncheck.png';
import Info from '../../../assets/img/info.png';
import Table from '../../custom/Table';

interface ScannerInput {
  setScannerProcess: any;
} 

const Scanner = (props: ScannerInput) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const rows = [
    { reparticion: 'Repartición 1', nombre: 'Repartición 1', cantidad: 3000 },
    { reparticion: 'Repartición 2', nombre: 'Repartición 2', cantidad: 1500 },
    { reparticion: 'Repartición 3', nombre: 'Repartición 3', cantidad: 1000 },
    { reparticion: 'Repartición 4', nombre: 'Repartición 4', cantidad: 2000 },
    { reparticion: 'Repartición 5', nombre: 'Repartición 5', cantidad: 2500 },
    { reparticion: 'Repartición 6', nombre: 'Repartición 6', cantidad: 5000 },
    { reparticion: 'Repartición 7', nombre: 'Repartición 7', cantidad: 4000 },
    { reparticion: 'Repartición 8', nombre: 'Repartición 8', cantidad: 3500 },
    { reparticion: 'Repartición 9', nombre: 'Repartición 9', cantidad: 4500 },
  ];

  const filteredRows = rows.filter((row) =>
    row.reparticion.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRows = filteredRows.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);
  const paginatedRows = filteredRows.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSearch = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleProccess = () =>{
    localStorage.setItem("scanner-2", "true");
    props.setScannerProcess(true);

  }

  return (
    <>
      <div className="row mb-3">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 d-flex flex-direction-row justify-content-between">
          <h1>Proceso Scanner</h1>
          <button className="btn btn-primary" onClick={handleProccess}>Iniciar Proceso</button>
        </div>
      </div>
       <div className='row py-5'>
          <div className='col-md-6 col-lg-6 col-xs-6 col-sm-6'>
            <select name="cbFiltro" id="cbFiltro" className="form-select" aria-label="Default select example">
              <option value="0">Seleccione proceso y mes...</option>
              <option value="0">123455 - Julio</option>
              <option value="0">345672 - Agosto</option>
              <option value="0">373829 - Septiembre</option>
              <option value="0">239403 - Octubre</option>
              <option value="0">394983 - Noviembre</option>              
            </select>
          </div>
        </div>
      <div className="row mb-4 d-flex justify-content-end">
        <div className="col-md-2 col-lg-2 col-xs-2 col-sm-2 ">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar repartición..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Repartición</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Contratos</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {paginatedRows.map((row, index) => (
                <tr key={index}>
                  <td>{row.reparticion}</td>
                  <td>{row.nombre}</td>
                  <td>{row.cantidad}</td>
                  <td>
                    <div className="d-flex gap-2">
                      <img src={Check} width="30" alt="aprobado" />
                      <img src={UnCheck} width="30" alt="no aprobado" />
                      <img src={Info} width="30" alt="info" />
                      <img src={Check} width="30" alt="aprobado" />
                    </div>
                  </td>
                  <td>Acciones</td>
                </tr>
              ))}
            </tbody>
          </table>
         
          <nav>
            <ul className="pagination justify-content-end">
              <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Anterior
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  className={`page-item ${
                    currentPage === i + 1 ? 'active' : ''
                  }`}
                  key={i}
                >
                  <button
                    className="page-link"
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages && 'disabled'
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Scanner;
