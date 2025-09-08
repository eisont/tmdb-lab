import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;

  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgb(255, 255, 255, 0.9);
`;
export const MainBox = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
  border-bottom: 1px solid gray;
`;
export const FirstBox = styled.div`
  width: 1200px;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled(Link)`
  text-decoration: none;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;

  :hover {
    scale: 1.1;
    cursor: pointer;
  }
`;
export const BtBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Bt = styled.div`
  margin: 0 10px;
  padding: 10px 20px;
  border: 1px solid gray;
  color: gray;
  font-size: 18px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #000;
    color: #fff;
  }
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const InputBox = styled.div`
  width: 1200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
`;
export const Input = styled.input`
  width: 1000px;
  height: 40px;

  font-size: 20px;
  border: none;
  outline: none;
`;

export const SearchBox = styled.div`
  padding: 20px 0;
  width: 1200px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;

  &::after {
    content: '';
    flex: auto;
  }
`;
