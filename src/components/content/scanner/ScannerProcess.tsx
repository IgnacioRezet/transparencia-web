import Accordion from 'react-bootstrap/Accordion';
import Table from '../../custom/Table';
import HeaderTitle from '../../custom/HeaderTitle';
import { useEffect, useState } from 'react';
import SelectForm from '../../core/SelectForm';
import ModalLista from '../../custom/ModalLista';


const ScannerProcess = () => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>(() => {
    const storedLogs = localStorage.getItem('logMessages-scanner');
    return storedLogs ? JSON.parse(storedLogs) : [];
  });
  const [startProcess, setStartProcess] = useState(false);
  const [activeAcordion, setActiveAcordion] = useState("1");
  const [showAcordion, setShowAcordion] = useState(localStorage.getItem("show-acordion-scanner") == null ? "none": "");
  const [menuHeader, setMenuHeader] = useState("1");

  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ headerTitle: '', title: '', content: '' });

  const handleShowModal = (row: { nombre: any; reparticion: any; cantidad: any; }, tipoModal: string) => {
    if(tipoModal == "0"){
      setModalData({
        headerTitle: `Errores de ${row.nombre}`,
        title: `Información de ${row.reparticion}`,
        content: `Total de registros: ${row.cantidad}`
      });
      setShowModal(true);
    }else{
      
      setModalData({
        headerTitle: `Errores de ${row.nombre}`,
        title: `Información de ${row.reparticion}`,
        content: `Total de registros: ${row.cantidad}`
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
      localStorage.setItem('logMessages-scanner', JSON.stringify(logMessages)); 
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

  const contentModal = [
    { textError: "3. No data este servicio no tiene personal sujeto al codigo del trabajo;"},
    { textError: "3. No data este servicio no tiene personal sujeto al codigo del trabajo;"},
    { textError: "3. No data este servicio no tiene personal sujeto al codigo del trabajo;"},
    { textError: "3. No data este servicio no tiene personal sujeto al codigo del trabajo;"},
    { textError: "3. No data este servicio no tiene personal sujeto al codigo del trabajo;"}
  ]
  
  const headerTable = [
    {text: "Repartición"},
    {text: "Nombre"},
    {text: "Cantidad"},
    {text: "Contrato"},
    {text: "Acciones"}   
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
    localStorage.removeItem('logMessages-scanner')
    localStorage.setItem('show-acordion-scanner',showAcordion);
    
   

  }

  const handleSelect = (key:any) => {
    // Si el panel ya está abierto y se hace clic de nuevo, colapsarlo
    setActiveAcordion(activeAcordion === key ? "" : key);
  };
  return (
    <>
      <HeaderTitle title={'Proceso Scanner'} textBtn={'Iniciar Proceso'} menu={menuHeader} now={progress} onClick={handleProccess} />
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
          <Accordion.Header>Registros del Proceso</Accordion.Header>
          <Accordion.Body>
            <SelectForm data={dataFilter}/>
            <Table rows={rows} handleShowModal={handleShowModal} header={headerTable} />
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
  );
};

export default ScannerProcess;
