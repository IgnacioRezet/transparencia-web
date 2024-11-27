import Accordion from 'react-bootstrap/Accordion';
import Table from '../../custom/Table';
import HeaderTitle from '../../custom/HeaderTitle';
import { useEffect, useState } from 'react';

interface ScannerProcessInput {
  setScannerProcess: any;
}

const ScannerProcess = (props: ScannerProcessInput) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // Simulación del progreso y logs
    const logMessages = [
      "Iniciando proceso...",
      "Conectando con el servidor...",
      "Cargando datos de 'Repartición Código AA001 / Nombre: PRESIDENCIA DE LA REPUBLICA'",
      "La aplicación se pausara al ejecutar 55 request.",
      "Scaneo de AA001-Personal a Contrata",
      "Elemento con keyword 'Personal a Contrata' cliqueado",
      "No se ha encontrado boton 'Descarga csv'. Error en GetLastTabName: Timed out after 0.5 seconds,",
      "Elemento: 2024;2023;2022;2021;2020;2019;2018;Historico",
      "Elemento con Keyword '2024' cliqueado",
      "No se han encontrado boton 'Descarga'. Error en GetlastTabName: Timed out after o.5 seconds,",
      "Elementos: Septiembre;Agosto;Julio;Junio;Mayo;Abril;Marzo;Febrero;Enero",
      "Elemento Keyword 'Septiembre' cliqueado",
      "Archivo correctamente descargado 'C:/User/Downloads'",
      "Procesando datos...",
      "Guardando resultados...",
      "Finalizando proceso...",
    ];

    let logIndex = 0;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + 5; // Incrementa el progreso
        if (nextProgress >= 105) {
          clearInterval(interval);
          setLogs((prevLogs) => [...prevLogs, "Proceso completado."]);
          return 105;
        }
        return nextProgress;
      });

      // Agregar nuevos logs
      if (logIndex < logMessages.length) {
        setLogs((prevLogs) => [...prevLogs, logMessages[logIndex]]);
        logIndex++;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 105) {
      localStorage.removeItem("scanner-2");
      props.setScannerProcess("");
    }
  }, [progress]);

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

  return (
    <>
      <HeaderTitle title={'Proceso Scanner'} textBtn={'Iniciar Proceso'} menu={'2'} now={progress} />
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Detalle del Proceso</Accordion.Header>
          <Accordion.Body>
            <div className='container-fluid'>
              <div className="logs-container" style={{ maxHeight: '600px', overflowY: 'auto', backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
                {logs.map((log, index) => (
                  <div key={index} style={{ fontFamily: 'monospace', color: '#333' }}>{log}</div>
                ))}
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Registros del Proceso</Accordion.Header>
          <Accordion.Body>
            <Table rows={rows} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default ScannerProcess;
