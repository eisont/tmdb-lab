import { BREAKPOINTS } from '@/shared/styles/breakpoints';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgb(255, 255, 255, 0.9);
  z-index: 1;
`;
export const MainBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #fff;
  border-bottom: 1px solid gray;
`;
export const FirstBox = styled.div`
  width: 80%;
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

  @media (max-width: ${BREAKPOINTS.laptop}) {
    display: none;
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
  width: 80%;
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
  width: 80%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 50px;

  &::after {
    content: '';
    flex: auto;
  }

  @media (max-width: ${BREAKPOINTS.laptop}) {
    display: flex;
  }
`;
export const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  transition: 0.2s;

  background: gray;
`;
