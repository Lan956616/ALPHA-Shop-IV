import styles from './main.module.css'
import Pay from './pay/pay'
import Cart from './cart/cart'
import {CartData} from '../../CartContext'
import { useState, useContext } from 'react';


export default function Main() {
  return(
    <div className={styles.main}>
      <div className={styles.mainContainer}>
          <Pay />
          <Cart />
      </div>
      
    </div>
  )
}