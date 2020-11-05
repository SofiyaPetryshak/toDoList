import React from 'react'
import ToDoListItem from './../ToDoListItem'

const ToDoList = ({todos}) =>{

    let elements = todos.map((el)=>{
        return(
            <li 
            className="list-group-item" 
            key={el.id}><ToDoListItem 
            label = {el.label} 
            important = {el.important}/>
            </li>
        ) 
    })
    return(
    <ul className="list-group">
        {elements}
    </ul>)
}
export default ToDoList