import styles from './logo.module.css'
import aclogo from './logo.svg'
export default function Logo () {
  return(
    <div className={styles.headerLogo}>
      <img className={styles.logo} src={aclogo}/>
    </div>
  )
}