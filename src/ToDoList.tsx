import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from "./App";
//rsc

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type ToDoListPropsType = {
    title: string
    tasks: TaskType []
    filter: FilterValuesType
    removeTask: (taskID: string) => void
    changeToDoListFilter: (filter: FilterValuesType) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
}
const ToDoList  = (props: ToDoListPropsType) => {
    // const [title, setTitle] = useState<String>(" ")
    // const [error, setError] = useState<Boolean>(false)
    const tasksJSX = props.tasks.map(t => {
        //const removeTask = () => props.removeTask(t.id)
        // const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked)
        const taskClasses = []
        if (t.isDone)taskClasses.push("isDone")
        return (
            <li key={t.id}>
                <input
                    onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked)}
                    type="checkbox"
                    checked={t.isDone}
                    // className={error ? error : ""}
                        />
                <span className={t.isDone ? "task isDone" : "task"}>{t.title}</span>
                <button onClick={()=>props.removeTask(t.id)}>x</button>
            </li>
        )
    })
    // const addTask = () => {
    //     const trimmedTitle = title.trim()
    //     if (trimmedTitle){
    //         props.addTask(trimmedTitle)
    //     } else {
    // setError(false)
    // }
    //     setTitle("")
    // }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {tasksJSX}
            </ul>
            <div>
                <button
                    className={props.filter === "all" ? "active" : ""}
                    onClick={()=>props.changeToDoListFilter("all" )}
                    // onClick={onClickHandler}
                    >All</button>
                <button
                    className={props.filter === "active" ? "active" : ""}
                    onClick={()=>props.changeToDoListFilter("active" )}>Active</button>
                <button
                    className={props.filter === "completed" ? "active" : ""}
                    onClick={()=>props.changeToDoListFilter("completed")}>Completed</button>
            </div>
        </div>
    );
};

export default ToDoList ;