import React from 'react'
import './ToDoListItem.css'

import React, { Component } from 'react'

export default class ToDoListItem extends Component {
    style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }
    render() {
        const {label, important} = this.props
        return (
            <div className="todo-list-item">
            <span style = {style} className="align-self-center">{label}</span>
            <div className="button-container">
            <button  className="btn btn-outline-success btn-sm list-item-button">
                <i className= "fa fa-exclamation"/>
                </button>
            <button  className="btn btn-outline-danger btn-sm ml-2 list-item-button">
                <i className= "fa fa-trash-o"/>
                </button>
            </div>
           
        </div>
        )
    }
}


const ToDoListItem = () =>{
    
    return(
       
    )
}

export default ToDoListItem