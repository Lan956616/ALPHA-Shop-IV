import styles from './step3.module.css'
import { PayInfo } from '../../../../payInfoContext';
import { useContext, useState } from 'react';


function Formrow({children}) {
  return(
    <div className={styles.Formrow}>
      {children}
    </div>

  )
}

function FormInput({width, title, placeholder, part}) {

  const payInfo = useContext(PayInfo).payInfo
  const setPayInfo = useContext(PayInfo).setPayInfo

  function handleChange(event) {
    setPayInfo({...payInfo, [part]: event.target.value})
  }

  return(
    <div className={styles.FormInput} style={{width:width}}>
      <p className={styles.FormInputTitle}>{title}</p>
      <input className={styles.FormInputType} placeholder={placeholder} value={payInfo[part]} onChange={(e)=>{handleChange(e)}}></input>
    </div>
  )
}

export default function Step3 () {

  return(
    <div className={styles.step3}>
      <p className={styles.step3Title}>付款資訊</p>
      
      <Formrow>
        <FormInput width='350px' title='持卡人姓名' placeholder='John Doe' part = 'name'/>
      </Formrow>  
      <Formrow>
        <FormInput width='350px' title='卡號' placeholder='1111 2222 3333 4444' part ='cardNumber'/>
      </Formrow>  
      <Formrow>
        <FormInput width='255px' title='有效期限' placeholder='MM/YY' part ='expiration'/>
        <FormInput width='255px' title='CVC/CCV' placeholder='123' part = 'ccv'/>
      </Formrow>
    </div>
  )
}