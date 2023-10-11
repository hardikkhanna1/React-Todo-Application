const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());// testing something 

const todo_array = [];

app.get('/',(req,res)=>{
    
    res.json({
        "Message":"hello"
    });
})

app.post('/save',(req,res)=>{
    console.log(req.body.todo);
    todo_array.push(req.body.todo);
    res.end();
})

app.get('/getTodo',(req,res)=>{
    res.json(todo_array);
})


app.listen(8000,()=>{
    console.log("backend is ready to pair");
})