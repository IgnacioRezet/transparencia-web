
import Table from '../../custom/Table';
import HeaderTitle from '../../custom/HeaderTitle';
import SelectForm from '../../core/SelectForm';
import { useState } from 'react';
import ScannerProcess from './ScannerProcess';
import ScannerResult from './ScannerResult';


const Scanner = () => {
  const [scannerProcess, setScannerProcess] = useState(localStorage.getItem("scanner-2") == null ? "": true);
  
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
console.log(scannerProcess)
  const dataFilter = [
    {text: "Selecciones proceso y mes", value:"1"},
    {text: "1234- Julio", value:"2"}   
  ]

  const handleProccess = () =>{
    localStorage.setItem("scanner-2", "1");
    setScannerProcess("1");

  }

  return (
    <>
      {scannerProcess == "" ?(
        <>
          <HeaderTitle title={'Proceso Scanner'} textBtn={'Iniciar Proceso'}  onClick={handleProccess} menu={'1'} now={0}/>
          <SelectForm data={dataFilter}/>
          <Table rows={rows}/>
        </>         
      ):(
        scannerProcess == "1" ? (
          <ScannerProcess setScannerProcess={setScannerProcess}/>
        ):(
          <ScannerResult/>
        )
      )}
       
    </>
  );
};

export default Scanner;
