import Check from '../../assets/img/check.png';
import UnCheck from '../../assets/img/uncheck.png';
import Info from '../../assets/img/info.png';
import Eye from '../../assets/img/eye.png'
import { useState } from 'react';

interface TableInputs{
    rows: { reparticion: string; nombre: string; cantidad: number; }[];
  
}
const Table = (props:TableInputs) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

    const filteredRows = props.rows.filter((row) =>
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

  return (
    <>
    <div className="row mb-4 d-flex justify-content-end">
        <div className="col-md-3 col-lg-3 col-xs-3 col-sm-3 ">
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
                  <td><a href="#">{row.cantidad}</a></td>
                  <td>
                    <div className="d-flex gap-2">
                      <img title='Contrata' src={Check} width="30" alt="aprobado" />
                      <img title='Planta' src={UnCheck} width="30" alt="no aprobado" />
                      <img title='Honorarios' src={Info} width="30" alt="info" />
                      <img title='Codigo del trabajo' src={Check} width="30" alt="aprobado" />
                    </div>
                  </td>
                  <td>
                    <a href="#"><img src={Eye} title='Ver Registros' width="30" alt="ojo" /></a>
                  </td>
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
  )
}

export default Table
