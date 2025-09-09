import { Link } from 'react-router-dom';
import { PlaySVG } from '@/shared/assets/SVGicons';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { searchModeSlice, searchQuerySlice } from '@/app/store';
import { BREAKPOINTS } from '@/shared/styles/breakpoints';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Poster = styled.img`
  width: ${(pr) => pr.width};
  height: ${(pr) => pr.height};
  display: block;
  border-radius: 5px;

  @media (max-width: ${BREAKPOINTS.laptop}) {
    height: ${(pr) => (pr.height === '500px' ? '300px' : '200px')};
  }
`;
const FlexBox = styled.div`
  height: ${(pr) => pr.height};
  background: rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FontBox = styled(Link)`
  width: ${(pr) => pr.width};
  height: ${(pr) => pr.height};
  position: absolute;
  top: 0;

  display: flex;
  flex-direction: column;
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

  @media (max-width: ${BREAKPOINTS.laptop}) {
    width: ${(pr) => (pr.width === '350px' ? '200px' : '133px')};
    height: ${(pr) => (pr.height === '500px' ? '300px' : '200px')};
  }
`;
const Font = styled.div`
  padding: ${(pr) => `${pr.fontSize} 0`};
  text-align: center;
  font-size: ${(pr) => pr.fontSize};
  color: #fff;
  font-weight: 600;
`;

const Rating = styled.div`
  font-size: 18px;
  color: #fff;

  font-size: ${(pr) => pr.fontSize * 0.8};
`;

const SearchMovieCard = (pr) => {
  const dispatch = useDispatch();
  const ToggleAndClear = () => {
    dispatch(searchModeSlice.actions.close());
    dispatch(searchQuerySlice.actions.clearQuery());
  };
  return (
    <Wrapper width={pr.width}>
      {pr.data.poster_path ? <Poster src={`https://image.tmdb.org/t/p/w500${pr.data.poster_path}`} alt={pr.data.title} height={pr.height} /> : <FlexBox>{PlaySVG({ fill: '#fff' })}</FlexBox>}
      <FontBox to={`/details/${pr.data.id}`} onClick={() => ToggleAndClear()} width={pr.width} height={pr.height}>
        <Font fontSize={pr.fontSize}>{pr.data.title}</Font>

        <Rating fontSize={pr.fontSize}>평점: {pr.data.vote_average}</Rating>
      </FontBox>
    </Wrapper>
  );
};

export default SearchMovieCard;
