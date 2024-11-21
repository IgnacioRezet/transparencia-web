interface SideBarInput{
    text:string;
    active:boolean;
}

const SideBarItem = (props: SideBarInput) => {
  return (
    <>
        <li>
            <a href="#" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16"></svg>
                {props.text}
            </a>
       </li>
    </>
  )
}

export default SideBarItem
