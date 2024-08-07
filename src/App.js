import Header from './components/header/header'
import Main from './components/main/main';
import Footer from './components/footer/footer'
import './App.css';
import {useState} from 'react';

function App() {
  const [step, setStep] = useState(1)
  return (
    <div className='mainContainer'>
      <Header />
      <Main step={step} setStep={setStep}/>
      <Footer />
    </div>
  )
    
}

export default App;
