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
  const [inputGender, changeGender] = useInput('female');

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
    console.log(inputGender)

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
    setError(false);

    const credentials = {
      inputId,
      inputPw,
      inputPwChk,
      inputName,
      inputBirthDate,
      inputGender,
    };

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
    <div className={styles.wrap}>
      <h2 className={styles.title}>회원가입</h2>
      <div className={styles.register}>
        <input
          ref={id}
          id="input_id"
          type="text"
          name="input_id"
          placeholder="아이디를 입력해주세요"
          value={inputId}
          onChange={changeId}
        />
        <input
          ref={pw}
          id="input_pw"
          type="password"
          name="input_pw"
          placeholder="비밀번호를 입력해주세요"
          value={inputPw}
          onChange={changePw}
        />
        <input
          ref={pw_chk}
          id="input_pw_chk"
          type="password"
          name="input_pw_chk"
          placeholder="비밀번호를 확인해주세요"
          value={inputPwChk}
          onChange={changePwChk}
        />
        <input
          ref={username}
          id="input_name"
          type="text"
          name="input_name"
          placeholder="이름을 입력해주세요"
          value={inputName}
          onChange={changeName}
        />
        <div className={styles.inputBox}>
          <label htmlFor="input_birthDate">생년월일</label>
          <input
            ref={birth_date}
            id="input_birthDate"
            type="date"
            name="input_birthDate"
            value={inputBirthDate}
            onChange={changeBirth}
          />
        </div>

        <div className={styles.inputBox}>
          <label>성별</label>
          <div className={styles.select}>
            <select value={inputGender} onChange={changeGender}>
              <option value="female">여성</option>
              <option value="male">남성</option>
            </select>
          </div>
        </div>

        <button type="button" onClick={onClickSignUp}>
          회원가입
        </button>

        <p>{error ? errorMsg : null}</p>
      </div>

      <a href="/login">Login Here</a>
    </div>
  );
}
