import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/js/dist/dropdown';
import SideBar from './components/menu/SideBar';
import Content from './components/content/Content';
import NavBar from './components/menu/NavBar';

function App() {
  return (
    <>
     
     <div className='container-fluid'>
      <NavBar />
      <div className="row"> 
          <SideBar />       
          <Content />
        </div>
     </div>
     
    </>
  );
}

export default App;
