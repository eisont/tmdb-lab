import styled from 'styled-components';
import { movieListData } from '@/shared/mocks';
import MovieCard from '@/shared/ui/MovieCard';

const Wrapper = styled.div`
  padding: 20px 0;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 600;
`;

const MainBox = styled.div`
  width: 100vw;
  gap: 30px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const PopularMovies = () => {
  const ListData = movieListData.results;

  return (
    <Wrapper>
      <Title>인기순</Title>

      <MainBox>
        {ListData.map((el) => (
          <MovieCard key={el.id} movieList={el} />
        ))}
      </MainBox>
    </Wrapper>
  );
};

export default PopularMovies;
