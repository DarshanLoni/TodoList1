import { useState } from 'react'
import "./style.css"

export default function App(){
  const [newItem,setNewItem]=useState("")
  return (
  <>
     
      <form action="" className='new-item-form'>
        <div className='form-row'>
          <label htmlFor="item">New Item</label>        
          <input type="text" id="item" value={newItem} onChange={e=> setNewItem(e.target.value)}/>

        </div>
        <button className='btn' onClick={e=>{
          e.preventDefault();
          <ul className='list'>
          <li>
              <label htmlFor="items">
                <input type="checkbox" id='items' />hello
              </label>
              <button className='btn btn-danger' >Delete</button>
          </li>
        </ul>
        }}>Add
        </button>

        </form>
        
        <h1 className='header'>Todo List</h1>

    

  </>
)}
