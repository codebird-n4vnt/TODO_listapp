import Navbar from "./components/Navbar";


import "@fontsource/poppins/400.css";
import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPlus,
  faTrash,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";







function App() {


   


  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showFinished, setShowFinished] = useState(false)
  const saveToLS = () => localStorage.setItem('tasks', JSON.stringify(tasks))
  const listItem = localStorage.getItem('tasks')
  
  useEffect(( )=> {
    
    if(listItem){
      let todos = JSON.parse(listItem)
      setTasks(todos);
    }
  },[])

  useEffect(()=>{
    if(tasks.length>0)
    saveToLS()
  },[tasks])

  const items = {
    id: Date.now(),
    value: newTask,
    isCompleted: false
  }
  

  const handleChange = (e) => {
    setNewTask(e.target.value); 
  };


  const handleAdd = (e) => {
    const boxValue = newTask;
    if(boxValue !== ""){
    setTasks([ ...tasks, items]);
    setNewTask("");
    }
    
  };


  const handleDelete = (e) => {
   const delId = e;
   const updatedTasks = tasks.filter((task) =>{
    return task.id !== delId;
    
   }) 
   setTasks(updatedTasks); 
  }  


  const handleEdit = (e)=>{
    const editId = e;
    const editEl = tasks.find((task)=> {
      return task.id === editId;
    })

    setNewTask(editEl.value)
    handleDelete(editId)
  }


  const taskCompletion = (e) =>{
    const updatedTasks = tasks.map(task => {
      if(task.id === e){
        return ({...task, isCompleted : !task.isCompleted})
      }
      return task;
    })
    
  setTasks(updatedTasks);
  }




  return (
    <>
      
 
      <section className="main-box">
        <section className="inputs">
          <input
            type="text"
            value={newTask}
            onChange={handleChange}
            placeholder="Enter new task here..."
          />
          <button className="add btn" onClick={(e)=>handleAdd(e.target)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </section>
        <article className="todo-box">
          <h2>#TO-DO List</h2>
          
          <input type="checkbox" name="completed" id="completed" onChange={()=>{setShowFinished(showFinished?false:true)}}/>
          <label htmlFor="completed">  Show Completed</label>
          {!tasks.length && <p>Nothing to Show Here</p>}
          {tasks.map((task,index) => {
            return(showFinished || !task.isCompleted )&&  (
            
            <li key={task.id} id={task.id} >
            <input type="checkbox" name="checkbox" id=""  onChange={() => taskCompletion(task.id)} checked={task.isCompleted} />
              
            <p className={task.isCompleted? "isCompleted" : ""}>{task.value}</p>
            <div className="li-buttons">
              <button className="edit" onClick={() => handleEdit(task.id)} >
                <FontAwesomeIcon icon={faPencil} /> 
              </button>
              <button className="delete" onClick={()=>handleDelete(task.id)} >
                <FontAwesomeIcon icon={faTrash} />
              </button> 
            </div>
          </li>
          )})}
        </article>
      </section>
    </>
  );
}

export default App;
