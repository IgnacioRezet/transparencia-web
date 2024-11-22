import React, { useEffect, useState } from 'react';
import '../../assets/css/SideBar.css';
import Content from '../content/Content';
import SideBarItem from './SideBarItem';

const SideBar: React.FC = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
      setIsCollapsed(prevState => !prevState);
    };
    

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
        <div className='d-flex px-3'>
            <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">
                <div className='d-flex flex-row gap-2'>                
                    <img src="https://handel.cl/wp-content/uploads/2021/12/cropped-circle-logo-32x32.png"  alt="img transparencia" /> 
                    <span >EAPTransparencia</span>                
                </div>
            </a>
           
        </div>        
      </nav>  
      <div className="row" id="body-row">
        <div id="sidebar-container"  className={`sidebar-container ${isCollapsed ? 'sidebar-collapsed' : 'sidebar-expanded'} `}>

          <ul className="list-group">
            <li className={`text-white sidebar-separator-title text-muted d-flex align-items-center menu-collapsed px-3 py-2 ms-3 mt-4 ${isCollapsed ? 'd-none' : ''}`}>
            <a className="text-decoration-none text-white d-sm-inline d-flex align-itemcenter" href="">
                <div className='d-flex flex-row gap-2'>
                    
                    <span className="ms-1 py-2 py-sm-0 fs-5 d-none d-sm-inline">Menu</span>    
                </div>                        
                
            </a>
            </li>
            <hr className={`text-secondary ${isCollapsed ? 'd-none' : 'd-sm-block'}`}/>
            <SideBarItem text={"Dashboard"} active={isCollapsed} icon={"fs-4 bi bi-speedometer2"} />       
            <SideBarItem text={"Scanner"} active={isCollapsed}  icon={"bi bi-download"}/>       
            <SideBarItem text={"Data Uploader"} active={isCollapsed}  icon={"bi bi-upload"}/>       
            <SideBarItem text={"Data Transfer"} active={isCollapsed} icon={"bi bi-send"} />       
            <SideBarItem text={"Configuraciones"} active={isCollapsed}  icon={"bi bi-gear"}/>         
            <li className="nav-item text-white fs-5  ">
              <button
                onClick={toggleSidebar}
                className="text-decoration-none d-flex align-items-center px-4 btn btn-link"
              >
                <div className="d-flex w-100 justify-content-start align-items-center">
                  <span
                    id="collapse-icon"
                    className={`fa fa-2x mr-3 ${isCollapsed ? 'fa-angle-double-right' : 'fa-angle-double-left'}`}
                  ></span>
                  <span id="collapse-text" className={`menu-collapsed ${isCollapsed ? 'd-none' : ''}`}>Collapse</span>
                </div>
              </button>
            </li>
          </ul>
        </div>
            <Content/>
       
      </div>
    </>
  );
};

export default SideBar;
