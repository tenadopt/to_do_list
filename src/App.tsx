import React from 'react';
import './App.css';
import ToDoList, {TaskType} from "./ToDoList";

// CRUD
// create
// read
// update
// delete

function App() {
    //BLL

    const tasks_1: TaskType [] = [
        {id: 1, title: "Run", isDone: true},
        {id: 2, title: "Swim", isDone: true},
        {id: 3, title: "Sleep", isDone: false}
    ]
    const tasks_2: TaskType [] = [
        {id: 4, title: "HTML&CSS", isDone: true},
        {id: 5, title: "JS/TS", isDone: true},
        {id: 6, title: "React", isDone: false}
    ]
    const tasks_3: TaskType [] = [
        {id: 7, title: "Meat", isDone: true},
        {id: 8, title: "Fish", isDone: true},
        {id: 9, title: "Beer", isDone: false}
    ]
    const tasks_4: TaskType [] = [
        {id: 10, title: "JS", isDone: true},
        {id: 11, title: "JS Native", isDone: true},
        {id: 12, title: "Node.Js", isDone: false}
    ]
    return (
        <div className="App">
            <ToDoList
                title={"What to do"}
                tasks={tasks_1}
            />
            <ToDoList
                title={"What to learn"}
                tasks={tasks_2}
            />
            <ToDoList
                title={"What to buy"}
                tasks={tasks_3}
            />
            <ToDoList
                title={"What to read"}
                tasks={tasks_4}
            />
        </div>
    );
}

export default App;
