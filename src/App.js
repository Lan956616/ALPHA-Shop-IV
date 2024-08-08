import Header from './components/header/header'
import Main from './components/main/main';
import Footer from './components/footer/footer'
import './App.css';
import {useState} from 'react';
import {Step} from './stepContext';
import {PayInfo} from './payInfoContext';


function App() {
  const [step, setStep] = useState(1)
  const [payInfo, setPayInfo] = useState(
    {total:0,name:'',
    cardNumber:'',
    expiration: '',
    ccv: ''}
    )

  return (
    <PayInfo.Provider value={{payInfo:payInfo, setPayInfo: setPayInfo}}>
    <Step.Provider  value={{step:step, setStep:setStep}}>
      <div className='mainContainer'>
        <Header />
        <Main/>
        <Footer />
      </div>
    </Step.Provider>
    </PayInfo.Provider>
  )
    
}

export default App;
