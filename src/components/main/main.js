import styles from './main.module.css'
import Pay from './pay/pay'
import Cart from './cart/cart'

const data = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

export default function Main({step, setStep}) {
  return(
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <Pay step={step} setStep={setStep}/>
        <Cart data={data}/>
      </div>
      
    </div>
  )
}