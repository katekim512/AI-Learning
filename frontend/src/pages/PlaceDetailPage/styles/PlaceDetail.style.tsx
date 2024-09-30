import { css, styled } from 'styled-components'

interface MenuButtonProps {
  isLast?: boolean
}

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem;
  overflow-y: auto;
`

export const HeaderContainer = styled.div`
  justify-content: space-between;
  display: flex;
  margin-bottom: 0.3rem;
`

export const MapButton = styled.div`
  display: flex;
  padding-top: 0.1rem;
`

export const Title = styled.div`
  display: flex;
  line-height: 1.4rem;
`

export const Text = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
`

export const MenubarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  border-bottom: 0.5px solid #d9d9d9;
`

export const MenuButton = styled.div<MenuButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #333333;
  font-size: 0.6rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0 1rem;
  line-height: 1.2rem;

  ${({ isLast }) =>
    !isLast &&
    css`
      border-right: 0.5px solid #d9d9d9;
    `}
`

export const LikeContatiner = styled.div`
  display: flex;
  margin-left: 0.3rem;
`

export const SmText = styled.p`
  font-size: 0.7rem;
  font-weight: 600;
  padding-left: 0.1rem;
`

export const LocationText = styled.p`
  font-size: 0.8rem;
  line-height: 1.1rem;
  margin-left: 0.1rem;
`

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PlaceImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const OverviewContainer = styled.div`
  padding: 1rem 0;
`

export const HomepageTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
`

export const OverviewTitle = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #333;
  border-top: 1px solid #d9d9d9;
  padding-top: 2rem;
`

export const OverviewText = styled.p`
  margin-top: 0.3rem;
  font-size: 0.9rem;
  line-height: 1.4;
  white-space: pre-wrap;
`

export const HomepageLink = styled.div`
  font-size: 0.9rem;
  line-height: 1.4;
  color: #1a73e8;
  word-break: break-word; /* 긴 URL을 잘 보이게 처리 */
  a {
    text-decoration: none;
    color: inherit;
  }
`

export const ChatButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  width: 5rem;
  height: 5rem;
  border: none;
  border-radius: 100%;
  background-color: #525fd4;
  color: white;
  padding: 1rem;
  font-size: 0.7rem;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`
