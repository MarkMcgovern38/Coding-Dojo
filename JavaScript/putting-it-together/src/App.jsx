import PersonCard from './components/PersonCard'
import './App.css'

function App() {


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
          </div>

          <div className="col-6">
            <PersonCard name="Doe, Jane" age="45" hair_color ="Black" />
            <PersonCard name="Smith, John" age="88" hair_color="Brown" />
          </div>

          <div className="col-3">
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
