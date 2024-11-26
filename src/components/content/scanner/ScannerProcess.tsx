import Accordion from 'react-bootstrap/Accordion';
import Table from '../../custom/Table';
import HeaderTitle from '../../custom/HeaderTitle';
import { useEffect, useState } from 'react';

interface ScannerProcessInput{
  setScannerProcess: any;
}

const ScannerProcess = (props: ScannerProcessInput) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulación del progreso
    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 1;
        if (nextProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return nextProgress;
      });
    }, 500);

    return () =>  clearInterval(interval)
  }, []);

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

  useEffect(() => {
    if(progress >= 100){
      localStorage.removeItem("scanner-2");
      props.setScannerProcess("");
    }
  },[progress])
  return (
    <>
      <HeaderTitle title={'Proceso Scanner'} textBtn={'Iniciar Proceso'} menu={'2'} now={progress} />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Detalle del Proceso</Accordion.Header>
          <Accordion.Body>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Registros del Proceso</Accordion.Header>
          <Accordion.Body>
           <Table rows={rows}/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>    
    </>
    
  );
}

export default ScannerProcess;