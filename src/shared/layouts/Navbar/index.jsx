import { useMovieSearchList } from '@/api/movieHooks';
import * as S from './Navbar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { MenuSVG, MoonSVG, SearchSVG, PlaySVG, CloseSVG } from '@/shared/assets/SVGicons';
import { useState } from 'react';
import { searchModeSlice, searchQuerySlice } from '@/shared/store';
import SearchMovieCard from '@/shared/ui/Card/SearchMovieCard';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const text = useSelector((state) => state.searchQuery);

  const data = useMovieSearchList({ query: `https://api.themoviedb.org/3/search/movie?language=ko-KO&include_adult=false&query=${text}`, text: text });

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
            {PlaySVG({ fill: '#000', size: 60 })}
          </S.Logo>

          <S.BtBox>
            <S.Bt to='/login'>로그인</S.Bt>
            <S.Bt to='/signup'>회원가입</S.Bt>
            {/* <S.Icon>{MoonSVG({ size: '32', stroke: '#000' })}</S.Icon> */}
            {toggle ? (
              <S.Icon onClick={() => ToggleAndClear()}>{CloseSVG({ size: '32', stroke: '#000' })}</S.Icon>
            ) : (
              <S.Icon onClick={() => dispatch(searchModeSlice.actions.open())}>{SearchSVG({ size: '32', stroke: '#000' })}</S.Icon>
            )}
            {/* <S.MenuIcon className='tablet' onClick={() => setIsMenuOpen(true)}>
              {MenuSVG({ size: '40', stroke: '#000' })}
            </S.MenuIcon> */}
          </S.BtBox>
        </S.FirstBox>
      </S.MainBox>

      {toggle && (
        <>
          <S.MainBox>
            <S.InputBox>
              <S.Icon style={{ marginRight: '10px' }}>{SearchSVG({ size: '32', stroke: '#999' })}</S.Icon>
              <S.Input placeholder='제목를 입력하세요.' onChange={(e) => dispatch(searchQuerySlice.actions.setQuery(e.target.value))} />
            </S.InputBox>
          </S.MainBox>

          {text && (
            <S.SearchBox>
              {data?.map((el) => (
                <SearchMovieCard key={el.id} data={el} width='200px' height='300px' fontSize='20px' />
              ))}
            </S.SearchBox>
          )}
        </>
      )}
      {isMenuOpen && (
        <S.Box>
          <S.Icon onClick={() => setIsMenuOpen(false)} style={{ padding: '20px' }}>
            {CloseSVG({ size: '24', stroke: '#fff' })}
          </S.Icon>
        </S.Box>
      )}
    </S.Wrapper>
  );
};

export default NavBar;
