import styles from './step3.module.css'


function Formrow({children}) {
  return(
    <div className={styles.Formrow}>
      {children}
    </div>

  )
}

function FormInput({width, title, placeholder}) {
  return(
    <div className={styles.FormInput} style={{width:width}}>
      <p className={styles.FormInputTitle}>{title}</p>
      <input className={styles.FormInputType} placeholder={placeholder}></input>
    </div>
  )
}

export default function Step3 () {
  return(
    <div className={styles.step3}>
      <p className={styles.step3Title}>付款資訊</p>
      <Formrow>
        <FormInput width='350px' title='持卡人姓名' placeholder='John Doe'/>
      </Formrow>  
      <Formrow>
        <FormInput width='350px' title='卡號' placeholder='1111 2222 3333 4444'/>
      </Formrow>  
      <Formrow>
        <FormInput width='255px' title='有效期限' placeholder='MM/YY'/>
        <FormInput width='255px' title='CVC/CCV' placeholder='123'/>
      </Formrow>
    </div>
  )
}