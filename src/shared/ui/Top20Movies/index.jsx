import MoviePosterCard from '@/shared/ui/Top20Movies/MoviePosterCard';
import { movieListData } from '@/shared/mocks';
import styled from 'styled-components';

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
  overflow-x: scroll;
`;
const Title = styled.div`
  padding: 20px 0;
  font-size: 40px;
  font-weight: 600;
`;
const MoviesList = styled.div`
  display: flex;
  align-items: center;
`;

const Top20Movies = () => {
  const Data = movieListData.results.filter((el) => el.poster_path);

  return (
    <Wrapper>
      <MainBox>
        <Title>평점순 TOP 20</Title>

        <MoviesList>
          {Data.map((el, i) => (
            <MoviePosterCard key={el.id} data={el} index={i + 1} />
          ))}
        </MoviesList>
      </MainBox>
    </Wrapper>
  );
};

export default Top20Movies;
