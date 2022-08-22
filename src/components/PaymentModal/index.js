import styles from './payment-modal.module.css';

export default function PaymentModal({productId, close}) {
  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles.modalWrap}>
        <div className={styles.modalHeader}>
          [탄단지] 가벼운 한식 도시락 6종
        </div>
        <div className={styles.itemBox}>
          <div className={styles.itemHeader}>
            <span>
              [탄단지] 게살볶음밥&amp;참치오믈렛
            </span>
          </div>
          <div className={styles.itemPrice}>
              <span>4,300원</span>
          </div>
        </div>
        <div className={styles.sumPriceBox}>
            <p>합계</p>
            <div className={styles.priceBox}>
                <span>0</span>
                <span>원</span>
            </div>
        </div>
        <div className={styles.buttonBox}>
            <button onClick={close}>
                취소
            </button>
            <button>
                구매
            </button>
        </div>
      </div>
    </div>
  );
}
