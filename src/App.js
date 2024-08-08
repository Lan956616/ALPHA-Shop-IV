import Header from './components/header/header'
import Main from './components/main/main';
import Footer from './components/footer/footer'
import './App.css';
import {useContext, useState, createContext} from 'react';
import {Step} from './stepContext'


function App() {
  const [step, setStep] = useState(1)

  return (
    <Step.Provider  value={{step:step, setStep:setStep}}>
      <div className='mainContainer'>
        <Header />
        <Main/>
        <Footer />
      </div>
    </Step.Provider>
  )
    
}

export default App;
