import { useState } from 'react'

import MyLevel from './components/MyLevel'
import ProfileSection from './components/ProfileSection'
import * as L from './styles/Profile.style'
import InfoBanner from '../../components/InfoBanner/InfoBanner'

const Profile = () => {
  const [showBanner, setShowBanner] = useState(true)
  const bannerText = '나의 교육 여행 패턴 및 방향성을 알고 싶나요?'

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
            />
          )}
        </L.BannerContainer>
      </L.Container>
    </>
  )
}

export default Profile
