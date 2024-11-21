import React from 'react'

const Scanner = () => {
  return (
    <>
      <div className='row'>
        <div className='col-md-12 col-sm-12 col-lg-12 col-xs-12 d-flex flex-direction-row justify-content-between'>
            <h1>Proceso Scanner</h1> 
            <button className='btn btn-primary'>Iniciar Proceso</button>
        </div>        
      </div>
      <div className='row'>
        <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12'>
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
            <tr></tr>
            </tbody>
          </table>
        </div>
      
      </div>
    </>
  )
}

export default Scanner
