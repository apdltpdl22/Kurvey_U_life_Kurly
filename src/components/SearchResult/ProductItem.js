import React from 'react';
import PaymentButton from '../PaymentModal/PaymentButton'
import style from './product-item.module.css'

function ProductItem({item}) {
  return (
    <div id='ItemCard' className={style.ItemCard}>
      <img className={style.img} src={`/products/${item.id}.jpg`} alt="제품 이미지"/>
      <PaymentButton productId = {item.id}/>
      <p className={style.small_grey_font}>{item.earlyDelivery ? '샛별배송': ''}</p>
      <p className={style.black_product_name}>
        <span>{item.brand ? `[${item.brand}]` : ''}</span>
        {item.productName}
      </p>
      <h4 className={style.black_price}>
        <span>{item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>원
      </h4>
      <p className={style.small_grey_font}>{item.detail}</p>
    </div>
  );
}

export default ProductItem;