import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { searchModeSlice, searchQuerySlice } from '@/app/store';
import { BREAKPOINTS } from '@/shared/styles/breakpoints';
const Wrapper = styled.div`
  display: flex;
  margin: 0 30px 0 0;
  align-items: flex-end;

  color: #000;
  text-decoration: none;
`;
const Num = styled.div`
  padding: 0 30px 0 0;
  font-size: 50px;
  font-weight: 600;

  @media (max-width: ${BREAKPOINTS.laptop}) {
    font-size: 40px;
  }
`;
const Poster = styled.img`
  height: 500px;
  border-radius: 5px;
  box-shadow: 10px 5px 10px #aeaeae;
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: ${BREAKPOINTS.laptop}) {
    height: 300px;
  }
`;

const MoviePosterCard = (pr) => {
  const dispatch = useDispatch();

  const ToggleAndClear = () => {
    dispatch(searchModeSlice.actions.close());
    dispatch(searchQuerySlice.actions.clearQuery());
  };

  return (
    <Wrapper>
      <Num>{pr.index}</Num>
      <Link to={`/details/${pr.data.id}`} onClick={() => ToggleAndClear()}>
        <Poster src={`https://image.tmdb.org/t/p/w500${pr.data.poster_path}`} />
      </Link>
    </Wrapper>
  );
};

export default MoviePosterCard;
