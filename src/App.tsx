import React, {useState} from 'react';
import './App.css';
import ToDoList, {TaskType} from "./ToDoList";
import {v1} from "uuid";

// CRUD
// create +
// read + -
// update
// delete +

export type FilterValuesType = "all" | "active" | "completed"

function App() {
    console.log(v1()); //string
    //BLL
//    const [tasks, setTasks] = useState<Array<TaskType>>(initialState [
//        {id: 1, title: "HTML&CSS", isDone: true},
//        {id: 2, title: "JS/TS", isDone: true},
//        {id: 3, title: "React", isDone: false},
//]
//     );

    // const [filter, setFilter] = useState<FilterValuesType>("all")



    // const addTask = () => [
    //     const newTask: TaskType = {
    //         id: number,
    //         title: "new task",
    //         isDone: false
    //     }
    //     setTasks([newTask, ...tasks])
    // ]



    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML@CSS", isDone: true},
        {id: v1(), title: "JS/TS", isDone: true},
        {id: v1(), title: "React", isDone: false}
    ]
    )

    const [filter, setFilter] = useState<FilterValuesType>("completed")

    const removeTask = (taskID: string) => {
        const filtredTasks = tasks.filter(t => t.id !== taskID)
        setTasks(filtredTasks)
    }
    //
    // const addTask = () => {
    //     const addTask: TaskType = {
    //         id: v1(),
    //         title:
    //     }
    // }

    const changeTaskStatus = (taskID: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id === taskID ? {...t, isDone} : t))
    }

    const changeToDoListFilter = (filter: FilterValuesType) => {
        setFilter(filter)
    }

    let tasksForRender = tasks
    if ( filter === "active" ){
        tasksForRender = tasks.filter(t => t.isDone === false)
    }
    if ( filter === "completed" ) {
        tasksForRender  = tasks.filter(t => t.isDone === true)
    }

    return (
        <div className="App">
            <ToDoList
                title={"What to do"}
                tasks={tasksForRender}
                filter={filter}
                removeTask={removeTask}
                changeToDoListFilter={changeToDoListFilter}
                changeTaskStatus={changeTaskStatus}
            />
        </div>
    )
}

export default App;
