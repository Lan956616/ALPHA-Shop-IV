import styles from './main.module.css'
import Pay from './pay/pay'
import Cart from './cart/cart'
import {CartData} from './CartContext'
import { useState, useContext } from 'react';


export default function Main() {
  const [data, setData] = useState(useContext(CartData))
  return(
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <CartData.Provider value={{data:data,setData:setData}}>
          <Pay />
          <Cart />
        </CartData.Provider>
      </div>
      
    </div>
  )
}