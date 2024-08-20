import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';


function App() {


  return (
    <>
      <div className="container">
        <Header />
        <div className="flex">
          <Navigation />
          <MainContent />
        </div>
      </div>
        
        
    </>
  )
}

export default App
