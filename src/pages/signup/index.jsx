import * as S from './signup.styled';

const Signup = () => {
  return (
    <S.Wrapper>
      <S.MainBox>
        <S.Title>회원가입</S.Title>
        <S.Form>
          <S.InputBox>
            <label htmlFor='name'>이름</label>
            <S.Input id='name' type='text' placeholder='이름을 입력하세요.' required />
            <label htmlFor='email'>이메일</label>
            <S.Input id='email' type='email' placeholder='이메일을 입력하세요.' required />
            <label htmlFor='password'>비밀번호</label>
            <S.Input id='password' type='password' placeholder='비밀번호를 입력하세요.' required />
            <label htmlFor='password'>비밀번호 확인</label>
            <S.Input id='password' type='password' placeholder='비밀번호를 입력하세요.' required />
          </S.InputBox>
          <S.Bt>회원가입</S.Bt>
        </S.Form>
      </S.MainBox>
    </S.Wrapper>
  );
};

export default Signup;
