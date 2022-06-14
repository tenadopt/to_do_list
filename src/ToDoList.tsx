import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
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
    addTask: (title: string) => void
    filter: FilterValuesType
    removeTask: (taskID: string) => void
    changeToDoListFilter: (filter: FilterValuesType) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    setLastState: () => void
}
const ToDoList = (props: ToDoListPropsType) => {

    const [title, setTitle] = useState<string>("")

    // const [error, setError] = useState<Boolean>(false)

    const tasksJSX = props.tasks.map(t => {
        const removeTask = () => props.removeTask(t.id)
        // const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => props.changeTaskStatus(t.id, e.currentTarget.checked)
        const taskClasses = []
        if (t.isDone) taskClasses.push("isDone")
        return (
            <li key={t.id}>
                <input
                    onChange={(e) => props.changeTaskStatus(t.id, e.currentTarget.checked)}
                    type="checkbox"
                    checked={t.isDone}
                    // className={error ? error : ""}
                />
                <span className={t.isDone ? "task isDone" : "task"}>{t.title}</span>
                <button onClick={removeTask}>x</button>
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
    const getOnClickHandler = (filter: FilterValuesType) => {
        return () => props.changeToDoListFilter(filter)
    }
    const onClickHandler = () => props.changeToDoListFilter("all")
    const addTask = () => {
        props.addTask(title)
        setTitle("")
    }
    const onKeyDownAddTask = (e: KeyboardEvent <HTMLInputElement>) => {
        e.key === "Enter" && addTask()
    }

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>)=>setTitle(e.currentTarget.value)

    return (
        <div>
            <h3>
                {props.title}
                <button onClick={props.setLastState}>Undo</button>
            </h3>
            <div>
                <input
                    value={title}
                    onChange={onChangeSetTitle}
                    //currentTarget - ссылка на input
                    onKeyDown={onKeyDownAddTask}
                />
                    <button onClick={addTask}>+</button>
        </div>
    <ul>
        {tasksJSX}
    </ul>
    <div>
        <button
            className={props.filter === "all" ? "active" : ""}
            onClick={onClickHandler}
        >All
        </button>
        <button
            className={props.filter === "active" ? "active" : ""}
            onClick={getOnClickHandler("active")}>Active
        </button>
        <button
            className={props.filter === "completed" ? "active" : ""}
            onClick={getOnClickHandler("completed")}>Completed
        </button>
    </div>
</div>
)
    ;
};

export default ToDoList;