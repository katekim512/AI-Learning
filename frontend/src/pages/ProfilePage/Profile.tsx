import LogoutButton from './components/LogoutButton'
import ProfileSection from './components/ProfileSection'
import * as L from './styles/Profile.style'
import BottomMenuBar from '../../components/BottomMenuBar/BottomMenuBar'

const Profile = () => {
  return (
    <>
      <L.Container>
        <ProfileSection />
        <LogoutButton />
        <BottomMenuBar />
      </L.Container>
    </>
  )
}

export default Profile
