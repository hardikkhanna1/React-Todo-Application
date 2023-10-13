const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const uri = "mongodb+srv://hardik_1:hardik123@cluster0.lfn5gjv.mongodb.net/?retryWrites=true&w=majority";
var todo_schema = new mongoose.Schema({
    todo_detail : String
})

var todo_model = mongoose.model('todos',todo_schema);

function testingdb(){
    return new Promise(function(resolve,reject){
        mongoose.connect(uri)
        .then(function(){
            console.log("Database connected");
            resolve();
        })
        .catch(function(err){
            console.log("database connection error");
            reject(err);
        })
    })
}

app.use(cors());
app.use(express.json());// testing something 

const todo_array = [];

app.get('/',(req,res)=>{
    
    res.json({
        "Message":"hello"
    });
})

app.post('/save',async (req,res)=>{

    const data = req.body.todo;
    console.log(data);
    todo_model.create({
        todo_detail : req.body.todo
    }).then(function(response){
        var obj = {
            _id:response.id,
            todo_detail:response.todo_detail
        };
        console.log(obj);
        // todo_array.push(obj);
        res.json(obj);
    })
    .catch(function(){
        console.log("error occured in adding the todo to database");
    })
})

app.post('/deleteTodo',async (req,res)=>{

    const id = req.body.todo_id;
    console.log(id);

    todo_model.findOneAndDelete({
        _id : id
    }).then(function(){
        var new_array =[]
        todo_model.find({}).then(function(todos){
        todos.forEach(function(data){
            new_array.push({_id:data._id,
            todo_detail:data.todo_detail});
        })
        res.json(new_array);
        console.log("Todo deleted");
    })
    .catch(function(){
        console.log("error occured in deleting from db");
    })
})
})

app.get('/getTodo',(req,res)=>{
    // res.json(todo_array);
    var new_array =[]
    todo_model.find({}).then(function(todos){
        todos.forEach(function(data){
            new_array.push({_id:data._id,
            todo_detail:data.todo_detail});
        })
        res.json(new_array);
    })
    .catch(function(err){
        console.log('Error occured in getting todos from backend');
    })
})




testingdb().then(function(){
    app.listen(8080,()=>{
        console.log("backend is ready to pair");
    })
})
.catch(function(){
    console.log('some error occured');
})