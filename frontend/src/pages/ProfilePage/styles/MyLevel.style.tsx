import styled from 'styled-components'

// 전체 레벨 도넛 차트 컨테이너
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-left: 1rem;
`

// 도넛형 차트 스타일
export const DonutChart = styled.div`
  position: relative;
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`

// 도넛형 차트 컴포넌트
export const Donut = ({
  percentage = 0,
  image,
  name,
}: {
  percentage: number
  image: string
  name: string
}) => {
  const radius = 25
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percentage / 100) * circumference

  return (
    <svg width='65' height='65'>
      <circle
        cx='32.5' /* 중심점 조정 */
        cy='32.5'
        r={radius}
        stroke='#e0e0e0'
        strokeWidth='6' /* 선 두께 줄임 */
        fill='transparent'
      />
      <circle
        cx='32.5' /* 중심점 조정 */
        cy='32.5'
        r={radius}
        stroke='#4caf50'
        strokeWidth='6' /* 선 두께 줄임 */
        fill='transparent'
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
      <foreignObject x='15' y='15' width='35' height='35'>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <img
            src={image}
            alt={name}
            style={{ height: '14px', marginTop: '3px' }}
          />
          <span
            style={{
              fontSize: '9px',
              fontWeight: '600',
              marginTop: '3px',
              color: '#464646',
            }}
          >
            {name}
          </span>
        </div>
      </foreignObject>
    </svg>
  )
}
