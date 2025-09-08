import MoviePosterCard from '@/shared/ui/Card/MoviePosterCard';
import styled from 'styled-components';
import { useTop20Movies } from '@/api/movieHooks';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 0, 0, 0.1);
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
  const topMovie = useTop20Movies({ query: 'https://api.themoviedb.org/3/discover/movie?language=ko-KO&include_adult=false&sort_by=vote_count.desc&with_genres=' });

  return (
    <Wrapper>
      <MainBox>
        <Title>평점순 TOP 20</Title>

        <MoviesList>
          {topMovie?.map((el, i) => (
            <MoviePosterCard key={el.id} data={el} index={i + 1} />
          ))}
        </MoviesList>
      </MainBox>
    </Wrapper>
  );
};

export default Top20Movies;
