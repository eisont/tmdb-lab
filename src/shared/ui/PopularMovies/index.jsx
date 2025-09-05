import styled from 'styled-components';
import { movieListData } from '@/shared/mocks';
import MovieCard from '@/shared/ui/PopularMovies/MovieCard';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  padding: 20px 0;
  font-size: 40px;
  font-weight: 600;
`;
const MoviesList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const PopularMovies = () => {
  const Data = movieListData.results;

  return (
    <Wrapper>
      <MainBox>
        <Title>인기순</Title>

        <MoviesList>
          {Data.map((el) => (
            <MovieCard key={el.id} data={el} />
          ))}
        </MoviesList>
      </MainBox>
    </Wrapper>
  );
};

export default PopularMovies;
