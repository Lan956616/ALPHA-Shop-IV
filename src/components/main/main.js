import styles from './main.module.css'
import Pay from './pay/pay'
import Cart from './cart/cart'


export default function Main() {
  return(
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <Pay />
        {/* <Cart /> */}
      </div>
      
    </div>
  )
}