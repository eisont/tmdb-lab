import { MoonSVG, SearchSVG } from '@/shared/assets/SVGicons/32pxIcon';
import { PlaySVG } from '@/shared/assets/SVGicons/40pxIcon';
import { useMovieList } from '@/api/movieHooks';
import * as S from './Navbar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { searchModeSlice, searchQuerySlice } from '@/app/store';
import { CloseSVG } from '@/shared/assets/SVGicons/24pxIcon';
import SearchMovieCard from '@/shared/ui/Card/SearchMovieCard';

const NavBar = () => {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.searchQuery);
  const data = useMovieList({ query: `https://api.themoviedb.org/3/search/movie?language=ko-KO&include_adult=false&query=${text}` });
  const toggle = useSelector((state) => state.searchMode);

  const ToggleAndClear = () => {
    dispatch(searchModeSlice.actions.close());
    dispatch(searchQuerySlice.actions.clearQuery());
  };

  return (
    <S.Wrapper>
      <S.MainBox>
        <S.FirstBox>
          <S.Logo to={'./'} onClick={() => dispatch(searchModeSlice.actions.close())}>
            {PlaySVG({ fill: '#000' })}
          </S.Logo>

          <S.BtBox>
            <S.Bt>로그인</S.Bt>
            <S.Bt>회원가입</S.Bt>
            <S.Icon>{MoonSVG({ stroke: '#000' })}</S.Icon>
            {toggle ? (
              <S.Icon onClick={() => ToggleAndClear()}>{CloseSVG({ stroke: '#000' })}</S.Icon>
            ) : (
              <S.Icon onClick={() => dispatch(searchModeSlice.actions.open())}>{SearchSVG({ stroke: '#000' })}</S.Icon>
            )}
          </S.BtBox>
        </S.FirstBox>
      </S.MainBox>

      {toggle && (
        <>
          <S.MainBox>
            <S.InputBox>
              <S.Icon style={{ marginRight: '10px' }}>{SearchSVG({ stroke: '#999' })}</S.Icon>
              <S.Input placeholder='제목를 입력하세요.' onChange={(e) => dispatch(searchQuerySlice.actions.setQuery(e.target.value))} />
            </S.InputBox>
          </S.MainBox>

          {text && (
            <S.SearchBox>
              {data?.map((el) => (
                <SearchMovieCard key={el.id} data={el} />
              ))}
            </S.SearchBox>
          )}
        </>
      )}
    </S.Wrapper>
  );
};

export default NavBar;
