import React, { useState } from 'react';
import logo from '../../assets/png/kurly_logo.png';
import styles from './search-result.module.css'

export default function SearchResult(props) {
  const [recommendations, setRecommendations] = useState([])
  const all_products = [
    {
      category:'생수.음료.우유.커피',
      products : ['a100', 'a101', 'a102']
    },
    {
      category:'과일.견과.쌀',
      products : ['a201', 'a202', 'a203']
    }
  ];

  return (
    <div id='seach_result_page' className={styles.board}>
      <div id='login_signup_btns'></div>
      <div id='logo_input_header'>
        <img className={styles.logo} src={logo}/>
      </div>
      <div id='category_btn'></div>
      <div id='recommendation'>
        <h2>라이프스타일 맞춤 추천</h2>
        {/* card carousel with hover */}
      </div>
      <div id='search_results'>
      {all_products.map((element) => 
        <div id='result'>
          <div id='item_list'>
            <h2 id='item_category'>{element.category}</h2>
            {element.products.map((product) => 
              <p id='item_photos'>{product}</p>
            )}
          </div>
          <br/>
        </div>
      )}
      </div>
    </div>
  );
}