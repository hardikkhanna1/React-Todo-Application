import styles from './styles.module.css';


export default function Input(props){
    return(
        <input placeholder="Type Something you want to add"type='text' className={styles.input} onChange={props.onInputChange} value={props.InputValue}></input>
    );

}