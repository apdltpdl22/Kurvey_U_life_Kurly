import styles from './payment-modal.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {
  productSelector,
  purchaseProductAsync,
} from '../../features/product/productSlice';

export default function PaymentModal({close}) {
  const product = useSelector(productSelector).product;
  const dispatch = useDispatch();

  const purchase = () => {
    dispatch(purchaseProductAsync(product.id));
  };

  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles.modalWrap}>
        <div className={styles.modalHeader}>{product && product.name}</div>
        <div className={styles.itemBox}>
          <div className={styles.itemHeader}>
            <span>{product && product.description}</span>
          </div>
          <div className={styles.itemPrice}>
            <span>
              {product && product.cost && product.cost.toLocaleString()}원
            </span>
          </div>
        </div>
        <div className={styles.sumPriceBox}>
          <p>합계</p>
          <div className={styles.priceBox}>
            <span>
              {product && product.cost && product.cost.toLocaleString()}
            </span>
            <span>원</span>
          </div>
        </div>
        <div className={styles.buttonBox}>
          <button onClick={close}>취소</button>
          <button onClick={purchase}>구매</button>
        </div>
      </div>
    </div>
  );
}
