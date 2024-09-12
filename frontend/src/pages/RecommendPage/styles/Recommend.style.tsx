import styled from 'styled-components'

export const Background = styled.div`
  position: relative;
  width: 101%;
  height: calc(100vh - 4rem);
  background-image: url('img/placeRecommend/Korea.png');
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

export const LocationName = styled.p`
  margin-top: 0.5rem;
  font-size: 0.8rem;
  color: black;
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
`
