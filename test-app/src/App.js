import './App.css';
import Top from './Components/Top';
import TodoList from './Components/Todo List';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [ip,setip] = useState('');
  const [todo,setTodo] = useState([]);
  
  useEffect(function(){
    fetch('http://localhost:8000/getTodo')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      setTodo(data);
    })
    .catch(function(err){
      console.log(err);
    });

  },[]);

  function saveTodoToServer(ip){
    return fetch('http://localhost:8000/save',{
      method:"POST",
      body:JSON.stringify({"todo":ip}),
      headers:{
        "Content-Type":'application/json',
      },
    });
  }

  function getInputValue(event){
    var value = event.target.value;
    setip(value);
  }

  async function saveTodo(){
    if(ip===''){
      return;
    }

    await saveTodoToServer(ip);
    var newTodo = [...todo,ip];
    setTodo(newTodo);
    setip('');
  }
  
  function DeleteTodo(ind){
    
    delete todo[ind];
    var newArr = [...todo];
    setTodo(newArr)

  }

  return (
    <>
    <Top onInputChange={getInputValue} InputValue={ip} ButtonOnClick={saveTodo} ></Top>
    <TodoList todos={todo} todoDelete={DeleteTodo}></TodoList>
    </>
    
  );
}

export default App;
