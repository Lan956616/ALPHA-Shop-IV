import styles from './step1.module.css'


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

export default function Step1 () {
  return(
    <div className={styles.step1}>
      <p className={styles.step1Title}>寄送地址</p>
      <Formrow>
        <FormInput width='160px' title='稱謂' placeholder='先生'/>
        <FormInput width='350px' title='姓名' placeholder='請輸入姓名'/>
      </Formrow>
      <Formrow>
        <FormInput width='255px' title='電話' placeholder='請輸入行動電話'/>
        <FormInput width='255px' title='Email' placeholder='請輸入電子郵件'/>
      </Formrow>
      <Formrow>
        <FormInput width='160px' title='縣市' placeholder='請選擇縣市'/>
        <FormInput width='350px' title='地址' placeholder='請輸入地址'/>
      </Formrow>

    </div>
  )
}