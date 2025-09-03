import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url(${(pr) => pr.$bg});
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: '';
    width: 100vw;
    height: 100vh;
  }
`;
export const MainBox = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  border: 1px solid red;
`;
export const Poster = styled.img`
  height: 500px;

  border-radius: 5px;
`;

export const RBox = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 18px;

  color: #fff;
`;
export const Title = styled.div`
  padding: 10px 0;
  font-size: 50px;
  font-weight: 600;
`;
export const Text = styled.div`
  padding: 5px 0;
`;
