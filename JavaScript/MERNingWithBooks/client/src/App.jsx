import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DisplayAll from './components/DisplayAll'
import Nav from './components/Nav'
import NewBookForm from './components/NewBookForm'
import Details from './components/Details'
import EditBookForm from './components/EditBookForm'

function App() {


  return (
    <>
      <Nav/>
      <Routes>
        <Route index element={<DisplayAll/>}/>
        <Route path='/new/book' element={<NewBookForm/>}/>
        <Route path='/details/book/:id' element={<Details />} />
        <Route path='/edit/book/:id' element={<EditBookForm/>} />
      </Routes>
    </>
  )
}

export default App;
