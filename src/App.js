import { useState } from 'react';
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
    </div>
  );
}

export default App;
