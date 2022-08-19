// export default function SurveyModal({open, close}) {
//     return (
//         open ? <h1 onClick={close}>안녕</h1> : null
//     )
// }

import styles from './survey-modal.module.css';

import VeganSrc from '../../assets/png/vegan.png';
import BakeSrc from '../../assets/png/bake.png';
import CocktailSrc from '../../assets/png/cocktail.png';
import DumbbellSrc from '../../assets/png/dumbbell.png';
import EnvironmentalismSrc from '../../assets/png/environmentalism.png';
import SugarFreeSrc from '../../assets/png/sugar-free.png';
import SupplementSrc from '../../assets/png/supplement.png';

export default function SurveyModal({close}) {
  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.inputBox}>
          가족은 구성원이 몇 명인가요?
          <input type="number" className={styles.inputNumber} />명
        </div>
        <div className={styles.inputBox}>
          영유아 자녀가 있나요?
          <input type="checkbox" id="check1" />
          <label htmlFor="check1"></label>
        </div>
        <div className={styles.inputBox}>
          반려 생물이 있나요?
          <div className={styles.checkBoxGroup}>
            <div>
              🐶 강아지
              <input type="checkbox" id="dog" />
              <label htmlFor="dog"></label>
            </div>
            <div>
              😺 고양이
              <input type="checkbox" id="cat" />
              <label htmlFor="cat"></label>
            </div>
            <div>
              🌿 반려식물
              <input type="checkbox" id="plant" />
              <label htmlFor="plant"></label>
            </div>
          </div>
        </div>
        <div className={styles.inputBox}>
          자신의 생활과 가장 관련 있는 주제를 순서대로 3가지 골라주세요.
          {/* 버튼 OR 체크박스 */}
          {/* <div> */}
            <div className={styles.lifeStyleBox}>
              <button>
                <img src={VeganSrc} alt="채식주의 일러스트" />
                <p>채식주의</p>
              </button>
              <button>
                <img src={BakeSrc} alt="베이킹 일러스트" />
                <p>베이킹</p>
              </button>
              <button>
                <img src={CocktailSrc} alt="애주가 일러스트" />
                <p>애주가</p>
              </button>
              <button>
                <img src={DumbbellSrc} alt="운동 일러스트" />
                <p>운동</p>
              </button>
            </div>
            <div className={styles.lifeStyleBox}>
              <button>
                <img src={EnvironmentalismSrc} alt="친환경 일러스트" />
                <p>친환경</p>
              </button>
              <button>
                <img src={SugarFreeSrc} alt="저당식품 일러스트" />
                <p>저당식품</p>
              </button>
              <button>
                <img src={SupplementSrc} alt="건강식품 일러스트" />
                <p>건강식품</p>
              </button>
            </div>
          {/* </div> */}
        </div>
        <button className={styles.save} onClick={close}>저장</button>
      </div>
    </div>
  );
}
