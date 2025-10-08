import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainBox = styled.div`
  text-align: center;
`;
export const Title = styled.div`
  font-size: 30px;
  padding: 0 0 20px 0;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputBox = styled.div`
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;
export const Input = styled.input`
  width: 400px;
  height: 40px;
  outline: none;
  padding: 0 10px;
  border-radius: 5px;
`;

export const Bt = styled.button`
  width: 300px;
  height: 50px;
  margin: 20px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #aeaeae;
  border-radius: 5px;
  transition: 0.2s;
  background: none;

  &:hover {
    color: #fff;
    background: #aeaeae;
    font-weight: 500;
    cursor: pointer;
  }
`;

export const Signup = styled(Link)`
  color: blue;
  text-decoration: underline;

  &:hover {
    cursor: pointer;
    color: #000;
  }
`;
