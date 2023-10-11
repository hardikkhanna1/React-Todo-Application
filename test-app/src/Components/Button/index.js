import styles from './styles.module.css';

export default function Button(props){
    var clickFunction;
    if(props.ButtonOnClick){
        clickFunction =props.ButtonOnClick;
    } 
    else{
        clickFunction=()=>{
            props.TodoDelete(props.ind);
        }
    } 
    return(
        <button type='submit' className={styles.button} onClick={clickFunction}>{props.children}</button>
    );
}