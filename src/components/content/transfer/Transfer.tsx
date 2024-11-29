import Accordion from 'react-bootstrap/Accordion';
import Table from '../../custom/Table';
import HeaderTitle from '../../custom/HeaderTitle';
import { useEffect, useState } from 'react';
import SelectForm from '../../core/SelectForm';
import ModalLista from '../../custom/ModalLista';
import TableTransfer from '../../custom/TableTransfer';

const Transfer = () => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>(() => {
    const storedLogs = localStorage.getItem('logMessages-scanner');
    return storedLogs ? JSON.parse(storedLogs) : [];
  });
  const [startProcess, setStartProcess] = useState(false);
  const [activeAcordion, setActiveAcordion] = useState("1");
  const [showAcordion, setShowAcordion] = useState(localStorage.getItem("show-acordion-transfer") == null ? "none": "");
  const [menuHeader, setMenuHeader] = useState("1");

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ headerTitle: '', title: '', content: '' });

  const handleShowModal = (row: { reparticion: string; nombre: string; Habilitado: boolean; TotalRegistros:number; RegistrosActualizados:string; }, tipoModal: string) => {
    if(tipoModal == "0"){
      setModalData({
        headerTitle: `Errores de ${row.nombre}`,
        title: `Información de ${row.reparticion}`,
        content: `Total de registros: ${row.TotalRegistros}`
      });
      setShowModal(true);
    }else{
      
      setModalData({
        headerTitle: `Errores de ${row.nombre}`,
        title: `Información de ${row.reparticion}`,
        content: `Total de registros: ${row.TotalRegistros}`
      });
      setShowModal(true);
    }
    
  };
  const dataFilter = [
    {text: "Selecciones proceso y mes", value:"1"},
    {text: "1234- Julio", value:"2"}   
  ]


  useEffect(() => {
   
    if(startProcess){
      
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
      localStorage.setItem('logMessages-transfer', JSON.stringify(logMessages)); 
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
    }    
  }, [startProcess]);

  const rows = [
    { reparticion: 'Repartición 1', nombre: 'Repartición 1', Habilitado: true, TotalRegistros: 10, RegistrosActualizados: "10/30/1222/3000" },
    { reparticion: 'Repartición 1', nombre: 'Repartición 1', Habilitado: true, TotalRegistros: 10, RegistrosActualizados: "10/30/1222/3000" },
    { reparticion: 'Repartición 1', nombre: 'Repartición 1', Habilitado: true, TotalRegistros: 10, RegistrosActualizados: "10/30/1222/3000" },
    { reparticion: 'Repartición 1', nombre: 'Repartición 1', Habilitado: true, TotalRegistros: 10, RegistrosActualizados: "10/30/1222/3000" },
    { reparticion: 'Repartición 1', nombre: 'Repartición 1', Habilitado: true, TotalRegistros: 10, RegistrosActualizados: "10/30/1222/3000" },
    { reparticion: 'Repartición 1', nombre: 'Repartición 1', Habilitado: true, TotalRegistros: 10, RegistrosActualizados: "10/30/1222/3000" },
    { reparticion: 'Repartición 1', nombre: 'Repartición 1', Habilitado: true, TotalRegistros: 10, RegistrosActualizados: "10/30/1222/3000" },
    { reparticion: 'Repartición 1', nombre: 'Repartición 1', Habilitado: true, TotalRegistros: 10, RegistrosActualizados: "10/30/1222/3000" },
    { reparticion: 'Repartición 1', nombre: 'Repartición 1', Habilitado: true, TotalRegistros: 10, RegistrosActualizados: "10/30/1222/3000" },
    { reparticion: 'Repartición 1', nombre: 'Repartición 1', Habilitado: true, TotalRegistros: 10, RegistrosActualizados: "10/30/1222/3000" },
  
  ];

  const contentModal = [
    { textError: "3. No data este servicio no tiene personal sujeto al codigo del trabajo;"},
    { textError: "3. No data este servicio no tiene personal sujeto al codigo del trabajo;"},
    { textError: "3. No data este servicio no tiene personal sujeto al codigo del trabajo;"},
    { textError: "3. No data este servicio no tiene personal sujeto al codigo del trabajo;"},
    { textError: "3. No data este servicio no tiene personal sujeto al codigo del trabajo;"}
  ]

  const HeaderTable = [
    { text: "Repartición"},
    { text: "Nombre"},
    { text: "Habilitado"},
    { text: "Total Registros"},
    { text: "Total Actualizados (N/U/A/EX)"},
    { text: "Acción"},
  ]

  
  useEffect(() => {
    if (progress >= 105) {
      setMenuHeader("1");
      setStartProcess(false);
      setShowAcordion("");
      setActiveAcordion("1");
      setProgress(0);

    }
  }, [progress]);

  const handleProccess = () =>{
    setMenuHeader("2");
    setStartProcess(true);
    setShowAcordion("");
    setActiveAcordion("0")
    setLogs([]);
    localStorage.removeItem('logMessages-transfer')
    localStorage.setItem('show-acordion-transfer',showAcordion);
    
   

  }

  const handleSelect = (key:any) => {
    // Si el panel ya está abierto y se hace clic de nuevo, colapsarlo
    setActiveAcordion(activeAcordion === key ? "" : key);
  };
  return (
    <>
     <HeaderTitle title={'Proceso Data Transfer'} textBtn={'Iniciar Proceso'} menu={menuHeader} now={progress} onClick={handleProccess} />
     <Accordion defaultActiveKey={"1"} activeKey={activeAcordion} onSelect={handleSelect}>
        <Accordion.Item eventKey="0" style={{display:showAcordion}}>
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
          <Accordion.Header>Registros Transferidos EAP</Accordion.Header>
          <Accordion.Body>
            <SelectForm data={dataFilter}/>
            <TableTransfer rows={rows} header={HeaderTable} handleShowModal={handleShowModal} />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Registros Tranferidos PEP</Accordion.Header>
          <Accordion.Body>
            <SelectForm data={dataFilter}/>
            <TableTransfer rows={rows} header={HeaderTable} handleShowModal={handleShowModal} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <ModalLista
        headerTitle={modalData.headerTitle}
        title={modalData.title}
        content={contentModal}
        onHide={() => setShowModal(false)}
        show={showModal}
        icon=''
      />
    </>
  )
}

export default Transfer
