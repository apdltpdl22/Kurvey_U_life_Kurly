import { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {searchKeywordSelector, searchResultsSelector} from '../../features/search/searchSlice'
import styles from './search-result.module.css';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import PaymentModal from '../PaymentModal';
import Header from '../Header/Header'

export default function SearchResult() {
  const [paymentModal, setPaymentModal] = useState(false);
  const [productId, setProductId] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);  

  const stateKeyword = useSelector(searchKeywordSelector)
  const stateResults = useSelector(searchResultsSelector)

  useEffect(() => {
    setSearchKeyword(stateKeyword) 
    setSearchResults(stateResults)
  },[stateKeyword,stateResults])

  // const searchKeyword = useSelector(searchKeywordSelector)
  // const searchResults = useSelector(searchResultsSelector)


  // 하드코딩 ver
  const openPaymentModal = productId => {
    setProductId(productId);
    setPaymentModal(true);
  };

  // 장바구니 버튼 클릭 시 바로 구매
  return (
    <>
      <Header/>
      <div id="seach_result_page" className={styles.board}>
        <div className={styles.searchResult}>
          <h2 className={styles.searchKeyword}>
            '<span>{searchKeyword}</span>'에 대한 검색결과
          </h2>

          <div id="searchLists" className={styles.searchLists}>
            {searchResults && searchResults.map((list, index) => (
              <div className={styles.eachLists} 
              key={index}>
                <div className={styles.text_group}>
                <h2>{list.category.name}</h2>
                <Link to={`./${list.category}`} 
                      state={{ 
                        products: list.products, 
                        searchKeyword:searchKeyword 
                      }}  
                      className={styles.link}>
                  <span>{list.category}제품 더 보기</span></Link>
                </div>
                <ProductList key={index} 
                products={list.products.slice(0, 10)} 
                openModal={openPaymentModal} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {paymentModal && (
        <PaymentModal
          productId={productId}
          close={() => setPaymentModal(false)}
        />
      )}
    </>
  );
}
