import React, {useState} from "react";

const DisplayTask = (props) => {
    const {tasks, setTasks} = props

    const toggleComplete = (id) => {
        const updatedTaskList = tasks.map((task) => {
            if(id === task.id){
                task.isTaskComplete = !task.isTaskComplete
            }
            return task;
        })
        console.log(updatedTaskList);
        setTasks(updatedTaskList)
        
    }

    const deleteTask = (id) => {
        const filteredList = tasks.filter((task) => task.id !== id)
        setTasks(filteredList)
    }

    return (
        <div>
            <h1>Tasks</h1>
            {
                tasks.map((task) => (
                    <div className="border border-primary mt-2" key={task.id}>
                        
                            <p> {task.taskName} </p>
                            <label>Complete:</label>
                            <input type="checkbox" name = 'taskName' defaultChecked = {task.isTaskComplete} onClick={() => toggleComplete(task.id)} />
                            <button className="bg-danger m-2" onClick={() => deleteTask(task.id)}>Delete</button>

                    </div>
                ))
            }
        </div>
    )
}

export default DisplayTask;