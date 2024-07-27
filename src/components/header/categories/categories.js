import styles from './categories.module.css'

export default function Categories() {
  return(
    <ul className={styles.categories}>
      <li className={styles.listItem}>男款</li>
      <li className={styles.listItem}>女款</li>
      <li className={styles.listItem}>最新消息</li>
      <li className={styles.listItem}>客製商品</li>
      <li className={styles.listItem}>聯絡我們</li>
    </ul>
    
  )
}