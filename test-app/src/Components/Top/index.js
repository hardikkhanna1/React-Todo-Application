import Input from "../Input/Index";
import Button from "../Button";

export default function Top(props){
    return(
        

<>
  
  <div className="slide-right">
    <p><strong>Your Todo List.....</strong></p><Input onInputChange={props.onInputChange} InputValue={props.InputValue}></Input><Button ButtonOnClick={props.ButtonOnClick}>Add to List</Button>
  </div>
  
  
  <div className="line fade-in"></div>
  
  {/* <div className="slide-left">
    <p><em>My TO - Do List</em></p>
  </div> */}
  
</>
        
    );

}
