import React, { useEffect, useRef } from 'react'

interface PlaceMapProps {
  mapx: number
  mapy: number
  height: number
}

const PlaceMap: React.FC<PlaceMapProps> = ({ mapx, mapy, height }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (mapContainerRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const kakao = (window as any).kakao

      // 지도 스크립트 로드 및 지도 생성
      if (!kakao.maps) {
        const script = document.createElement('script')
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_APP_KEY&autoload=false`
        document.head.appendChild(script)

        script.onload = () => {
          kakao.maps.load(() => {
            const container = mapContainerRef.current
            const options = {
              center: new kakao.maps.LatLng(mapy, mapx),
              level: 3,
            }
            new kakao.maps.Map(container, options)
          })
        }
      } else {
        const container = mapContainerRef.current
        const options = {
          center: new kakao.maps.LatLng(mapy, mapx),
          level: 3,
        }
        new kakao.maps.Map(container, options)
      }
    }
  }, [mapx, mapy])

  return (
    <div
      ref={mapContainerRef}
      style={{
        minHeight: '200px',
        height: `${height}px`,
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    />
  )
}

export default PlaceMap
