import React, { useState, useEffect, useRef } from 'react';
import styles from './signup.module.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function SignUp(props) {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
  const [inputPwChk, setInputPwChk] = useState('')

  const navigate = useNavigate()

  // 에러 발생시 에러 메시지 출력
  const [error, setError] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')

  // Input에 값 들어올 때 변수 update
  const handleInputId = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }

  const handleInputPwChk = (e) => {
    setInputPwChk(e.target.value)
  }
  
  // 회원가입 버튼 클릭 이벤트
  // 유효성 검사
  const id = useRef();
  const pw = useRef();
  const pw_chk = useRef();

  const onClickSignUp = (e) => {
    if (inputId === ""){
      id.current.focus()
      setErrorMsg('아이디를 적어주세요.')
      return;
    }
    if (inputPw === ""){
      pw.current.focus()
      setErrorMsg('비밀번호를 적어주세요.')
      return;
    }
    if (inputPwChk === ""){
      pw_chk.current.focus()
      setErrorMsg('비밀번호 확인란을 적어주세요.')
      return;
    }
    if (inputPwChk !== inputPw){
      pw_chk.current.focus()
      setErrorMsg('비밀번호가 다릅니다.')
      return;
    }
    const credentials = {
      inputId, inputPw, inputPwChk
    }
    axios.post('url', credentials)
    .then(res => {
      navigate('/login')
    })
    .catch(err=> {
      console.log(err)
    })
  }

  return (
    <div className={styles.SignUpBox}>
      <h2 className={styles.title}>회원가입</h2>
      <div className={styles.contents}>
        <div>
          <label htmlFor='input_id'>ID: </label>
          <input ref={id} type='text' name='input_id' value={inputId} onChange={handleInputId} />
        </div>
        <div>
          <label htmlFor='input_pw'>PW: </label>
          <input ref={pw} type='text' name='input_pw' value={inputPw} onChange={handleInputPw} />
        </div>
        <div>
          <label htmlFor='input_pw_chk'>패스워드 확인: </label>
          <input ref={pw_chk} type='text' name='input_pw_chk' value={inputPwChk} onChange={handleInputPwChk} />
        </div>
        <div>
          <button type='button' onClick={onClickSignUp}>회원가입</button>
        </div>
        <p>{ error ? (errorMsg) : null}</p>
      </div>
    </div>
  );
}