import moon from './moon.svg'
import cart from './cart.svg'
import search from './search.svg'

import styles from './icons.module.css'

export default function Icons() {
  return(
    <div className={styles.headerIcons}>
      <img className={styles.icon} src={search}/>
      <img className={styles.icon} src={cart}/>
      <img className={styles.icon} src={moon}/>
    </div>
  )
}