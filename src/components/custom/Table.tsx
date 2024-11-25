import Check from '../../../assets/img/check.png';
import UnCheck from '../../../assets/img/uncheck.png';
import Info from '../../../assets/img/info.png';

interface TableInputs{
    rows: { reparticion: string; nombre: string; cantidad: number; }[];
    searchTerm: string;
    currentPage: number;
    setCurrentPage: any;
}
const Table = (props:TableInputs) => {
    
    const rowsPerPage = 10;
    const filteredRows = props.rows.filter((row) =>
        row.reparticion.toLowerCase().includes(props.searchTerm.toLowerCase())
      );
    
      const totalRows = filteredRows.length;
      const totalPages = Math.ceil(totalRows / rowsPerPage);
      const paginatedRows = filteredRows.slice(
        (props.currentPage - 1) * rowsPerPage,
        props.currentPage * rowsPerPage
      );

  return (
    <>
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
              <li className={`page-item ${props.currentPage === 1 && 'disabled'}`}>
                <button
                  className="page-link"
                  onClick={() => props.setCurrentPage(props.currentPage - 1)}
                >
                  Anterior
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => (
                <li
                  className={`page-item ${
                    props.currentPage === i + 1 ? 'active' : ''
                  }`}
                  key={i}
                >
                  <button
                    className="page-link"
                    onClick={() => props.setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  props.currentPage === totalPages && 'disabled'
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => props.setCurrentPage(props.currentPage + 1)}
                >
                  Siguiente
                </button>
              </li>
            </ul>
          </nav>
    </>
  )
}

export default Table
