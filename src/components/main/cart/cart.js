import styles from './cart.module.css';
import minus from './minus.svg';
import plus from './plus.svg';


function CartProduct ({productNumber, productName, productPrice, IMG}){
  return(
    <div className={styles.CartProduct}> 
     <img src={IMG} className={styles.CartProductImg}></img>
     <div className={styles.CartProductRightPart}>
       <div className={styles.rightPartTop}>
        <p className={styles.productName}>{productName}</p>
        <p className={styles.productPrice}>{`$${productPrice}`}</p>
       </div>
       <div className={styles.rightPartBottom}>
        <img src={minus} className={styles.countIcon}></img>
        <p className={styles.productNumber}>{productNumber}</p>
        <img src={plus} className={styles.countIcon}></img>

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



export default function Cart({data}) {
  //運用拿到的商品資料 data 先計算總total
  let totalPrice= 0;
  for (let i = 0; i < data.length; i++) {
    totalPrice += parseInt(data[i].price)
  }
  return(
    <div className={styles.mainCart}>
      <p className={styles.mainCartTitle}>購物籃</p>
      {data.map((eachData) => <CartProduct key= {eachData.id} productNumber={eachData.quantity} productName={eachData.name} productPrice = {eachData.price} IMG={eachData.img}/>)
      }
      <TotalRow title='運費' content= '免費'/>
      <TotalRow title='小計' content= {totalPrice}/>
    </div>
  )
}