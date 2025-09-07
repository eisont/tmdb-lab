import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CastingFetch } from '../../../api/tmbc';
import { useParams } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainBox = styled.div`
  width: 1200px;
  margin: 0 0 20px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Head = styled.div`
  padding: 15px 0;
  font-size: 25px;
  font-weight: 600;
  color: ${(pr) => (pr.$isDarkMode ? '#fff' : '#000')};
`;
const Box = styled.div`
  width: 1200px;

  display: flex;
  align-items: center;
  overflow: scroll;
`;

const Flex = styled.div`
  margin: 0 10px 0 0;
  height: 80px;

  border-radius: 10px;
  background: #cacaca;

  display: flex;
  align-items: center;
`;
const Img = styled.div`
  margin: 0 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #aeaeae;
  background-image: url(${(pr) => pr.$bg});
  background-size: cover;
`;
const Name = styled.div`
  width: 180px;
  padding: 10px 0;
  font-size: 18px;
`;

const CastList = () => {
  const params = useParams();
  const isDarkMode = useSelector((state) => state.setDarkMode);
  const data = CastingFetch({ query: `https://api.themoviedb.org/3/movie/${params.id}/credits?language=ko-KR`, enabled: true });

  return (
    <Wrapper>
      <MainBox>
        <Head $isDarkMode={isDarkMode}>출연: </Head>

        <Box>
          {data?.map((el) => (
            <Flex key={el.id}>
              <Img $bg={`https://image.tmdb.org/t/p/w500/${el.profile}`} />
              <Name>{el.name}</Name>
            </Flex>
          ))}
        </Box>
      </MainBox>
    </Wrapper>
  );
};

export default CastList;
