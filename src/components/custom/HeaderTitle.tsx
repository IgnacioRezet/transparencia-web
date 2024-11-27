import { ProgressBar, Spinner } from "react-bootstrap";

interface HeaderTitleInput {
    title: string;
    textBtn: string;
    onClick?: () => void;
    menu: string;
    now: number;
    
  }
  
  const HeaderTitle = (props: HeaderTitleInput) => {
    console.log(props)
    return (
      <div className="row mb-3">
        <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12 d-flex flex-direction-row justify-content-between">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
            <h1>{props.title}</h1>
            </div>
          
          {props.menu == "1" || props.now >= 105 ? (
            <button className="btn btn-primary" onClick={props.onClick} >
            {props.textBtn}
          </button>
          ):(
            <>
            <div className="col-md-4 col-lg-4 col-sm-10 col-xs-10 pt-4 ">
                <ProgressBar  now={props.now} label={`${props.now}%`} />
            </div>
            <div className="col-md-2 col-lg-2 col-sm-2 col-xs-2 px-5 pt-2">
                <Spinner animation="border" variant="primary"/> 
            </div>
                
                
            </>            
          )}
          
        </div>
      </div>
    );
  };
  
  export default HeaderTitle;
  