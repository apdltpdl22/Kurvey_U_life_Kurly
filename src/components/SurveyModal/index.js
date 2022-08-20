// export default function SurveyModal({open, close}) {
//     return (
//         open ? <h1 onClick={close}>안녕</h1> : null
//     )
// }
import {useState} from 'react';

import styles from './survey-modal.module.css';

import VeganSrc from '../../assets/png/vegan.png';
import BakeSrc from '../../assets/png/bake.png';
import CocktailSrc from '../../assets/png/cocktail.png';
import DumbbellSrc from '../../assets/png/dumbbell.png';
import EnvironmentalismSrc from '../../assets/png/environmentalism.png';
import SugarFreeSrc from '../../assets/png/sugar-free.png';
import SupplementSrc from '../../assets/png/supplement.png';

export default function SurveyModal({close}) {
  const [family, setFamily] = useState(null);
  const [isBaby, setIsBaby] = useState(false);
  const [isDog, setIsDog] = useState(false);
  const [isCat, setIsCat] = useState(false);
  const [isPlant, setIsPlant] = useState(false);
  const [lifeStyles, setLifeStyles] = useState(new Set());

  const submit = () => {
    console.log(family, isBaby, isDog, isCat, isPlant);
    console.log(lifeStyles);
    close();
  };

  const lifeStyleOnClick = id => {
    const buttonGroup = document.querySelectorAll('.lifeStyleButton');
    const colors = ['#483674', '#674ea7', '#b3a6d3'];
    // console.log('buttonGroup', buttonGroup)

    const fakeItems = lifeStyles;

    if (fakeItems.has(id)) fakeItems.delete(id);
    else if (fakeItems.size === 3) return false;
    else fakeItems.add(id);

    setLifeStyles(fakeItems);

    if (lifeStyles) {
      let colorIndex = 0;

      lifeStyles.forEach(index => {
        const ele = buttonGroup[index];
        ele.style.backgroundColor = colors[colorIndex];
        ele.style.color = '#fff';

        colorIndex++;
      });

      buttonGroup.forEach((ele, index) => {
        if (!lifeStyles.has(index)) {
          ele.style.backgroundColor = '#fff';
          ele.style.color = '#000';
          ele.style.border = '1.5px solid #929292';
        }
      });
    }
  };

  return (
    <div id="myModal" className={styles.modal}>
      <div className={styles.modalContent}>
        <div className={styles.inputBox}>
          가족은 구성원이 몇 명인가요?
          <input
            type="number"
            className={styles.inputNumber}
            onChange={e => setFamily(e.target.value)}
          />
          명
        </div>
        <div className={styles.inputBox}>
          영유아 자녀가 있나요?
          <input
            type="checkbox"
            id="check1"
            checked={isBaby}
            onChange={e => setIsBaby(e.target.checked)}
          />
          <label htmlFor="check1"></label>
        </div>
        <div className={styles.inputBox}>
          반려 생물이 있나요?
          <div className={styles.checkBoxGroup}>
            <div>
              🐶 강아지
              <input
                type="checkbox"
                id="dog"
                checked={isDog}
                onChange={e => setIsDog(e.target.checked)}
              />
              <label htmlFor="dog"></label>
            </div>
            <div>
              😺 고양이
              <input
                type="checkbox"
                id="cat"
                checked={isCat}
                onChange={e => setIsCat(e.target.checked)}
              />
              <label htmlFor="cat"></label>
            </div>
            <div>
              🌿 반려식물
              <input
                type="checkbox"
                id="plant"
                checked={isPlant}
                onChange={e => setIsPlant(e.target.checked)}
              />
              <label htmlFor="plant"></label>
            </div>
          </div>
        </div>
        <div className={styles.inputBox}>
          자신의 생활과 가장 관련 있는 주제를 순서대로 3가지 골라주세요.
          {/* 버튼 OR 체크박스 */}
          {/* <div> */}
          <div className={styles.lifeStyleBox}>
            <button
              onClick={() => lifeStyleOnClick(0)}
              className="lifeStyleButton"
            >
              <img src={VeganSrc} alt="채식주의 일러스트" />
              <p>채식주의</p>
            </button>
            <button
              onClick={() => lifeStyleOnClick(1)}
              className="lifeStyleButton"
            >
              <img src={BakeSrc} alt="베이킹 일러스트" />
              <p>베이킹</p>
            </button>
            <button
              onClick={() => lifeStyleOnClick(2)}
              className="lifeStyleButton"
            >
              <img src={CocktailSrc} alt="애주가 일러스트" />
              <p>애주가</p>
            </button>
            <button
              onClick={() => lifeStyleOnClick(3)}
              className="lifeStyleButton"
            >
              <img src={DumbbellSrc} alt="운동 일러스트" />
              <p>운동</p>
            </button>
          </div>
          <div className={styles.lifeStyleBox}>
            <button
              onClick={() => lifeStyleOnClick(4)}
              className="lifeStyleButton"
            >
              <img src={EnvironmentalismSrc} alt="친환경 일러스트" />
              <p>친환경</p>
            </button>
            <button
              onClick={() => lifeStyleOnClick(5)}
              className="lifeStyleButton"
            >
              <img src={SugarFreeSrc} alt="저당식품 일러스트" />
              <p>저당식품</p>
            </button>
            <button
              onClick={() => lifeStyleOnClick(6)}
              className="lifeStyleButton"
            >
              <img src={SupplementSrc} alt="건강식품 일러스트" />
              <p>건강식품</p>
            </button>
          </div>
          {/* </div> */}
        </div>
        <button className={styles.save} onClick={submit}>
          저장
        </button>
      </div>
    </div>
  );
}
