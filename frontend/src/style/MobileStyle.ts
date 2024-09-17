import styled from 'styled-components'

export const MobileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%) rotate(0deg);
  max-width: 400px; /* 개발용 화면 디자인 확인 */
  width: 100vw;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  // 안전 영역 패딩 (필요시 주석 해제)
  // padding-top: env(safe-area-inset-top);
  // padding-right: env(safe-area-inset-right);
  // padding-bottom: env(safe-area-inset-bottom);
  // padding-left: env(safe-area-inset-left);
`
