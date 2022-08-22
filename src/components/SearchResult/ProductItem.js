import React from 'react';
import style from './product-item.module.css';

function ProductItem({item, openModal}) {
  return (
    <div id="ItemCard" className={style.ItemCard}>
      <div className={style.imageBox}>
        <img
          className={style.img}
          src={`/products/${item.id}.jpg`}
          alt="제품 이미지"
        />

        <button type="button" onClick={()=>openModal(item.id)}>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
            alt="장바구니 아이콘"
          ></img>
        </button>
      </div>
      <p className={style.small_grey_font}>
        {item.deliveryType}
      </p>
      <p className={style.black_product_name}>
        {item.productName}
      </p>
      <h4 className={style.black_price}>
        <span>
          {item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </span>
        원
      </h4>
      <p className={style.small_grey_font}>{item.description}</p>
    </div>
  );
}

export default ProductItem;
