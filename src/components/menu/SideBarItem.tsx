interface SideBarInput{
    text:string;
    active:boolean;
    icon: string;
}

const SideBarItem = (props: SideBarInput) => {
  return (
    <>
       <li className="nav-item text-white fs-5 px-4 py-3">
                <a
                href="#submenu1"
                data-toggle="collapse"
                aria-expanded="false"
                className="text-decoration-none list-group-item-action flex-column align-items-start"
                >
                    <div className="d-flex w-100 gap-2 justify-content-start align-items-center">
                        <i className={props.icon}></i>
                        <span className={`menu-collapsed ${props.active ? 'd-none' : ''}`}>{props.text}</span>
                    
                    </div>
                </a>
        </li>  
    </>
  )
}

export default SideBarItem
