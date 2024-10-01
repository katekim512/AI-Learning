export interface GuideItem {
  guideId: number
  name: string
  profile: string
  career: string
  city: string[]
  description: string
}

export interface GuideList {
  [key: number]: GuideItem
}

export const guideData: GuideList = {
  1: {
    guideId: 1,
    name: '뽀로로',
    profile: 'img/profile-default.png',
    career: '경력 4년차',
    city: ['서울', '경기'],
    description:
      '숨겨진 역사 이야기를 재밌게 전달하는 초등 전문 역사가이드입니다~',
  },
  2: {
    guideId: 2,
    name: '루피',
    profile: 'img/profile-default.png',
    career: '경력 3년차',
    city: ['부산', '울산'],
    description: '아이들이 쉽게 이해할 수 있는 역사 이야기를 들려드립니다.',
  },
  3: {
    guideId: 3,
    name: '타요',
    profile: 'img/profile-default.png',
    career: '경력 5년차',
    city: ['강원'],
    description: '재미있고 생동감 넘치는 역사 여행을 함께합니다!',
  },
  4: {
    guideId: 4,
    name: '크롱',
    profile: 'img/profile-default.png',
    career: '경력 2년차',
    city: ['대구', '경북'],
    description: '유쾌한 방식으로 역사를 이야기하는 초등 역사가이드입니다.',
  },
  5: {
    guideId: 5,
    name: '뽀비',
    profile: 'img/profile-default.png',
    career: '경력 1년차',
    city: ['인천', '서울'],
    description: '아이들의 눈높이에 맞춰 역사 속 인물들을 흥미롭게 소개합니다.',
  },
  6: {
    guideId: 6,
    name: '도라에몽',
    profile: 'img/profile-default.png',
    career: '경력 6년차',
    city: ['제주'],
    description: '어린이들과 함께하는 재미있는 역사 투어를 제공해요!',
  },
  7: {
    guideId: 7,
    name: '피카츄',
    profile: 'img/profile-default.png',
    career: '경력 3년차',
    city: ['서울'],
    description: '역사와 함께하는 모험을 좋아하는 초등 전문 가이드입니다.',
  },
  8: {
    guideId: 8,
    name: '짱구',
    profile: 'img/profile-default.png',
    career: '경력 2년차',
    city: ['부산', '대전'],
    description: '아이들이 역사에 흥미를 느낄 수 있도록 유도하는 가이드입니다.',
  },
  9: {
    guideId: 9,
    name: '조르디',
    profile: 'img/profile-default.png',
    career: '경력 4년차',
    city: ['서울'],
    description: '현장감 넘치는 역사 체험을 제공하는 초등 전문 가이드입니다.',
  },
  10: {
    guideId: 10,
    name: '미니언',
    profile: 'img/profile-default.png',
    career: '경력 5년차',
    city: ['광주', '전남'],
    description: '생생한 역사 속 이야기로 아이들에게 감동을 줍니다.',
  },
  11: {
    guideId: 11,
    name: '로보트 태권V',
    profile: 'img/profile-default.png',
    career: '경력 6년차',
    city: ['경기'],
    description: '역사와 모험을 결합한 재미있는 투어를 제공합니다.',
  },
  12: {
    guideId: 12,
    name: '신비',
    profile: 'img/profile-default.png',
    career: '경력 3년차',
    city: ['서울', '대전'],
    description: '아이들에게 역사의 신비로움을 전하는 초등 전문 가이드입니다.',
  },
  13: {
    guideId: 13,
    name: '보노보노',
    profile: 'img/profile-default.png',
    career: '경력 1년차',
    city: ['대구', '경북'],
    description: '따뜻한 역사 이야기로 아이들의 마음을 사로잡습니다.',
  },
  14: {
    guideId: 14,
    name: '토토로',
    profile: 'img/profile-default.png',
    career: '경력 7년차',
    city: ['경기'],
    description: '아이들이 역사에 대해 즐겁게 배울 수 있도록 도와줍니다.',
  },
  15: {
    guideId: 15,
    name: '헬로키티',
    profile: 'img/profile-default.png',
    career: '경력 4년차',
    city: ['서울'],
    description: '역사적 사건들을 이야기 형식으로 전달해주는 가이드입니다.',
  },
  16: {
    guideId: 16,
    name: '수달',
    profile: 'img/profile-default.png',
    career: '경력 5년차',
    city: ['강원', '서울', '인천'],
    description: '재미있는 역사 여행을 통해 아이들과 소통하는 가이드입니다.',
  },
  17: {
    guideId: 17,
    name: '포켓몬',
    profile: 'img/profile-default.png',
    career: '경력 6년차',
    city: ['서울'],
    description: '역사를 모험처럼 즐길 수 있도록 돕는 초등 가이드입니다.',
  },
  18: {
    guideId: 18,
    name: '손오공',
    profile: 'img/profile-default.png',
    career: '경력 4년차',
    city: ['대전'],
    description:
      '아이들이 흥미롭게 역사를 배울 수 있도록 가르치는 가이드입니다.',
  },
  19: {
    guideId: 19,
    name: '징징이',
    profile: 'img/profile-default.png',
    career: '경력 2년차',
    city: ['광주', '서울'],
    description: '역사의 재미있는 면모를 잘 전달하는 초등 전문 가이드입니다.',
  },
  20: {
    guideId: 20,
    name: '나루토',
    profile: 'img/profile-default.png',
    career: '경력 5년차',
    city: ['서울'],
    description: '역사 속 영웅들의 이야기를 통해 아이들에게 용기를 줍니다.',
  },
}
