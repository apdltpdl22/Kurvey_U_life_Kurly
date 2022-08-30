import React, {useState, useEffect, useRef} from 'react';
import RecommendList from './RecommendList';
import {useParams, useLocation, useNavigate} from 'react-router-dom';
import styles from './category-detail.module.css';
import PaymentModal from '../PaymentModal';
import MySurveyModal from '../MySurveyModal';
import Header from '../Header/Header';
import defaultImg from '../../assets/jpg/default-image.jpg';
import {useDispatch, useSelector} from 'react-redux';
import {
  searchKeywordSelector,
} from '../../features/search/searchSlice';
import {
  getProductAsync,
  resetProduct,
} from '../../features/product/productSlice';
import axios from 'axios';

function CategoryDetail(props) {
  const [paymentModal, setPaymentModal] = useState(false);
  const [mySurveyModal, setMySurveyModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [categoryName, setCategoryName] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const accessToken = localStorage.getItem('userToken')
  const {categoryId} = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const isInitialMount = useRef(true);
  const stateKeyword = useSelector(searchKeywordSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      navigate(-1);
      console.log('뒤로가기');
    } // eslint-disable-next-line
  }, [stateKeyword]);

  useEffect(() => {
    setProducts(location.state.products);
    setSearchKeyword(location.state.searchKeyword);
    setCategoryName(location.state.categoryName);

    console.log('token:', accessToken, 'category:', categoryId)
    axios.get(`/api/v1/recommend/${categoryId}`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : true,
        Authorization: `Bearer ${accessToken}`
      }     
    })
    .then(res => {
      setRecommendations(res.data.products)
      console.log('recommends: ',res.data.products)
    })
    .catch(err => {
      // console.log('err', err.response.status)
      console.log('err', err.message)
    })
  }, [location, accessToken, categoryId]);

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

  const closeMySurveyModal = () => {
    setMySurveyModal(true);
  }

  const onErrorImg = e => {
    e.target.src = defaultImg;
  };
  
  return (
    <>
      <Header openMySurveyModal={openMySurveyModal}/>
      <div className={styles.board}>
        <h2 className={styles.searchKeyword}>
          '<span>{searchKeyword}</span>'에 대한 검색결과
        </h2>
        <div id="Recommend" className={styles.Recommend}>
          <h2 className={styles.RecommendWords}>라이프스타일 맞춤 추천</h2>
          <div className={styles.RecommendList}>
            <RecommendList products={recommendations} />
          </div>
        </div>
        <div>
          <h2>{categoryName}에 해당하는 제품들</h2>
          <div id="ItemList" className={styles.ItemList}>
            {products.map((item, index) => (
              <div id="ItemCard" className={styles.ItemCard} key={index}>
                <div className={styles.imageBox}>
                  <img
                    className={styles.img}
                    src={item.imageUrl ? item.imageUrl : defaultImg}
                    alt="제품 이미지"
                    onError={onErrorImg}
                  />
                  <button
                    type="button"
                    onClick={() => openPaymentModal(item.id)}
                  >
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDUiIGhlaWdodD0iNDUiIHZpZXdCb3g9IjAgMCA0NSA0NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBmaWxsPSIjMkEwMDM4IiBvcGFjaXR5PSIuNSIgY3g9IjIyLjUiIGN5PSIyMi41IiByPSIyMi41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMDMgMTQuMzgpIiBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0ibTIwLjQ2IDIuOTEtMi4xNyA5LjIzSDUuODdMMy43MSAyLjkxeiIvPgogICAgICAgICAgICA8Y2lyY2xlIHN0cm9rZS13aWR0aD0iMS4yIiBjeD0iMTYuMzUiIGN5PSIxNi44NiIgcj0iMS43Ii8+CiAgICAgICAgICAgIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIxLjIiIGN4PSI3LjgyIiBjeT0iMTYuODYiIHI9IjEuNyIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNCIgZD0iTTAgMGgzLjAybDEuNDEgNS45OCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
                      alt="장바구니 아이콘"
                    />
                  </button>
                </div>
                <p className={styles.small_grey_font}>{item.deliveryType}</p>
                <p className={styles.black_product_name}>{item.productName}</p>
                <h4 className={styles.black_price}>
                  <span>
                    {item.cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                  원
                </h4>
                <p className={styles.small_grey_font}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {paymentModal && <PaymentModal close={closeModal} />}
      {mySurveyModal && <MySurveyModal close={closeMySurveyModal} />}
    </>
  );
}

export default CategoryDetail;
