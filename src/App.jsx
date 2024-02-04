import { useState } from 'react'
import {useEffect} from 'react'
import "./style.css"
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'

export default function App(){
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  //useEffect is used to store todo even after reloading page...stored in local storage
 function addTodo(title){
  setTodos(currentTodos=>{
    return [
      ...currentTodos,
      {id:crypto.randomUUID(),title,completed:false},
    ]
  })
 }

  function toggleTodo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id === id){ 
          return{...todo,completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
  <>
     <NewTodoForm onSubmit={addTodo}/>
     
        <h1 className='header'>Todo List</h1>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    

  </>
)}
