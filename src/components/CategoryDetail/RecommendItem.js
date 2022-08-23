import React from 'react';
import style from './recommend-item.module.css'
import defaultImg from '../../assets/jpg/default-image.jpg'


function RecommendItem({item}) {
  const onErrorImg = e => {
    e.target.src = defaultImg;
  };

  return (
    <div id='ItemCard' className={style.ItemCard}>
      <img 
      className={style.img} 
      src={item.imageUrl? item.imageUrl : defaultImg}
      alt="추천 제품 이미지"
      onError={onErrorImg}
      />
      <div  className={style.overlay}></div>
      <div className={style.middle}>
        <div className={style.text}>{item.productName}</div>
        <div className={style.text}>{item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
      </div>
    </div>
  );
}

export default RecommendItem;