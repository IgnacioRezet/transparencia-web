

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark d-none">
      <div>
        <a className="navbar-brand" href="#">
          <div className='d-flex flex-row gap-2'>
            <img
              src="https://handel.cl/wp-content/uploads/2021/12/cropped-circle-logo-32x32.png"
              alt="Logo"
              width="30"
              height="30"
              className="d-inline-block align-text-top"
            />
            <div> EAPTransparencia </div>
           
          </div>
          
        </a>
        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Contenido colapsable */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Scanner
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Data Uploader
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Data Transfer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Configuraciones
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
