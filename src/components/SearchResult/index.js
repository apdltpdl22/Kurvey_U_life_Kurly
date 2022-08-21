import React, { useState, useEffect } from 'react';
import logo from '../../assets/png/kurly_logo.png';
import styles from './search-result.module.css'
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
      detail: '',
      price: 0
    },
    {
      id: 2,
      detail: '',
      price: 0
    },
    {
      id: 3,
      detail: '',
      price: 0
    },
    {
      id: 4,
      detail: '',
      price: 0
    },
    {
      id: 5,
      detail: '',
      price: 0
    },
    {
      id: 6,
      detail: '',
      price: 0
    },
  ]
  const allProducts = [
    {
      category:'과일',
      products : 
      [
        {
          id: 101, imgSrc : '', earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 102, imgSrc : '', earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 103, imgSrc : '', earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 104, imgSrc : '', earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 105, imgSrc : '', earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 106, imgSrc : '', earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 107, imgSrc : '', earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
      ]
    },
    {
      category:'음료',
      products : 
      [
        {
          id: 201, imgSrc : '', earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 202, imgSrc : '', earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 203, imgSrc : '', earlyDelivery: true, 
          brand:null, productName:'', price:0, detail:'' 
        },
        {
          id: 204, imgSrc : '', earlyDelivery: true, 
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
        <div id='recommendation' className={styles.list}>
          <h3>라이프스타일 맞춤 추천</h3>
          {/* card carousel with hover */}
        </div>

        <div id='search_results'>
        {allProducts.map((list) => 
          <div id='result'>
            <div id='item_list'>
              <h3 id='item_category'>{list.category}</h3>
              {list.products.map((product) => 
                <p id='item_photos'>{product.name}</p>
              )}
            </div>
            <br/>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}