import Header from './components/header/header'
import Main from './components/main/main';
import Footer from './components/footer/footer'
import './App.css';
import {useState, useContext} from 'react';
import {Step} from './stepContext';
import {PayInfo} from './payInfoContext';
import { CartData } from './CartContext';

function App() {
  const [step, setStep] = useState(1)
  const [payInfo, setPayInfo] = useState(
    {total:0,name:'',
    cardNumber:'',
    expiration: '',
    ccv: ''}
    )
  const [data, setData] = useState(useContext(CartData))  

  return (
    <CartData.Provider value={{data:data, setData:setData}}>
    <PayInfo.Provider value={{payInfo:payInfo, setPayInfo: setPayInfo}}>
    <Step.Provider  value={{step:step, setStep:setStep}}>
      <div className='mainContainer'>
        <Header />
        <Main/>
        <Footer />
      </div>
    </Step.Provider>
    </PayInfo.Provider>
    </CartData.Provider>
  )
    
}

export default App;
