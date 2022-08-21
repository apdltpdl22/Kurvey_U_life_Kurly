import React, {useState, useRef} from 'react';
import styles from './signup.module.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useInput} from '../../hooks/useInput';

export default function SignUp(props) {
  const [inputId, changeId] = useInput('');
  const [inputPw, changePw] = useInput('');
  const [inputPwChk, changePwChk] = useInput('');
  const [inputName, changeName] = useInput('');
  const [inputBirthDate, changeBirth] = useInput('');
  const [inputGender, changeGender] = useInput('');

  const navigate = useNavigate();

  // 에러 발생시 에러 메시지 출력
  const [error, setError] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  // 회원가입 버튼 클릭 이벤트
  // 유효성 검사
  const id = useRef();
  const pw = useRef();
  const pw_chk = useRef();
  const username = useRef();
  const birth_date = useRef();

  const onClickSignUp = e => {
    console.log(inputBirthDate);

    if (inputId === '') {
      id.current.focus();
      setErrorMsg('아이디를 적어주세요.');
      return;
    }
    if (inputPw === '') {
      pw.current.focus();
      setErrorMsg('비밀번호를 적어주세요.');
      return;
    }
    if (inputPwChk === '') {
      pw_chk.current.focus();
      setErrorMsg('비밀번호 확인란을 적어주세요.');
      return;
    }

    if (inputBirthDate === '' || inputGender === '' || inputName === '') {
      setErrorMsg('모든 칸의 정보를 입력해주세요.');
      return;
    }

    if (inputPwChk !== inputPw) {
      pw_chk.current.focus();
      setErrorMsg('비밀번호가 다릅니다.');
      return;
    }

    const credentials = {
      inputId,
      inputPw,
      inputPwChk,
      inputName,
      inputBirthDate,
      inputGender,
    };
    setError(false);

    console.log(credentials);
    axios
      .post('url', credentials)
      .then(res => {
        console.log(res.data);
        navigate('/login');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={styles.SignUpBox}>
      <h2 className={styles.title}>회원가입</h2>
      <div>
        <div>
          <label htmlFor="input_id">ID: </label>
          <input
            ref={id}
            id="input_id"
            type="text"
            name="input_id"
            value={inputId}
            onChange={changeId}
          />
        </div>
        <div>
          <label htmlFor="input_pw">PW: </label>
          <input
            ref={pw}
            id="input_pw"
            type="password"
            name="input_pw"
            value={inputPw}
            onChange={changePw}
          />
        </div>
        <div>
          <label htmlFor="input_pw_chk">패스워드 확인: </label>
          <input
            ref={pw_chk}
            id="input_pw_chk"
            type="password"
            name="input_pw_chk"
            value={inputPwChk}
            onChange={changePwChk}
          />
        </div>
        <div>
          <label htmlFor="input_name">이름: </label>
          <input
            ref={username}
            id="input_name"
            type="text"
            name="input_name"
            value={inputName}
            onChange={changeName}
          />
        </div>
        <div>
          <label htmlFor="input_birthDate">생년월일: </label>
          <input
            ref={birth_date}
            id="input_birthDate"
            type="date"
            name="input_birthDate"
            value={inputBirthDate}
            onChange={changeBirth}
          />
        </div>
        <div>
          <label htmlFor="input_gender">성별: </label>
          <label htmlFor="female">여성</label>
          <input
            id="female"
            type="radio"
            name="input_gender"
            value="female"
            className={styles.radio}
            onChange={changeGender}
            checked={inputGender === 'female' ? true : false}
          />
          <label htmlFor="male">남성</label>
          <input
            id="male"
            type="radio"
            name="input_gender"
            value="male"
            className={styles.radio}
            onChange={changeGender}
            checked={inputGender === 'male' ? true : false}
          />
        </div>
        <div>
          <button type="button" onClick={onClickSignUp}>
            회원가입
          </button>
        </div>
        <p>{error ? errorMsg : null}</p>
      </div>
    </div>
  );
}
