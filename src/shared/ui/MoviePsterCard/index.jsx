import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 100px;
`;
const MainBox = styled(Link)`
  width: 200px;
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
const FlexBox = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Num = styled.div`
  padding: 0 20px 0 0;
  font-size: 50px;
  font-weight: 600;
`;
const Poster = styled.img`
  height: 500px;
  border-radius: 5px;
  box-shadow: 10px 5px 10px #aeaeae;
`;

const MoviePsterCard = (pr) => {
  return (
    <Wrapper>
      <MainBox to={`/details/${pr.movieList.id}`}>
        <FlexBox>
          <Num>{pr.index}</Num>
          <Poster src={`https://image.tmdb.org/t/p/w500${pr.movieList.poster_path}`} />
        </FlexBox>
      </MainBox>
    </Wrapper>
  );
};

export default MoviePsterCard;
