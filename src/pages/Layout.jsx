import { Route, Routes } from 'react-router-dom';
import NavBar from '@/shared/layouts/Navbar';
import Top20Movies from '@//shared/ui/Top20Movies';
import PopularMovies from '@/shared/ui/PopularMovies';
import MovieDetail from '@/pages/MovieDetail';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #000;
`;

const MainBox = styled.div`
  padding: 100px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Layout = () => {
  return (
    <Wrapper>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <MainBox>
              <Top20Movies />
              <PopularMovies />
            </MainBox>
          }
        />
        <Route path='/details/:id' element={<MovieDetail />} />
      </Routes>
    </Wrapper>
  );
};

export default Layout;
