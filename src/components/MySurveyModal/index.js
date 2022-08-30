import {useEffect} from 'react';
import styles from './my-survey-modal.module.css';
import {useSelector} from 'react-redux';
import {mySurveySelector, surveySelector} from '../../features/survey/surveySlice';

const MySurveyModal = ({close}) => {
  const surveyList = useSelector(surveySelector).data;
  const mySurvey = useSelector(mySurveySelector);

  console.log('mySurvey',mySurvey)

  useEffect(()=> {
    const buttonGroup = document.querySelectorAll('.lifeStyleButton');
    const colors = ['#483674', '#674ea7', '#b3a6d3'];

    const selectedLifeStyle = mySurvey.selects;

    let colorIndex = 0;
    selectedLifeStyle.forEach(element => {
      const ele = buttonGroup[element-1];
      ele.style.backgroundColor = colors[colorIndex];
      ele.style.color = '#fff';
      ele.style.border = 'none'

      colorIndex++;
    });
  }, [mySurvey])

  return (
    <div id="myModal" className={styles.modal}>
      <form className={styles.modalContent}>
        <div className={styles.closeButton}>
          <button type="button" onClick={close}>
            X
          </button>
        </div>
        <div className={styles.inputBox}>
          가족은 구성원이 몇 명인가요?
          <input type="number" className={styles.inputNumber} value={mySurvey.numberOfFamily} required readOnly/>명
        </div>
        <div className={styles.inputBox}>
          영유아 자녀가 있나요?
          <input type="checkbox" id="check1" checked={mySurvey.hasBaby} readOnly/>
          <label htmlFor="check1"></label>
        </div>
        <div className={styles.inputBox}>
          반려 생물이 있나요?
          <div className={styles.checkBoxGroup}>
            <div>
              🐶 강아지
              <input type="checkbox" id="dog" checked={mySurvey.hasDog} readOnly/>
              <label htmlFor="dog"></label>
            </div>
            <div>
              😺 고양이
              <input type="checkbox" id="cat" checked={mySurvey.hasCat} readOnly/>
              <label htmlFor="cat"></label>
            </div>
            <div>
              🌿 반려식물
              <input type="checkbox" id="plant" checked={mySurvey.hasPlant} readOnly/>
              <label htmlFor="plant"></label>
            </div>
          </div>
        </div>
        <div className={styles.inputBox}>
          자신의 생활과 가장 관련 있는 주제를 순서대로 3가지 골라주세요.
          {/* 버튼 OR 체크박스 */}
          <div className={styles.lifeStyleBox}>
            <button type="button" className="lifeStyleButton">
              <img
                src={surveyList[0].imageUrl}
                alt={surveyList[0].question + '일러스트'}
              />
              <p>{surveyList[0].question}</p>
            </button>{' '}
            <button type="button" className="lifeStyleButton">
              <img
                src={surveyList[1].imageUrl}
                alt={surveyList[1].question + '일러스트'}
              />
              <p>{surveyList[1].question}</p>
            </button>{' '}
            <button type="button" className="lifeStyleButton">
              <img
                src={surveyList[2].imageUrl}
                alt={surveyList[2].question + '일러스트'}
              />
              <p>{surveyList[2].question}</p>
            </button>{' '}
            <button type="button" className="lifeStyleButton">
              <img
                src={surveyList[3].imageUrl}
                alt={surveyList[3].question + '일러스트'}
              />
              <p>{surveyList[3].question}</p>
            </button>
          </div>
          <div className={styles.lifeStyleBox}>
            <button type="button" className="lifeStyleButton">
              <img
                src={surveyList[4].imageUrl}
                alt={surveyList[4].question + '일러스트'}
              />
              <p>{surveyList[4].question}</p>
            </button>{' '}
            <button type="button" className="lifeStyleButton">
              <img
                src={surveyList[5].imageUrl}
                alt={surveyList[5].question + '일러스트'}
              />
              <p>{surveyList[5].question}</p>
            </button>{' '}
            <button type="button" className="lifeStyleButton">
              <img
                src={surveyList[6].imageUrl}
                alt={surveyList[6].question + '일러스트'}
              />
              <p>{surveyList[6].question}</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MySurveyModal;
