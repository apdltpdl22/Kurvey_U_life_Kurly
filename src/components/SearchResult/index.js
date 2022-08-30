import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  searchKeywordSelector,
  searchResultsSelector,
} from '../../features/search/searchSlice';
import {
  getProductAsync,
  resetProduct,
} from '../../features/product/productSlice';
import styles from './search-result.module.css';
import ProductList from './ProductList';
import {Link} from 'react-router-dom';
import Header from '../Header/Header';
import PaymentModal from '../PaymentModal';
import MySurveyModal from '../MySurveyModal';
import { getUserSurveyDetailAsync, getSurveyAsync } from '../../features/survey/surveySlice';

export default function SearchResult() {
  const [paymentModal, setPaymentModal] = useState(false);
  const [mySurveyModal, setMySurveyModal] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const stateKeyword = useSelector(searchKeywordSelector);
  const stateResults = useSelector(searchResultsSelector);

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getSurveyAsync());
    dispatch(getUserSurveyDetailAsync());
  },[dispatch])


  useEffect(() => {
    setSearchKeyword(stateKeyword);
    setSearchResults(stateResults);
  }, [stateKeyword, stateResults]);

  // 하드코딩 ver
  const openPaymentModal = productId => {
    dispatch(getProductAsync(productId));
    setPaymentModal(true);
  };

  const closeModal = () => {
    dispatch(resetProduct());
    setPaymentModal(false);
  };
  
  const openMySurveyModal = () => {
    setMySurveyModal(true);
  }
  const closeySurveyModal = () => {
    console.log('SurveyModal Close')
    setMySurveyModal(false);
  }

  // 장바구니 버튼 클릭 시 바로 구매
  return (
    <>
      <Header openMySurveyModal={openMySurveyModal} />
      <div id="seach_result_page" className={styles.board}>
        <div className={styles.searchResult}>
          <h2 className={styles.searchKeyword}>
            '<span>{searchKeyword}</span>'에 대한 검색결과
          </h2>

          <div id="searchLists" className={styles.searchLists}>
            {searchResults &&
              searchResults.map((list, index) => (
                <div className={styles.eachLists} key={index}>
                  <div className={styles.text_group}>
                    <h2>{list.category.name}</h2>
                    <Link
                      to={`./${list.category.id}`}
                      state={{
                        products: list.products,
                        searchKeyword: searchKeyword,
                        categoryName: list.category.name,
                      }}
                      className={styles.link}
                    >
                      <span>{list.category.name}제품 더 보기</span>
                    </Link>
                  </div>
                  <ProductList
                    key={index}
                    products={list.products.slice(0, 10)}
                    openModal={openPaymentModal}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
      {paymentModal && <PaymentModal close={closeModal} />}
      {mySurveyModal && <MySurveyModal close={closeySurveyModal} />}
    </>
  );
}
