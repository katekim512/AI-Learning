import styled from 'styled-components'

export const Background = styled.div`
  position: relative;
  width: 101%;
  height: calc(100vh - 4rem);
  background-image: url('img/placeRecommend/Background.png');
  background-size: 100% auto;
  background-position: bottom center;
  background-repeat: no-repeat;
  overflow: hidden;
  margin-bottom: 4rem;
`

export const Location = styled.div<{
  top?: string
  left?: string
  bottom?: string
  right?: string
}>`
  position: absolute;
  top: ${props => props.top || 'auto'};
  left: ${props => props.left || 'auto'};
  bottom: ${props => props.bottom || 'auto'};
  right: ${props => props.right || 'auto'};
  transform: translate(-50%, -50%);
  text-align: center;
  cursor: pointer;
`

export const Icon = styled.img`
  width: 22vw;
  max-width: 100px;
  height: auto;
`
export const Picture = styled.img`
  width: 120vw;
  max-width: 360px;
  height: auto;
`

export const Picture2 = styled.img`
  width: 120vw;
  max-width: 150px;
  height: auto;
`

export const LocationName = styled.p`
  margin-top: 0.35rem;
  font-size: 0.8rem;
  color: black;

  &.gyeonggi {
    margin-top: 0.1rem; /* 경기도에만 적용될 스타일 */
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: black;
  line-height: 2rem;
  margin-top: 0.5rem;
  height: 4.5rem;
  padding-left: 2rem;
  text-align: left;
  font-size: 18px;
  z-index: 100;
  position: relative; /* Ensure the z-index works by adding a position property */
`

export const ViewAllButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: none;
  border: none;
  color: #333; // 버튼 텍스트 색상
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    color: #666; // 호버 시 텍스트 색상 변경
  }

  svg {
    margin-left: 5px;
  }
`
