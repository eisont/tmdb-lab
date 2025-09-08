import { MoonSVG, SearchSVG } from '../../../shared/assets/SVGicons/32pxIcon';
import { PlaySVG } from '../../../shared/assets/SVGicons/40pxIcon';
import { useState } from 'react';
import { useMovieList } from '../../../api/movieHooks';
import MovieCard from '@/shared/ui/Card/MovieCard';
import * as S from './Navbar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { searchModeSlice } from '@/app/store';
import { CloseSVG } from '../../assets/SVGicons/24pxIcon';

const NavBar = () => {
  const [text, setText] = useState('');

  const data = useMovieList({ query: `https://api.themoviedb.org/3/search/movie?language=ko-KO&include_adult=false&query=${text}` });
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.toggleSearchMode);

  return (
    <S.Wrapper>
      <S.FirstBox>
        <S.Logo to={'./'}>{PlaySVG({ fill: '#000' })}</S.Logo>

        <S.BtBox>
          <S.Bt>로그인</S.Bt>
          <S.Bt>회원가입</S.Bt>
          <S.IconBox>{MoonSVG({ stroke: '#000' })}</S.IconBox>
          {toggle ? (
            <S.IconBox onClick={() => dispatch(searchModeSlice.actions.toggleSearchMode(false))}>{CloseSVG({ stroke: '#000' })}</S.IconBox>
          ) : (
            <S.IconBox onClick={() => dispatch(searchModeSlice.actions.toggleSearchMode(true))}>{SearchSVG({ stroke: '#000' })}</S.IconBox>
          )}
        </S.BtBox>
      </S.FirstBox>

      {toggle && (
        <>
          <S.InputBox>
            <S.IconBox>{SearchSVG({ stroke: '#999' })}</S.IconBox>
            <S.Input placeholder='제목를 입력하세요.' onChange={(e) => setText(e.target.value)} />
          </S.InputBox>
          <S.SearchBox>
            {data?.map((el) => (
              <MovieCard key={el.id} data={el} />
            ))}
          </S.SearchBox>
        </>
      )}
    </S.Wrapper>
  );
};

export default NavBar;
