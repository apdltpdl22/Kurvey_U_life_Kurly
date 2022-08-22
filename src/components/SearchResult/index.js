import { useState } from 'react';
import logo from '../../assets/png/kurly_logo.png';
import {useInput} from '../../hooks/useInput';
import styles from './search-result.module.css';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import PaymentModal from '../PaymentModal';
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

  const openPaymentModal = (productId) => {
    setProductId(productId);
    setPaymentModal(true);
  }

  // 장바구니 버튼 클릭 시 바로 구매
  return (
    <>
      <div id="seach_result_page" className={styles.board}>
        <div className={styles.login_signup_btns}>
          {/* 로그인 전 */}
          <ul id={styles.menu}>
            <li>
              <a href="/signup">회원가입</a>
            </li>
            <li>
              <a href="/login">로그인</a>
            </li>
          </ul>
          {/* 로그인 후 */}
          {/* <ul id={styles.menu}>
          <li>봄비 님</li>
          <li>로그아웃</li>
        </ul> */}
        </div>
        <div className={styles.header}>
          <div className={styles.logo_input_header}>
            <img className={styles.logo} src={logo} alt="마켓컬리 로고" />
            <button>마켓컬리</button>
            <button>뷰티컬리</button>
          </div>

          <div className={styles.search_bar}>
            <input
              id="gnb_search"
              placeholder="검색어를 입력해주세요"
              required=""
              value={searchInput}
              onChange={changeSearchInput}
            />
            <button></button>
          </div>

          <div className={styles.button_box}>
            <button>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8539 8.9716C16.9639 8.9716 16.0938 9.23552 15.3538 9.72999C14.6138 10.2245 14.037 10.9273 13.6964 11.7495C13.3558 12.5718 13.2667 13.4766 13.4404 14.3495C13.614 15.2224 14.0426 16.0242 14.6719 16.6536C15.3012 17.2829 16.1031 17.7115 16.976 17.8851C17.8489 18.0588 18.7537 17.9697 19.576 17.6291C20.3982 17.2885 21.101 16.7117 21.5955 15.9717C22.09 15.2316 22.3539 14.3616 22.3539 13.4716C22.3525 12.2785 21.878 11.1347 21.0344 10.2911C20.1907 9.4475 19.0469 8.97296 17.8539 8.9716ZM17.8539 15.7216C17.4089 15.7216 16.9739 15.5896 16.6039 15.3424C16.2338 15.0952 15.9455 14.7438 15.7752 14.3326C15.6049 13.9215 15.5603 13.4691 15.6471 13.0326C15.7339 12.5962 15.9482 12.1953 16.2629 11.8806C16.5776 11.5659 16.9785 11.3517 17.4149 11.2648C17.8514 11.178 18.3038 11.2226 18.7149 11.3929C19.1261 11.5632 19.4775 11.8516 19.7247 12.2216C19.9719 12.5916 20.1039 13.0266 20.1039 13.4716C20.1032 14.0681 19.8659 14.64 19.4441 15.0618C19.0223 15.4836 18.4504 15.7209 17.8539 15.7216Z"
                  fill="black"
                />
                <path
                  d="M26.5014 4.81749C24.3634 2.68002 21.5094 1.41028 18.4903 1.25332C15.4711 1.09636 12.5009 2.06332 10.1527 3.96757C7.8046 5.87182 6.24507 8.57837 5.77514 11.5648C5.30521 14.5513 5.95818 17.606 7.60803 20.1394L16.1093 33.1903C16.2985 33.4807 16.5572 33.7193 16.8619 33.8844C17.1666 34.0496 17.5077 34.1361 17.8543 34.1361C18.2009 34.1361 18.542 34.0496 18.8467 33.8844C19.1514 33.7193 19.4101 33.4807 19.5993 33.1903L28.1008 20.1394C29.6317 17.7893 30.3082 14.9845 30.017 12.1949C29.7259 9.40538 28.4846 6.80071 26.5014 4.81749ZM26.2156 18.9112L17.8543 31.7468L9.49297 18.9112C6.9336 14.9822 7.48253 9.72425 10.7982 6.40845C11.7248 5.48181 12.8249 4.74675 14.0356 4.24526C15.2463 3.74376 16.5439 3.48564 17.8543 3.48564C19.1648 3.48564 20.4624 3.74376 21.6731 4.24526C22.8838 4.74675 23.9838 5.48181 24.9105 6.40845C28.2261 9.72425 28.775 14.9822 26.2156 18.9112Z"
                  fill="black"
                />
              </svg>
            </button>
            <button>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.8601 5.556C31.024 4.71987 30.0313 4.05671 28.9388 3.6044C27.8462 3.1521 26.6753 2.91952 25.4928 2.91997C24.3103 2.92041 23.1395 3.15387 22.0473 3.60699C20.9551 4.06011 19.9629 4.72402 19.1274 5.56078L18.0368 6.66468L16.9553 5.56317L16.9482 5.55614C16.1125 4.7204 15.1204 4.05746 14.0284 3.60517C12.9365 3.15287 11.7662 2.92007 10.5843 2.92007C9.40236 2.92007 8.23203 3.15287 7.14009 3.60517C6.04816 4.05746 5.056 4.7204 4.22027 5.55614L3.73442 6.042C2.0466 7.72982 1.09839 10.019 1.09839 12.4059C1.09839 14.7929 2.0466 17.0821 3.73442 18.7699L16.5575 31.5929L18.0056 33.1101L18.0401 33.0755L18.0776 33.1129L19.4344 31.6814L32.346 18.7697C34.0313 17.0805 34.9777 14.7918 34.9777 12.4057C34.9777 10.0196 34.0313 7.73095 32.346 6.04179L31.8601 5.556ZM30.7547 17.1787L18.0401 29.8935L5.32531 17.1787C4.05945 15.9129 3.34829 14.196 3.34829 12.4058C3.34829 10.6156 4.05945 8.89869 5.32531 7.63282L5.81124 7.14696C7.07648 5.88172 8.79233 5.17062 10.5817 5.16995C12.371 5.16927 14.0874 5.87908 15.3536 7.14337L18.032 9.87058L20.7231 7.14696C21.3499 6.52016 22.094 6.02295 22.913 5.68373C23.7319 5.34451 24.6097 5.16991 25.4961 5.16991C26.3825 5.16991 27.2603 5.34451 28.0792 5.68373C28.8982 6.02295 29.6423 6.52016 30.2691 7.14696L30.7549 7.63275C32.0189 8.89966 32.7287 10.6162 32.7287 12.4058C32.7286 14.1954 32.0187 15.9119 30.7547 17.1787Z"
                  fill="black"
                />
              </svg>
            </button>
            <button>
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 6.75274V9.00274H32.625V13.4567L30.1289 21.3777H10.5421L7.72959 1.125H1.125V3.375H5.77041L8.58291 23.6277H31.779L34.875 13.8028V6.75274H11.25Z"
                  fill="black"
                />
                <path
                  d="M12.4443 25.8995C11.2513 25.9009 10.1075 26.3754 9.26385 27.2191C8.42024 28.0627 7.94569 29.2065 7.94434 30.3995C7.94434 31.593 8.41844 32.7376 9.26235 33.5815C10.1063 34.4254 11.2509 34.8995 12.4443 34.8995C13.6378 34.8995 14.7824 34.4254 15.6263 33.5815C16.4702 32.7376 16.9443 31.593 16.9443 30.3995C16.943 29.2065 16.4685 28.0627 15.6248 27.219C14.7812 26.3754 13.6374 25.9009 12.4443 25.8995ZM12.4443 32.6495C11.9993 32.6495 11.5643 32.5176 11.1943 32.2703C10.8243 32.0231 10.5359 31.6717 10.3656 31.2606C10.1953 30.8494 10.1508 30.397 10.2376 29.9606C10.3244 29.5241 10.5387 29.1232 10.8533 28.8085C11.168 28.4939 11.5689 28.2796 12.0054 28.1928C12.4418 28.106 12.8942 28.1505 13.3054 28.3208C13.7165 28.4911 14.0679 28.7795 14.3151 29.1495C14.5624 29.5195 14.6943 29.9545 14.6943 30.3995C14.6936 30.9961 14.4563 31.5679 14.0345 31.9897C13.6127 32.4115 13.0408 32.6488 12.4443 32.6495Z"
                  fill="black"
                />
                <path
                  d="M28.1943 25.8995C27.0013 25.9009 25.8575 26.3754 25.0139 27.2191C24.1702 28.0627 23.6957 29.2065 23.6943 30.3995C23.6943 31.593 24.1684 32.7376 25.0124 33.5815C25.8563 34.4254 27.0009 34.8995 28.1943 34.8995C29.3878 34.8995 30.5324 34.4254 31.3763 33.5815C32.2202 32.7376 32.6943 31.593 32.6943 30.3995C32.693 29.2065 32.2185 28.0627 31.3748 27.219C30.5312 26.3754 29.3874 25.9009 28.1943 25.8995ZM28.1943 32.6495C27.7493 32.6495 27.3143 32.5176 26.9443 32.2703C26.5743 32.0231 26.2859 31.6717 26.1156 31.2606C25.9453 30.8494 25.9008 30.397 25.9876 29.9606C26.0744 29.5241 26.2887 29.1232 26.6033 28.8085C26.918 28.4939 27.3189 28.2796 27.7554 28.1928C28.1918 28.106 28.6442 28.1505 29.0554 28.3208C29.4665 28.4911 29.8179 28.7795 30.0651 29.1495C30.3124 29.5195 30.4443 29.9545 30.4443 30.3995C30.4436 30.9961 30.2063 31.5679 29.7845 31.9897C29.3627 32.4115 28.7909 32.6488 28.1943 32.6495Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <div id="category_btn"></div>
        <div className={styles.searchResult}>
          <h2 className={styles.searchKeyword}>
            '<span>{searchKeyword}</span>'에 대한 검색결과
          </h2>

          <div id="searchLists" className={styles.searchLists}>
            {allProducts.map((list, index) => (
              <div className={styles.eachLists} key={index}>
                <div className={styles.text_group}>
                <h2>{list.category}</h2>
                <Link to={`./${list.category}`} state={{ products: list.products }}><span className={styles.link}>{list.category}제품 더 보기</span></Link>
                </div>
                <ProductList key={index} products={list.products.slice(0, 10)} openModal={openPaymentModal} />
              </div>
            ))}
          </div>
        </div>
      </div>
      { paymentModal && <PaymentModal productId={productId} close={() => setPaymentModal(false)}/>}
    </>
  );
}
