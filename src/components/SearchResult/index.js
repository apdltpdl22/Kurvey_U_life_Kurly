import {useState} from 'react';
import logo from '../../assets/png/kurly_logo.png';
import {useInput} from '../../hooks/useInput';
import styles from './search-result.module.css';
import ProductList from './ProductList';
import {Link} from 'react-router-dom';
import PaymentModal from '../PaymentModal';
import Header from '../Header/Header'

// import axios from 'axios';

export default function SearchResult() {
  // const [recommendations, setRecommendations] = useState([])
  // const [allProducts, setAllProducts] = useState([])
  // useEffect(() => {axios}, [searchKeyword])
  const [searchInput, changeSearchInput] = useInput('');
  const [paymentModal, setPaymentModal] = useState(false);
  const [productId, setProductId] = useState(null);

  // 하드코딩 ver
  const searchKeyword = '사과';
  const allProducts = [
    {
      category: '과일',
      products: [
        {
          id: 101,
          deliveryType: '새벽배송',
          productName: '아오리 사과 1.5kg(10입내)',
          cost: 0,
          description: '풋풋한 매력 가득한 제철 사과',
        },
        {
          id: 102,
          deliveryType: true,
          productName: 'GAP 사과',
          cost: 0,
          description: '깨끗히 자란 유기농 사과',
        },
        {
          id: 103,
          deliveryType: '새벽배송',
          productName: '[선물세트]프리미엄 과일 바구니 세트',
          cost: 0,
          description: '클래식한 느낌을 담은 과일 선물',
        },
        {
          id: 104,
          deliveryType: '새벽배송',
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 105,
          deliveryType: '새벽배송',
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 106,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 107,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 108,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 109,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 110,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 111,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 112,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 113,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 114,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
      ],
    },
    {
      category: '음료',
      products: [
        {
          id: 101,
          deliveryType: '새벽배송',
          productName: '아오리 사과 1.5kg(10입내)',
          cost: 0,
          description: '풋풋한 매력 가득한 제철 사과',
        },
        {
          id: 102,
          deliveryType: '새벽배송',
          productName: 'GAP 사과',
          cost: 0,
          description: '깨끗히 자란 유기농 사과',
        },
        {
          id: 103,
          deliveryType: true,
          brand: '선물세트',
          productName: '프리미엄 과일 바구니 세트',
          cost: 0,
          description: '클래식한 느낌을 담은 과일 선물',
        },
        {
          id: 104,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 105,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 106,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 107,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
      ],
    },
    {
      category: '과자',
      products: [
        {
          id: 101,
          deliveryType: '낮배송',
          productName: '아오리 사과 1.5kg(10입내)',
          cost: 12000,
          description: '풋풋한 매력 가득한 제철 사과',
        },
        {
          id: 102,
          deliveryType: '새벽배송',
          productName: 'GAP 사과',
          cost: 0,
          description: '깨끗히 자란 유기농 사과',
        },
        {
          id: 103,
          deliveryType: true,
          brand: '선물세트',
          productName: '프리미엄 과일 바구니 세트',
          cost: 0,
          description: '클래식한 느낌을 담은 과일 선물',
        },
        {
          id: 104,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 105,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 106,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
        {
          id: 107,
          deliveryType: true,
          productName: '',
          cost: 0,
          description: '',
        },
      ],
    },
  ];

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
            {allProducts.map((list, index) => (
              <div className={styles.eachLists}>
                <div className={styles.categoryHeader}>
                  <h2>{list.category}</h2>
                  <Link
                    to={`./${list.category}`}
                    state={{products: list.products}}
                  >
                    <span className={styles.link}>
                      {list.category}제품 더 보기
                    </span>
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
      {paymentModal && (
        <PaymentModal
          productId={productId}
          close={() => setPaymentModal(false)}
        />
      )}
    </>
  );
}
