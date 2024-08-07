import styles from './stepprogress.module.css'

export default function StepProgress ({step}) {
  return(
    <div className={styles.StepProgress}>
      <p className={styles.StepProgressTitle}>結帳</p>
      <ul className={styles.progress}>
        <li className={`${styles.progressItem} ${styles.Item1}`}>寄送地址</li>
        <li className={`${styles.progressItem} ${styles.Item2}`}>運送方式</li>
        <li className={`${styles.progressItem} ${styles.Item3}`}>付款資訊</li>
      </ul>
    
    </div>
  )
}