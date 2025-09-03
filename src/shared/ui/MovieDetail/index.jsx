import * as S from './MovieDetail.styled';

const MovieDetail = (pr) => {
  return (
    <S.Wrapper $bg={`https://image.tmdb.org/t/p/w500${pr.DetailData.backdrop_path}`}>
      <S.MainBox>
        <S.RBox>
          <div style={{ display: 'flex' }}>
            <S.Title>{pr.DetailData.title}</S.Title>
            <S.Text>별점: {pr.DetailData.vote_average}</S.Text>
          </div>
          <S.Text style={{ display: 'flex' }}>
            장르:
            {pr.DetailData.genres.map((el) => (
              <div style={{ padding: '0 3px' }} key={el.name}>
                {el.name},
              </div>
            ))}
          </S.Text>
          <S.Text>상영시간: {pr.DetailData.runtime}</S.Text>
          <S.Text>줄거리: {pr.DetailData.overview}</S.Text>
          <S.Text>출연:</S.Text>
        </S.RBox>
        <S.Poster src={`https://image.tmdb.org/t/p/w500${pr.DetailData.poster_path}`} />
      </S.MainBox>
    </S.Wrapper>
  );
};

export default MovieDetail;
