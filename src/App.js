import { useState } from 'react';
import { Link } from 'react-router-dom'
import SurveyModal from './components/SurveyModal';
import PaymentModal from './components/PaymentModal';

function App() {
  const [modal, setModal] = useState(false);
  const [payModal, setPayModal] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModal(!modal)} >설문조사 모달</button>
      {
        modal && <SurveyModal close={() => setModal(false)}/> 
      }

      <button onClick={() => setPayModal(!payModal)}>결제 모달</button>
      {
        payModal && <PaymentModal close={() => setPayModal(false)}/> 
      }
      
      <nav>
        <Link to='login'>Login</Link>
        <br/>
        <Link to='signup'>SignUp</Link>
        <br/>
        <Link to='search-result'>SearchResult</Link>
      </nav>
    </div>
  );
}

export default App;
