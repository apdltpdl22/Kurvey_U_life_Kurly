import React from 'react';
import RecommendList from './RecommendList';
import {useParams, useLocation} from 'react-router-dom'
import styles from './category-detail.module.css'

function CategoryDetail(props) {
  const recommendations = [
    {
      id: 1,
      productName: '[프레벨롱]국산 과일로 만든 퓨레 9종',
      cost: 4500,
    },
    {
      id: 2,
      productName: '[돈시몬]과일 주스 1L 3종',
      cost: 5480,
    },
    {
      id: 3,
      productName: '[올프레쉬] 컷팅과일 145g(소)',
      cost: 3990,
    },
    {
      id: 4,
      productName: '[미아논나] 애플잠봉 샌드위치',
      cost: 0,
    },
    {
      id: 5,
      productName: '[돈시몬]과일 주스 1L 3종',
      cost: 5480,
    },
    {
      id: 6,
      productName: '[파스키에]노르망디 타르트',
      cost: 9980,
    },
    {
      id: 7,
      productName: '[채움]국산과채주스 4종',
      cost: 12600,
    },
  ];

  const {category} = useParams();
  const location = useLocation();
  const products = location.state.products
  console.log(products, category)

  return (
    <>
      <h1>{category}제품들</h1>
      <div id="Recommend" className={styles.Recommend}>
        <h2>라이프스타일 맞춤 추천</h2>
        <RecommendList products={recommendations} />
      </div>
    </>
  );
}

export default CategoryDetail;