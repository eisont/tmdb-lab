import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 10px;
  color: #000;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`;
const Poster = styled.img`
  height: 500px;
  border-radius: 5px;
  box-shadow: 10px 5px 10px #aeaeae;
`;
const Title = styled.div`
  padding: 10px 0;
  font-size: 25px;
  font-weight: 600;
`;
const Rating = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MovieCard = (pr) => {
  return (
    <Wrapper to={`/details/${pr.movieList.id}`}>
      <Poster src={`https://image.tmdb.org/t/p/w500${pr.movieList.poster_path}`} />
      <FlexBox>
        <Title>{pr.movieList.title}</Title>
        <Rating>평점: {pr.movieList.vote_average}</Rating>
      </FlexBox>
    </Wrapper>
  );
};

export default MovieCard;
