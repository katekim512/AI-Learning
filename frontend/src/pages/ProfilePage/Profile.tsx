import MyLevel from './components/MyLevel'
import ProfileSection from './components/ProfileSection'
import * as L from './styles/Profile.style'

const Profile = () => {
  return (
    <>
      <L.Container>
        <ProfileSection />
        <MyLevel />
      </L.Container>
    </>
  )
}

export default Profile
