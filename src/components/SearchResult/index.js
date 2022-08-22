import React, { useState, useEffect } from 'react';
import logo from '../../assets/png/kurly_logo.png';
import styles from './search-result.module.css'
import ProductList from './ProductList';
import RecommendList from './RecommendList';
// import axios from 'axios';

export default function SearchResult(props) {
  // const [recommendations, setRecommendations] = useState([])
  // const [allProducts, setAllProducts] = useState([])
  // useEffect(() => {axios}, [searchKeyword])

  // 하드코딩 ver
  const searchKeyword = '사과';
  const recommendations = [
    {
      id: 1,
      productName: '[프레벨롱]국산 과일로 만든 퓨레 9종',
      price: 4500
    },
    {
      id: 2,
      productName: '[돈시몬]과일 주스 1L 3종',
      price: 5480
    },
    {
      id: 3,
      productName: '[올프레쉬] 컷팅과일 145g(소)',
      price: 3990
    },
    {
      id: 4,
      productName: '[미아논나] 애플잠봉 샌드위치',
      price: 0
    },
    {
      id: 5,
      productName: '[돈시몬]과일 주스 1L 3종',
      price: 5480
    },
    {
      id: 6,
      productName: '[파스키에]노르망디 타르트',
      price: 9980
    },
    {
      id: 7,
      productName: '[채움]국산과채주스 4종',
      price: 12600
    },
  ]
  const allProducts = [
    {
      category:'과일',
      products : 
      [
        {
          id: 101, earlyDelivery: true, 
          brand:null, productName:'아오리 사과 1.5kg(10입내)', price:0, detail:'풋풋한 매력 가득한 제철 사과' 
        },
        {
          id: 102, earlyDelivery: true, 
          brand:null, productName:'GAP 사과', price:0, detail:'깨끗히 자란 유기농 사과' 
        },
        {
          id: 103, earlyDelivery: true, 
          brand:'선물세트', productName:'프리미엄 과일 바구니 세트', price:0, detail:'클래식한 느낌을 담은 과일 선물' 
        },
        {
          id: 104, earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 105, earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 106, earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 107, earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
      ]
    },
    {
      category:'음료',
      products : 
      [
        {
          id: 101, earlyDelivery: true, 
          brand:null, productName:'아오리 사과 1.5kg(10입내)', price:0, detail:'풋풋한 매력 가득한 제철 사과' 
        },
        {
          id: 102, earlyDelivery: true, 
          brand:null, productName:'GAP 사과', price:0, detail:'깨끗히 자란 유기농 사과' 
        },
        {
          id: 103, earlyDelivery: true, 
          brand:'선물세트', productName:'프리미엄 과일 바구니 세트', price:0, detail:'클래식한 느낌을 담은 과일 선물' 
        },
        {
          id: 104, earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 105, earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 106, earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 107, earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
      ]
    },
    {
      category:'과자',
      products : 
      [
        {
          id: 101, earlyDelivery: true, 
          brand:null, productName:'아오리 사과 1.5kg(10입내)', price:0, detail:'풋풋한 매력 가득한 제철 사과' 
        },
        {
          id: 102, earlyDelivery: true, 
          brand:null, productName:'GAP 사과', price:0, detail:'깨끗히 자란 유기농 사과' 
        },
        {
          id: 103, earlyDelivery: true, 
          brand:'선물세트', productName:'프리미엄 과일 바구니 세트', price:0, detail:'클래식한 느낌을 담은 과일 선물' 
        },
        {
          id: 104, earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 105, earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 106, earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 107, earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
      ]
    },
  ];

  // 장바구니 버튼 클릭 시 바로 구매
  

  return (
    <div id='board' className={styles.board}>
      {/* <header></header> */}
      <div id='' className={styles.searchResult}>
        <h2 className={styles.searchKeyword}>'<span>{searchKeyword}</span>'에 대한 검색결과</h2>
        <div id='Recommend' className={styles.Recommend}>
          <h2>라이프스타일 맞춤 추천</h2>
          {/* card carousel with hover */}
          <RecommendList products={recommendations}/>
        </div>

        <div id='searchLists' className={styles.searchLists}>
          {allProducts.map((list) =>
          <div className={styles.eachLists}>
              <h2>{list.category}</h2>
              <ProductList products = {list.products}/>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}