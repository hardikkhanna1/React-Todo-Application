import './App.css';
import Top from './Components/Top';
import TodoList from './Components/Todo List';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [ip,setip] = useState('');
  const [todo,setTodo] = useState([]);
  
  useEffect(function(){
    fetch('http://localhost:8080/getTodo')
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
    return fetch('http://localhost:8080/save',{
      method:"POST",
      body:JSON.stringify({"todo":ip} ),
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

    var response = await saveTodoToServer(ip);
    var data = await response.json();
    

    var new_todo = data ;
    var newTodo = [...todo,new_todo];
    
    setTodo(newTodo);
    setip('');
    
  }
  
  function DeleteTodo(ind){
    
    fetch('http://localhost:8080/deleteTodo',{
      method:"POST",
      body:JSON.stringify({"todo_id":ind} ),
      headers:{
        "Content-Type":'application/json',
      },
    }).then(function(response){
    
    return response.json();
    })
    .then(function(data){
      var new_array =[...data];
      setTodo(new_array);
    })
    .catch(function(err){
      
      console.log("error occured in deleting todo from backend");
    })
  }

  return (
    <>
    <Top onInputChange={getInputValue} InputValue={ip} ButtonOnClick={saveTodo} ></Top>
    <TodoList todos={todo} todoDelete={DeleteTodo}></TodoList>
    </>
    
  );
}

export default App;
