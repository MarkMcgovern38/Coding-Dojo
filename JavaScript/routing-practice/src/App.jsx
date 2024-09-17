import { Routes, Route, useParams } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Number from './components/Number'
import Word from './components/Word'


function App() {

  

  return (
    <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/:stackId' element={<Dynamic/>}/>
        <Route path='/:stackId/:color/:bgcolor' element={<Dynamic/>}/>
      </Routes>
    </>
  )
}


function Dynamic() {
  const { stackId, color, bgcolor } = useParams();
  
  const isNumber = !isNaN(stackId);

  if (isNumber) {
    return <Number value={stackId} />;
  } else {
    return <Word value={stackId} color={color} bg={bgcolor} />;
  }
}

export default App
