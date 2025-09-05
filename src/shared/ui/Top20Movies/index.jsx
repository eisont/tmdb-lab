import MoviePsterCard from '@/shared/ui/MoviePsterCard';
import { movieListData } from '@/shared/mocks';
import styled from 'styled-components';

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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Top20Movies = () => {
  const TopListData = movieListData.results.filter((el) => el.poster_path);

  return (
    <Wrapper>
      <Title>평점순 TOP 20</Title>

      <MainBox>
        {TopListData.map((el, i) => (
          <MoviePsterCard key={el.id} movieList={el} index={i + 1} />
        ))}
      </MainBox>
    </Wrapper>
  );
};

export default Top20Movies;
