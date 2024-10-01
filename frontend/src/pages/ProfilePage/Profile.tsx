import { useState } from 'react'
import { useNavigate } from 'react-router-dom' // useNavigate 추가

import MyLevel from './components/MyLevel'
import PlaceList from './components/PlaceList'
import ProfileSection from './components/ProfileSection'
import * as L from './styles/Profile.style'
import InfoBanner from '../../components/InfoBanner/InfoBanner'

const Profile = () => {
  const [showBanner, setShowBanner] = useState(true)
  const bannerText = '나의 교육 여행 패턴 및 방향성을 알고 싶나요?'
  const navigate = useNavigate() // useNavigate 훅 사용

  const handleBannerClick = () => {
    navigate('/pattern') // Pattern 페이지로 이동
  }

  return (
    <>
      <L.Container>
        <ProfileSection />
        <MyLevel />
        <L.BannerContainer>
          {showBanner && (
            <InfoBanner
              text={bannerText}
              onClose={() => setShowBanner(false)}
              onClick={handleBannerClick} // 클릭 핸들러 추가
            />
          )}
        </L.BannerContainer>
        <PlaceList />
      </L.Container>
    </>
  )
}

export default Profile
