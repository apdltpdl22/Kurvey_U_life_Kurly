import styles from './login.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {loginAccount, selectUser} from '../../features/user';
import axios from 'axios';
import {useInput} from '../../hooks/useInput';

export default function Login(props) {
  const [inputId, changeId] = useInput('');
  const [inputPw, changePw] = useInput('');
  const dispatch = useDispatch();
  const selector = useSelector(selectUser);

  // 로그인 버튼 클릭 이벤트
  const onSubmit = e => {
    e.preventDefault();
    if (inputId === '' || inputPw === '') {
      window.alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    const credentials = {
      id: inputId,
      pw: inputPw,
    };

    axios
      .post('url', credentials)
      .then(res => {
        console.log(res.data);
        // const userInfo = {
        //   isLogged: true,
        //   userName: 'name',
        //   userId: 'inputId',
        //   jwtToken : 'token'
        // }
        // dispatch(loginAccount(userInfo))
        // navigate('/login')
      })
      .catch(err => {
        console.log(err);
        const userInfo = {
          isLogged: true,
          userName: 'name',
          userId: inputId,
          jwtToken: 'token',
        };
        dispatch(loginAccount(userInfo));
        console.log('user', selector);
      });
  };

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>로그인</h2>
      <form className={styles.login}>
        <input type="text" placeholder="Username" value={inputId}  onChange={changeId}/>
        <input type="password" placeholder="Password" value={inputPw} onChange={changePw}/>
        <button type="submit" onSubmit={onSubmit}>
          Login
        </button>
      </form>
      <a href="/signup">Register Here</a>
    </div>
  );
}
