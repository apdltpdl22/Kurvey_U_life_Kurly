import React from 'react';
import style from './product-item.module.css'

function ProductItem({item}) {
  return (
    <div>
      <img 
        className={style.img} src={`/products/${item.id}.jpg`}/>
      <p className={style.small_grey_font}>{item.earlyDelivery ? '샛별배송': ''}</p>
      <p className={style.black_product_name}>
        <span>{item.brand ? `[${item.brand}]` : ''}</span>
        {item.productName}
      </p>
      <h4 className={style.black_price}>
        <span>{item.price}</span>원
      </h4>
      <p className={style.small_grey_font}>{item.detail}</p>
    </div>
  );
}

export default ProductItem;