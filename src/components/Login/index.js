import React, { useState, useEffect } from 'react';
import styles from './login.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { loginAccount } from '../../features/user'
import axios from 'axios'

export default function Login(props) {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

  // Input에 값 들어올 때 변수 update
  const handleInputId = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }
  
  // 로그인 버튼 클릭 이벤트
  const onClickLogin = () => {
    if (inputId === "" || inputPw === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.")
      return;
    }
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