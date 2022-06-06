import React, {useState} from 'react';
import './App.css';
import ToDoList, {TaskType} from "./ToDoList";
import {v1} from "uuid";

// CRUD
// create
// read
// update
// delete

type FilterValuesType = "all" | "active" | "completed"

function App() {
    // console.log(v1());
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
        {id: 1, title: "HTML@CSS", isDone: true},
        {id: 2, title: "JS/TS", isDone: true},
        {id: 3, title: "React", isDone: false}
    ]
    )

    const removeTask = (taskID: number) => {
        const filtredTasks = tasks.filter(t => t.id !== taskID)
        setTasks(filtredTasks)
    }

    const [filter, setFilter] = useState<FilterValuesType>("completed")

    let tasksForRender = tasks
    if(filter === "active"){
        tasksForRender = tasks.filter(t => t.isDone === false)
    }
    if(filter === "completed") {
        tasksForRender  = tasks.filter(t => t.isDone === true)
    }

    return (
        <div className="App">
            <ToDoList
                title={"What to do"}
                tasks={tasksForRender}
                removeTask={removeTask}
            />
        </div>
    )
}

export default App;
