import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import NewRound from './components/NewRound'
import EditRound from './components/EditRound'
import Register from './components/Register'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/round/new" element={<NewRound />} />
        <Route path="/round/edit/:id" element={<EditRound />} />
      </Routes>
    </>
  )
}

export default App
