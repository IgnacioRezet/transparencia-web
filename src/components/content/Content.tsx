import Config from './configuracion/Config';
import DashBoard from './dashboard/DashBoard';
import Scanner from './scanner/Scanner';
import Transfer from './transfer/Transfer';
import Uploader from './uploader/Uploader';

interface ContentInput {
  indexMenu: number;
}

const Content = (props: ContentInput) => {
  const ContentMenu = () => {
    switch (props.indexMenu) {
      case 0:
        return <DashBoard/>
      case 1:
        return <Scanner />;
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
