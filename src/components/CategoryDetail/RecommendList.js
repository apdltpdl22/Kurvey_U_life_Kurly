import React from 'react';
import Item from './RecommendItem'
import styles from './recommend-list.module.css'
import Carousel from 'react-multi-carousel';

function RecommendList({products}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5// optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const userToken = localStorage.getItem('userToken')

  return (
    <div>
      {userToken && products.length !== 0 ? (   
        <Carousel className={styles.RecommendList}
        responsive={responsive}
        swipeable={false}
        draggable={false}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        >
        {products && products.map((item, index) => 
          <Item item={item} key={index}/>
        )}
      </Carousel>
      ) : products.length === 0 ? (
        <>
        <h2 className={styles.Prowords}>이 제품 카테고리에 대한 </h2>
        <h2 className={styles.Prowords}>추천 제품이 없습니다.</h2>
        </>
      ) : userToken ? (
        <>
      <h2 className={styles.Prowords}>아직 라이프스타일이 닮은 사람을 찾지 못했네요!</h2>
      <h2 className={styles.Prowords}>더 많은 친구들에게 마켓컬리를 소개해주세요</h2>
      </>
      ) : 
      (<h2 className={styles.Prowords}>로그인을 해서 더 많은 추천 상품을 확인하세요!</h2>) }

  </div>
  );
}

export default RecommendList;