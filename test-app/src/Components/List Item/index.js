import Button from "../Button";

export default function ListItem(props){
    return(
        <li className='slide-left' key={props.db_id} >
            <p>{props.content}</p>
            <Button TodoDelete={props.TodoDelete} ind={props.db_id}>Mark as done</Button>
        </li>
    
    );
    
}