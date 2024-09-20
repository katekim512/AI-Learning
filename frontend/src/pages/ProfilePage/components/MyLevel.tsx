import { useNavigate } from 'react-router-dom'

import { Level } from '../../../api/auth/getMyInfo'
import { useUser } from '../../../hooks/useUser'
import * as L from '../styles/MyLevel.style'

const levelsData: { name: string; key: keyof Level; image: string }[] = [
  { name: '선사시대', key: 'prehistoric', image: '/img/level/prehistoric.png' },
  {
    name: '삼국시대',
    key: 'threeKingdoms',
    image: '/img/level/threeKingdoms.png',
  },
  { name: '고려시대', key: 'goryeo', image: '/img/level/goryeo.png' },
  { name: '조선시대', key: 'chosun', image: '/img/level/chosun.png' },
  { name: '근현대', key: 'modern', image: '/img/level/modern.png' },
]

const MyLevel = () => {
  const { data: userInfo } = useUser()
  const navigate = useNavigate()

  const handleLevelClick = (levelName: string) => {
    navigate(`/eachlevel/${levelName}`)
  }

  return (
    <L.Container>
      {levelsData.map(level => (
        <L.DonutChart
          key={level.key}
          onClick={() => handleLevelClick(level.name)}
        >
          <L.Donut
            percentage={userInfo?.levels[level.key] || 0}
            image={level.image}
            name={level.name}
          />
        </L.DonutChart>
      ))}
    </L.Container>
  )
}

export default MyLevel
