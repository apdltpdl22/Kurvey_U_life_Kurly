import React from 'react';
import style from './recommend-item.module.css'

function RecommendItem({item}) {
  return (
    <div id='ItemCard' className={style.ItemCard}>
      <img className={style.img} src={`/products/${item.id}.jpg`}/>
      <div  className={style.overlay}></div>
      <div className={style.middle}>
        <div className={style.text}>{item.productName}</div>
        <div className={style.text}>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
      </div>
    </div>
  );
}

export default RecommendItem;