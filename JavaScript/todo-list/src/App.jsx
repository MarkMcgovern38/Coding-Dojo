import './App.css'
import Form from './components/Form'
import DisplayTask from './components/DisplayTask'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <Form
        tasks={tasks} setTasks={setTasks}
      />
      <DisplayTask
        tasks={tasks} setTasks={setTasks}
      />
    </>
  )
}

export default App


