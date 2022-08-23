import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../features/user/userAction'
import { useEffect } from 'react'
import Error from '../Axios/Error'
import styles from './login.module.css'


export default function Login(props) {
  const { userInfo, error } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      console.log('로그인 성공')
      navigate('/')
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>로그인</h2>
      <form 
        onSubmit={handleSubmit(submitForm)} 
        className={styles.login}
      >
        {error && <Error>{error}</Error>}
        <label htmlFor='userId'>아이디</label>
        <input
          id='userId' name='userId'
          type="text"
          placeholder="아이디"
          {...register('userId')}
          required
        />
        <label htmlFor='password'>비밀번호</label>
        <input
          id='password' name='password'
          type="password"
          placeholder="비밀번호"
          {...register('password')}
          required
        />
        <button type="submit">
          로그인
        </button>
      </form>
      <div className={styles.aBox}>
        <a href="/signup">Register Here</a>
      </div>
    </div>
  );
}
