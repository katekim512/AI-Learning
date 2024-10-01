import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`
export const ScrollContainer = styled.div`
  height: calc(100vh - 4rem);
  overflow-y: auto;
  position: relative;
  padding-bottom: 80px; // 버튼 높이 + 하단 여백을 고려한 패딩
`
export const ButtonContainer = styled.div`
  padding: 20px;
`

export const Section1 = styled.div`
  margin-top: 0px;
  margin-bottom: 20px;
`
export const Section2 = styled.div`
  margin-top: 20px;
`

export const Title = styled.h1`
  font-size: 24px;
  //text-align: center;
  margin-left: 20px;
  margin-bottom: 20px;
`

export const BlueText = styled.span`
  color: #525fd4;
  font-weight: bold;
`

export const SectionHeader = styled.h2`
  font-size: 16px;
  color: #525fd4;
  border-bottom: 2px solid #525fd4;
  padding: 10px 20px;
`

export const DestinationList = styled.ul`
  list-style: none;
  //padding: 0px 0px;
`

export const DestinationItem = styled.li<{ visited?: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #eaeaea;
  background-color: ${({ visited }) =>
    visited ? '#f0f0f0' : 'white'}; /* Gray background if visited */
  color: ${({ visited }) =>
    visited ? '#a9a9a9' : '#333'}; /* Lighter text color if visited */
`

export const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 20px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Name = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 3px;
`

export const Location = styled.span`
  font-size: 12px;
  color: #666;
  margin-top: 3px;
`

export const NoVisitedMessage = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  padding: 40px;
`

export const CharacterImage = styled.img`
  width: 150px;
  height: 150px;
  margin: 20px auto;
  display: block;
`

export const PatternText = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
`

export const Description = styled.p`
  color: #333;
  font-size: 16px;
  line-height: 1.5;
  text-align: start-end;
  margin: 0; // 기본 마진 제거
`

export const MoreButton = styled.button`
  width: calc(100% - 40px); // 좌우 20px 여백을 고려한 너비
  max-width: 400px;
  height: 46px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  color: white;
  font-weight: 600;
  background-color: #525fd4;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%); // 중앙 정렬을 위한 변환
  &:hover {
    background-color: #434cb1;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 600px; // 콘텐츠의 최대 너비 설정
  margin: 0 auto; // 가로 중앙 정렬
  transform: translateY(25%); // 컨텐츠를 자신의 높이의 절반만큼 위로 이동
`
export const DescriptionBox = styled.div`
  background-color: #eff1ff;
  padding: 20px;
  border-radius: 10px;
  width: calc(100% - 40px); // 좌우 패딩을 고려한 너비
  margin: 0 20px; // 좌우 여백 추가
`
