import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { PopularMovieFetch } from '../../../api/tmbc';
import { PlaySVG } from '../../assets/SVGicons/40pxIcon';
import MovieCard from '../Card/MovieCard';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  * {
    color: ${(pr) => (pr.$isDarkMode ? '#fff' : '#000')};
  }
`;
const MainBox = styled.div`
  margin: 40px 0 0 0;
  width: 1200px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Head = styled.div`
  padding: 15px 0;
  font-size: 25px;
  font-weight: 600;
`;
const Box = styled.div`
  height: 1180px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  overflow: scroll;
`;

const SimilarMovies = () => {
  const isDarkMode = useSelector((state) => state.setDarkMode);
  const params = useParams();

  const ListData = PopularMovieFetch({ query: `https://api.themoviedb.org/3/movie/${params.id}/similar?language=ko-KO&page=1`, enabled: true });

  return (
    <Wrapper $isDarkMode={isDarkMode}>
      <MainBox>
        <Head>비슷한 영화</Head>

        <Box>
          {ListData?.map((el) => (
            <MovieCard key={el.id} data={el} />
          ))}
        </Box>
      </MainBox>
    </Wrapper>
  );
};

export default SimilarMovies;
