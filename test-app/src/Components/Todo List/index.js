import styles from './styles.module.css';
import ListItem from '../List Item';


export default function TodoList(props){
    return (
        <ul className={styles.list}>
        
            {props.todos.map(function(element,index){
                if(element){
                    return <ListItem content={element.todo_detail} db_id={element._id}  TodoDelete={props.todoDelete}></ListItem>
                }
            })}
        </ul>
        
    );

}