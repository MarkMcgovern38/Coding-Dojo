import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {
    const {tasks, setTasks} = props
    const [taskName, setTaskName] = useState('')
    const [isTaskComplete, setIsTaskComplete] = useState(false)
    
    

    const submitTask = (e) => {
        e.preventDefault();
        const newTask = {taskName, id:uuidv4(), isTaskComplete}
        setTasks([...tasks, newTask])
        console.log(newTask)
        setTaskName('')

    }



    return (
        <div>
            <h1>Add a Task</h1>
            <form onSubmit={submitTask}>
                <div className="mt-3">
                    
                    <input type="text" onChange={(e) => setTaskName(e.target.value)} name='taskName' value={taskName} />
                    <button className="bg-primary m-3">Add</button>
                </div>

                
                
            </form>


        </div>
    )

}

export default Form;