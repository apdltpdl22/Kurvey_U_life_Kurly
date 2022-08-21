import React, { useState, useEffect } from 'react';
import styles from './login.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { loginAccount, selectUser } from '../../features/user'
import axios from 'axios'

export default function Login(props) {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
  const dispatch = useDispatch()
  const selector = useSelector(selectUser);

  // Input에 값 들어올 때 변수 update
  const handleInputId = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }
  
  // 로그인 버튼 클릭 이벤트
  const onClickLogin = (e) => {
    e.preventDefault();
    if (inputId === "" || inputPw === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.")
      return;
    }
    
    const credentials = {
      id: inputId,
      pw: inputPw
    }

    axios.post('url', credentials)
    .then(res => {
      console.log(res.data)
      // const userInfo = {
      //   isLogged: true,
      //   userName: 'name',
      //   userId: 'inputId',
      //   jwtToken : 'token'
      // }
      // dispatch(loginAccount(userInfo))
      // navigate('/login')
    })
    .catch(err=> {
      console.log(err)
      const userInfo = {
        isLogged: true,
        userName: 'name',
        userId: inputId,
        jwtToken : 'token'
      }
      dispatch(loginAccount(userInfo))
      console.log('user', selector)
    })
  }

  return (
    <div className={styles.LoginBox}>
      <div className={styles.Contents}>
        <h2 className='title'>Login</h2>
        <div>
          <label htmlFor='input_id'>ID: </label>
          <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
        </div>
        <div>
          <label htmlFor='input_pw'>PW: </label>
          <input type='text' name='input_pw' value={inputPw} onChange={handleInputPw} />
        </div>
        <div>
          <button type='button' onClick={onClickLogin}>Login</button>
        </div>
      </div>
    </div>
  );
}