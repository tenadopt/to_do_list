import React from 'react';
//rsc

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type ToDoListPropsType = {
    title: string
    tasks: TaskType []
    removeTask: (taskID: number) => void
}
const ToDoList  = (props: ToDoListPropsType) => {
    const tasksJSX = props.tasks.map(t => {
        return (
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={()=>props.removeTask(t.id)}>x</button>
            </li>
        )
    })
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
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default ToDoList ;