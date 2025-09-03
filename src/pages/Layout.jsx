import NavBar from '../app/layouts/NavBar';
import Top20Movies from '../app/layouts/Top20Movies';
import PopularMovies from '../app/layouts/PopularMovies';
import styled from 'styled-components';
import { movieDetailData } from '../shared/mocks';
import { Route, Routes } from 'react-router-dom';
import MovieDetail from '../shared/ui/MovieDetail';

const Wrapper = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Layout = () => {
  const DetailData = movieDetailData;

  return (
    <Wrapper>
      <NavBar />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <MainBox>
                <Top20Movies />
                <PopularMovies />
              </MainBox>
            </>
          }
        />
        <Route path='/details/:id' element={<MovieDetail DetailData={DetailData} />} />
      </Routes>
    </Wrapper>
  );
};

export default Layout;
