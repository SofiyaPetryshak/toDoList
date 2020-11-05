import React from 'react'
import AppHeader from '../AppHeader'
import ToDoList from '../ToDoList'
import SearchPanel from '../SearchPanel'


const todos = [
    {
        id:1,
        label:'Drink coffee',
        important: false,
    },
    {
        id:2,
        label:'Workout',
        important: false,
    },
    {
        id:3,
        label:'Learn react',
        important: true,
    },
]

const App = () =>{
    return(
        <div className="container mx-auto w-50" >
            <AppHeader/>
            <SearchPanel />
            <ToDoList todos={todos} />
        </div>
        )
}

export default App
