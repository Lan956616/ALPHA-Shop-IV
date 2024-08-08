import styles from './cart.module.css';
import minus from './minus.svg';
import plus from './plus.svg';
import {useContext} from 'react'
import { CartData } from '../../../CartContext';
import { PayInfo } from '../../../payInfoContext';


function CartProduct ({productNumber, productName, productPrice, IMG,ID}){

  const allData = useContext(CartData).data
  const setAllData = useContext(CartData).setData

  function handlePlusClicked(id) {
    setAllData(allData.map((data)=>{
      if(data.id === id) {
        return {...data, quantity: data.quantity+1}
      } else {
        return data
      }
    }))
  }

  function handleMinusClicked(id) {
    setAllData(allData.map((data)=>{
      if(data.id === id) {
        //不要商品數量低於1
        let newQuantity = data.quantity-1
        if (newQuantity<1) {
          newQuantity = 1
        }
        return {...data, quantity: newQuantity }
      } else {
        return data
      }
    }))
  }


  return(

    <div className={styles.CartProduct}> 
     <img src={IMG} className={styles.CartProductImg}></img>
     <div className={styles.CartProductRightPart}>
       <div className={styles.rightPartTop}>
        <p className={styles.productName}>{productName}</p>
        <p className={styles.productPrice}>{`$${productPrice * productNumber}`}</p>
       </div>
       <div className={styles.rightPartBottom}>
        <img src={minus} className={styles.countIcon} onClick={()=>{handleMinusClicked(ID)}}></img>
        <p className={styles.productNumber}>{productNumber}</p>
        <img src={plus} className={styles.countIcon} onClick={()=>{handlePlusClicked(ID)}}></img>

       </div>
     </div>

    </div>
  )
}

function TotalRow ({title, content}) {
  return(
    <div className={styles.TotalRow}>
        <div className={styles.hr}></div>
        <div className={styles.totalRow}>
          <p className={styles.totalTitle}>{title}</p>
           <p className={styles.totalContent}>{content}</p>
        </div>
      </div>
  )
}



export default function Cart() {

  const allData = useContext(CartData).data
  const totalPrice = useContext(CartData).total
  return(

    <div className={styles.mainCart}>
      <p className={styles.mainCartTitle}>購物籃</p>
      {allData.map((eachData) => <CartProduct key= {eachData.id} productNumber={eachData.quantity} productName={eachData.name} productPrice = {eachData.price} IMG={eachData.img}ID={eachData.id}/>)
      }
      <TotalRow title='運費' content= '免費'/>
      <TotalRow title='小計' content= {totalPrice}/>
    </div>
  )
}