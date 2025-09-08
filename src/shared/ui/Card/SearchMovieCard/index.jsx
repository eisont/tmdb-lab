import { Link } from 'react-router-dom';
import { PlaySVG } from '@/shared/assets/SVGicons';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { searchModeSlice, searchQuerySlice } from '@/app/store';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;
const Poster = styled.img`
  width: 200px;
  height: 300px;
  display: block;
  border-radius: 5px;
  box-shadow: 10px 5px 10px #aeaeae;
`;
const FontBox = styled(Link)`
  width: 200px;
  height: 300px;
  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  text-decoration: none;

  opacity: 0;
  transition: opacity 0.3s ease;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`;
const Font = styled.div`
  text-align: center;
  font-size: 20px;
  color: #fff;
`;

const FlexBox = styled.div`
  width: 200px;
  height: 300px;
  background: rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchMovieCard = (pr) => {
  const dispatch = useDispatch();
  const ToggleAndClear = () => {
    dispatch(searchModeSlice.actions.close());
    dispatch(searchQuerySlice.actions.clearQuery());
  };
  return (
    <Wrapper>
      {pr.data.poster_path ? <Poster src={`https://image.tmdb.org/t/p/w500${pr.data.poster_path}`} alt={pr.data.title} /> : <FlexBox>{PlaySVG({ fill: '#fff' })}</FlexBox>}
      <FontBox to={`/details/${pr.data.id}`} onClick={() => ToggleAndClear()}>
        <Font>{pr.data.title}</Font>
      </FontBox>
    </Wrapper>
  );
};

export default SearchMovieCard;
