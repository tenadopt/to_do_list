import React, {useState} from 'react';
import './App.css';
import ToDoList, {TaskType} from "./ToDoList";
import {v1} from "uuid";

// CRUD
// create
// read
// update
// delete

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

    return (
        <div className="App">
            <ToDoList
                title={"What to do"}
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    )
}

export default App;
