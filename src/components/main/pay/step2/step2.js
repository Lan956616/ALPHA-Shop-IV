import styles from './step2.module.css'

export default function Step2() {
  return(
    <div className={styles.step2}>
       <p className={styles.step2Title}>運送方式</p>
       <div className={styles.step2Shipping}>
        <input type='radio' className={styles.radioButton}></input>
        <div className={styles.step2ShippingRightpart}>
          <div className={styles.RightpartMode}>
            <p className={styles.shippingMode}>標準運送</p>
            <p className={styles.price}>免費</p>
          </div>
          <p className={styles.RightpartDescription}>約3~7個工作天</p>
        </div>
       </div>
       <div className={styles.step2Shipping}>
        <input type='radio' className={styles.radioButton}></input>
        <div className={styles.step2ShippingRightpart}>
          <div className={styles.RightpartMode}>
            <p className={styles.shippingMode}>DHL貨運</p>
            <p className={styles.price}>$500</p>
          </div>
          <p className={styles.RightpartDescription}>48小時內送達</p>
        </div>
       </div>
    </div>
  ) 
}