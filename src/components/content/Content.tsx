import { useState } from 'react';
import Config from './configuracion/Config';
import DashBoard from './dashboard/DashBoard';
import Scanner from './scanner/Scanner';
import Transfer from './transfer/Transfer';
import Uploader from './uploader/Uploader';
import ScannerProcess from './scanner/ScannerProcess';

interface ContentInput {
  indexMenu: number;
  setSelectedMenu: any;
}

const Content = (props: ContentInput) => {
  const [scannerProcess, setScannerProcess] = useState(localStorage.getItem("scanner-2") == null ? false: true);
  const [uploaderProcess, setUploaderProcess] = useState(false);
  const [transferProcess, setTransferProcess] = useState(false);

  const ContentMenu = () => {
    switch (props.indexMenu) {
      case 0:
        return <DashBoard/>
      case 1:
        if(!scannerProcess){
          return <Scanner setScannerProcess={setScannerProcess} />;
        }else{
          return <ScannerProcess/>
        }
        
      case 2:
        return <Uploader />;
      case 3:
        return <Transfer />;
      case 4:
        return <Config />;
      default:
        return null; // Asegúrate de devolver algo (puede ser null) en el caso por defecto
    }
  };

  return (
    <div className="col p-4">
      {ContentMenu()}
    </div>
  );
};

export default Content;
