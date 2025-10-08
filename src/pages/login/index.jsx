import * as S from './login.styled';

const Login = () => {
  return (
    <S.Wrapper>
      <S.MainBox>
        <S.Title>로그인</S.Title>
        <S.Form>
          <S.InputBox>
            <label htmlFor='email'>이메일</label>
            <S.Input id='email' type='email' placeholder='이메일을 입력하세요.' required />
            <label htmlFor='password'>비밀번호</label>
            <S.Input id='password' type='password' placeholder='비밀번호를 입력하세요.' required />
          </S.InputBox>
          <S.Bt>로그인</S.Bt>
        </S.Form>
        <div>
          이 사이트에 처음이신가요? <S.Signup to='/signup'>회원가입</S.Signup>
        </div>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default Login;
