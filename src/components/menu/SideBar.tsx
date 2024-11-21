
import '../../assets/css/SideBar.css'
const SideBar = () => {
    
  
  return (
    <>
        <div className="col-md-2">
            <div className="row">
                <div className="bg-dark col-auto col-md-12 min-vh-100 d-flex justify-content-between flex-column ">
                    <div>
                        <a className="text-decoration-none text-white d-sm-inline d-flex align-itemcenter ms-3 mt-3" href="">
                            <div className='d-flex flex-row gap-2'>
                                <img src="https://handel.cl/wp-content/uploads/2021/12/cropped-circle-logo-32x32.png"  alt="img transparencia" /> 
                                <span className="ms-1 py-2 py-sm-0 fs-4 d-none d-sm-inline">EAPTransparencia</span>    
                            </div>                        
                           
                        </a>
                        <hr className="text-secondary d-none d-sm-block"/>
                        <ul className="nav nav-pills flex-column mt-3 mt-sm-0">
                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                <i className="fs-4 bi bi-speedometer2"></i>
                                <span className="ms-3 d-none d-sm-inline">Dashboard</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                    <i className="bi bi-download"></i>
                                    <span className="ms-3 d-none d-sm-inline">Scanner</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                    <i className="bi bi-upload"></i>
                                    <span className="ms-3 d-none d-sm-inline">Data Uploader</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                    <i className="bi bi-send"></i>
                                    <span className="ms-3 d-none d-sm-inline">Data Transfer</span>
                                </a>
                            </li>
                            <li className="nav-item text-white fs-4 my-1 py-2 py-sm-0">
                                <a href="#" className="nav-link text-white fs-5" aria-current="page">
                                    <i className="bi bi-gear"></i>
                                    <span className="ms-3 d-none d-sm-inline">Configuraciones</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown open">
                        <a
                            className="text-decoration-none text-white dropdown-toggle p-3"
                            type="button"
                            id="triggerId"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                           <i className="bi bi-person-circle"></i><span className="ms-2 d-none d-sm-inline">YouSaf</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="triggerId">
                            <a className="dropdown-item" href="#">
                                <span className='d-none d-sm-block'>1</span> 
                                <span className='d-none d-sm-block'>Perfil</span>
                            </a>
                            <a className="dropdown-item disabled" href="#">
                                <span className='d-none d-sm-block'>2</span> 
                                <span className='d-none d-sm-block'>Settings</span>
                            </a>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    </>
  );
};

export default SideBar;
