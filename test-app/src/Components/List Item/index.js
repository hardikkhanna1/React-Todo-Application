import Button from "../Button";

export default function ListItem(props){
    return(
        <li className='slide-left' key={props.ind}>
            <p>{props.content}</p>
            <Button TodoDelete={props.TodoDelete} ind={props.ind}>Mark as done</Button>
        </li>
    
    );
    
}