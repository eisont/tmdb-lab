import styled from 'styled-components';
import NavBar from '../app/layouts/NavBar';
import { movieDetailData, movieListData } from '../shared/mocks';
import MovieCard from '../shared/ui/MovieCard';
import { Route, Routes } from 'react-router-dom';
import MovieDetail from '../shared/ui/MovieDetail';

const Wrapper = styled.div`
  width: 100vw;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const MainBox = styled.div`
  width: 100vw;
  gap: 30px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const App = () => {
  const data = movieListData.results;
  const DetailData = movieDetailData;

  return (
    <Wrapper>
      <NavBar />
      <MainBox>
        <Routes>
          <Route
            path='/'
            element={
              <>
                {data.map((el) => (
                  <MovieCard movieList={el} />
                ))}
              </>
            }
          />
          <Route path='/details/:id' element={<MovieDetail DetailData={DetailData} />} />
        </Routes>
      </MainBox>
    </Wrapper>
  );
};

export default App;
