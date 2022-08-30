import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import SurveyModal from './components/SurveyModal';
import PaymentModal from './components/PaymentModal';
import {useDispatch} from 'react-redux';
import {getSurveyAsync,getUserSurveyDetailAsync} from './features/survey/surveySlice';
import MySurveyModal from './components/MySurveyModal';

function App() {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [payModal, setPayModal] = useState(false);
  const [mySurveyModal, setMySurveyModal] = useState(false);

  useEffect(() => {
    dispatch(getSurveyAsync());
    dispatch(getUserSurveyDetailAsync());
  }, [dispatch]);

  return (
    <div className="App">
      <button onClick={() => setModal(!modal)}>설문조사 모달</button>
      {modal && <SurveyModal close={() => setModal(false)} />}

      <button onClick={() => setPayModal(!payModal)}>결제 모달</button>
      {payModal && <PaymentModal close={() => setPayModal(false)} />}

      <button onClick={() => setMySurveyModal(!mySurveyModal)}>
        자신의 라이프 스타일 모달
      </button>
      {mySurveyModal && <MySurveyModal close={() => setMySurveyModal(false)} />}

      <nav>
        <Link to="login">Login</Link>
        <br />
        <Link to="signup">SignUp</Link>
        <br />
        <Link to="/search-result">SearchResult</Link>
      </nav>
    </div>
  );
}

export default App;
