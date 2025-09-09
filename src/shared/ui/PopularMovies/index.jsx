import styled from 'styled-components';
import { useMovieList } from '@/api/movieHooks';
import SearchMovieCard from '../Card/SearchMovieCard';

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
  gap: 20px;
`;

const PopularMovies = () => {
  const popularMovie = useMovieList({ query: 'https://api.themoviedb.org/3/discover/movie?language=ko-KO&include_adult=false&sort_by=popularity.desc&page=1&with_genres=' });

  return (
    <Wrapper>
      <MainBox>
        <Title>인기순</Title>

        <MoviesList>
          {popularMovie?.map((el) => (
            <SearchMovieCard key={el.id} data={el} width='350px' height='500px' fontSize='30px' />
          ))}
        </MoviesList>
      </MainBox>
    </Wrapper>
  );
};

export default PopularMovies;
