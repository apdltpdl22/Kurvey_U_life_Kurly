import { useState } from 'react';
import { Link } from 'react-router-dom'
import SurveyModal from './components/SurveyModal';

function App() {
  const [modal, setModal] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setModal(!modal)} >모달</button>
      {/* <SurveyModal open={modal} close={() => setModal(false)}/> */}
      {
        modal && <SurveyModal close={() => setModal(false)}/> 
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
