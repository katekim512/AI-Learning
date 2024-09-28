// 시/군/구의 타입 정의
export interface Sigungu {
  areacode: number
  areaname: string
  sigungucode: number
  sigunguname: string
}

// 지역 및 시군구 데이터
export const areas = [
  { areacode: 1, areaname: '서울', sigungucode: 1, sigunguname: '강남구' },
  { areacode: 1, areaname: '서울', sigungucode: 2, sigunguname: '강동구' },
  { areacode: 1, areaname: '서울', sigungucode: 3, sigunguname: '강북구' },
  { areacode: 1, areaname: '서울', sigungucode: 4, sigunguname: '강서구' },
  { areacode: 1, areaname: '서울', sigungucode: 5, sigunguname: '관악구' },
  { areacode: 1, areaname: '서울', sigungucode: 6, sigunguname: '광진구' },
  { areacode: 1, areaname: '서울', sigungucode: 7, sigunguname: '구로구' },
  { areacode: 1, areaname: '서울', sigungucode: 8, sigunguname: '금천구' },
  { areacode: 1, areaname: '서울', sigungucode: 9, sigunguname: '노원구' },
  { areacode: 1, areaname: '서울', sigungucode: 10, sigunguname: '도봉구' },
  { areacode: 1, areaname: '서울', sigungucode: 11, sigunguname: '동대문구' },
  { areacode: 1, areaname: '서울', sigungucode: 12, sigunguname: '동작구' },
  { areacode: 1, areaname: '서울', sigungucode: 13, sigunguname: '마포구' },
  { areacode: 1, areaname: '서울', sigungucode: 14, sigunguname: '서대문구' },
  { areacode: 1, areaname: '서울', sigungucode: 15, sigunguname: '서초구' },
  { areacode: 1, areaname: '서울', sigungucode: 16, sigunguname: '성동구' },
  { areacode: 1, areaname: '서울', sigungucode: 17, sigunguname: '성북구' },
  { areacode: 1, areaname: '서울', sigungucode: 18, sigunguname: '송파구' },
  { areacode: 1, areaname: '서울', sigungucode: 19, sigunguname: '양천구' },
  { areacode: 1, areaname: '서울', sigungucode: 20, sigunguname: '영등포구' },
  { areacode: 1, areaname: '서울', sigungucode: 21, sigunguname: '용산구' },
  { areacode: 1, areaname: '서울', sigungucode: 22, sigunguname: '은평구' },
  { areacode: 1, areaname: '서울', sigungucode: 23, sigunguname: '종로구' },
  { areacode: 1, areaname: '서울', sigungucode: 24, sigunguname: '중구' },
  { areacode: 1, areaname: '서울', sigungucode: 25, sigunguname: '중랑구' },

  // 인천
  { areacode: 2, areaname: '인천', sigungucode: 1, sigunguname: '강화군' },
  { areacode: 2, areaname: '인천', sigungucode: 2, sigunguname: '계양구' },
  { areacode: 2, areaname: '인천', sigungucode: 3, sigunguname: '미추홀구' },
  { areacode: 2, areaname: '인천', sigungucode: 4, sigunguname: '남동구' },
  { areacode: 2, areaname: '인천', sigungucode: 5, sigunguname: '동구' },
  { areacode: 2, areaname: '인천', sigungucode: 6, sigunguname: '부평구' },
  { areacode: 2, areaname: '인천', sigungucode: 7, sigunguname: '서구' },
  { areacode: 2, areaname: '인천', sigungucode: 8, sigunguname: '연수구' },
  { areacode: 2, areaname: '인천', sigungucode: 9, sigunguname: '옹진군' },
  { areacode: 2, areaname: '인천', sigungucode: 10, sigunguname: '중구' },

  // 대전
  { areacode: 3, areaname: '대전', sigungucode: 1, sigunguname: '대덕구' },
  { areacode: 3, areaname: '대전', sigungucode: 2, sigunguname: '동구' },
  { areacode: 3, areaname: '대전', sigungucode: 3, sigunguname: '서구' },
  { areacode: 3, areaname: '대전', sigungucode: 4, sigunguname: '유성구' },
  { areacode: 3, areaname: '대전', sigungucode: 5, sigunguname: '중구' },

  // 대구
  { areacode: 4, areaname: '대구', sigungucode: 1, sigunguname: '남구' },
  { areacode: 4, areaname: '대구', sigungucode: 2, sigunguname: '달서구' },
  { areacode: 4, areaname: '대구', sigungucode: 3, sigunguname: '달성군' },
  { areacode: 4, areaname: '대구', sigungucode: 4, sigunguname: '동구' },
  { areacode: 4, areaname: '대구', sigungucode: 5, sigunguname: '북구' },
  { areacode: 4, areaname: '대구', sigungucode: 6, sigunguname: '서구' },
  { areacode: 4, areaname: '대구', sigungucode: 7, sigunguname: '수성구' },
  { areacode: 4, areaname: '대구', sigungucode: 8, sigunguname: '중구' },
  { areacode: 4, areaname: '대구', sigungucode: 9, sigunguname: '군위군' },

  // 광주
  { areacode: 5, areaname: '광주', sigungucode: 1, sigunguname: '광산구' },
  { areacode: 5, areaname: '광주', sigungucode: 2, sigunguname: '남구' },
  { areacode: 5, areaname: '광주', sigungucode: 3, sigunguname: '동구' },
  { areacode: 5, areaname: '광주', sigungucode: 4, sigunguname: '북구' },
  { areacode: 5, areaname: '광주', sigungucode: 5, sigunguname: '서구' },

  // 부산
  { areacode: 6, areaname: '부산', sigungucode: 1, sigunguname: '강서구' },
  { areacode: 6, areaname: '부산', sigungucode: 2, sigunguname: '금정구' },
  { areacode: 6, areaname: '부산', sigungucode: 3, sigunguname: '기장군' },
  { areacode: 6, areaname: '부산', sigungucode: 4, sigunguname: '남구' },
  { areacode: 6, areaname: '부산', sigungucode: 5, sigunguname: '동구' },
  { areacode: 6, areaname: '부산', sigungucode: 6, sigunguname: '동래구' },
  { areacode: 6, areaname: '부산', sigungucode: 7, sigunguname: '부산진구' },
  { areacode: 6, areaname: '부산', sigungucode: 8, sigunguname: '북구' },
  { areacode: 6, areaname: '부산', sigungucode: 9, sigunguname: '사상구' },
  { areacode: 6, areaname: '부산', sigungucode: 10, sigunguname: '사하구' },
  { areacode: 6, areaname: '부산', sigungucode: 11, sigunguname: '서구' },
  { areacode: 6, areaname: '부산', sigungucode: 12, sigunguname: '수영구' },
  { areacode: 6, areaname: '부산', sigungucode: 13, sigunguname: '연제구' },
  { areacode: 6, areaname: '부산', sigungucode: 14, sigunguname: '영도구' },
  { areacode: 6, areaname: '부산', sigungucode: 15, sigunguname: '중구' },
  { areacode: 6, areaname: '부산', sigungucode: 16, sigunguname: '해운대구' },

  // 울산
  { areacode: 7, areaname: '울산', sigungucode: 1, sigunguname: '중구' },
  { areacode: 7, areaname: '울산', sigungucode: 2, sigunguname: '남구' },
  { areacode: 7, areaname: '울산', sigungucode: 3, sigunguname: '동구' },
  { areacode: 7, areaname: '울산', sigungucode: 4, sigunguname: '북구' },
  { areacode: 7, areaname: '울산', sigungucode: 5, sigunguname: '울주군' },

  // 세종
  {
    areacode: 8,
    areaname: '세종특별자치시',
    sigungucode: 1,
    sigunguname: '세종특별자치시',
  },

  // 경기
  { areacode: 31, areaname: '경기도', sigungucode: 1, sigunguname: '가평군' },
  { areacode: 31, areaname: '경기도', sigungucode: 2, sigunguname: '고양시' },
  { areacode: 31, areaname: '경기도', sigungucode: 3, sigunguname: '과천시' },
  { areacode: 31, areaname: '경기도', sigungucode: 4, sigunguname: '광명시' },
  { areacode: 31, areaname: '경기도', sigungucode: 5, sigunguname: '광주시' },
  { areacode: 31, areaname: '경기도', sigungucode: 6, sigunguname: '구리시' },
  { areacode: 31, areaname: '경기도', sigungucode: 7, sigunguname: '군포시' },
  { areacode: 31, areaname: '경기도', sigungucode: 8, sigunguname: '김포시' },
  { areacode: 31, areaname: '경기도', sigungucode: 9, sigunguname: '남양주시' },
  {
    areacode: 31,
    areaname: '경기도',
    sigungucode: 10,
    sigunguname: '동두천시',
  },
  { areacode: 31, areaname: '경기도', sigungucode: 11, sigunguname: '부천시' },
  { areacode: 31, areaname: '경기도', sigungucode: 12, sigunguname: '성남시' },
  { areacode: 31, areaname: '경기도', sigungucode: 13, sigunguname: '수원시' },
  { areacode: 31, areaname: '경기도', sigungucode: 14, sigunguname: '시흥시' },
  { areacode: 31, areaname: '경기도', sigungucode: 15, sigunguname: '안산시' },
  { areacode: 31, areaname: '경기도', sigungucode: 16, sigunguname: '안성시' },
  { areacode: 31, areaname: '경기도', sigungucode: 17, sigunguname: '안양시' },
  { areacode: 31, areaname: '경기도', sigungucode: 18, sigunguname: '양주시' },
  { areacode: 31, areaname: '경기도', sigungucode: 19, sigunguname: '양평군' },
  { areacode: 31, areaname: '경기도', sigungucode: 20, sigunguname: '여주시' },
  { areacode: 31, areaname: '경기도', sigungucode: 21, sigunguname: '연천군' },
  { areacode: 31, areaname: '경기도', sigungucode: 22, sigunguname: '오산시' },
  { areacode: 31, areaname: '경기도', sigungucode: 23, sigunguname: '용인시' },
  { areacode: 31, areaname: '경기도', sigungucode: 24, sigunguname: '의왕시' },
  {
    areacode: 31,
    areaname: '경기도',
    sigungucode: 25,
    sigunguname: '의정부시',
  },
  { areacode: 31, areaname: '경기도', sigungucode: 26, sigunguname: '이천시' },
  { areacode: 31, areaname: '경기도', sigungucode: 27, sigunguname: '파주시' },
  { areacode: 31, areaname: '경기도', sigungucode: 28, sigunguname: '평택시' },
  { areacode: 31, areaname: '경기도', sigungucode: 29, sigunguname: '포천시' },
  { areacode: 31, areaname: '경기도', sigungucode: 30, sigunguname: '하남시' },
  { areacode: 31, areaname: '경기도', sigungucode: 31, sigunguname: '화성시' },

  // 강원
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 1,
    sigunguname: '강릉시',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 2,
    sigunguname: '고성군',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 3,
    sigunguname: '동해시',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 4,
    sigunguname: '삼척시',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 5,
    sigunguname: '속초시',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 6,
    sigunguname: '양구군',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 7,
    sigunguname: '양양군',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 8,
    sigunguname: '영월군',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 9,
    sigunguname: '원주시',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 10,
    sigunguname: '인제군',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 11,
    sigunguname: '정선군',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 12,
    sigunguname: '철원군',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 13,
    sigunguname: '춘천시',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 14,
    sigunguname: '태백시',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 15,
    sigunguname: '평창군',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 16,
    sigunguname: '홍천군',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 17,
    sigunguname: '화천군',
  },
  {
    areacode: 32,
    areaname: '강원특별자치도',
    sigungucode: 18,
    sigunguname: '횡성군',
  },

  // 충청
  { areacode: 33, areaname: '충청북도', sigungucode: 1, sigunguname: '괴산군' },
  { areacode: 33, areaname: '충청북도', sigungucode: 2, sigunguname: '단양군' },
  { areacode: 33, areaname: '충청북도', sigungucode: 3, sigunguname: '보은군' },
  { areacode: 33, areaname: '충청북도', sigungucode: 4, sigunguname: '영동군' },
  { areacode: 33, areaname: '충청북도', sigungucode: 5, sigunguname: '옥천군' },
  { areacode: 33, areaname: '충청북도', sigungucode: 6, sigunguname: '음성군' },
  { areacode: 33, areaname: '충청북도', sigungucode: 7, sigunguname: '제천시' },
  { areacode: 33, areaname: '충청북도', sigungucode: 8, sigunguname: '진천군' },
  { areacode: 33, areaname: '충청북도', sigungucode: 9, sigunguname: '청원군' },
  {
    areacode: 33,
    areaname: '충청북도',
    sigungucode: 10,
    sigunguname: '청주시',
  },
  {
    areacode: 33,
    areaname: '충청북도',
    sigungucode: 11,
    sigunguname: '충주시',
  },
  {
    areacode: 33,
    areaname: '충청북도',
    sigungucode: 12,
    sigunguname: '증평군',
  },
  { areacode: 34, areaname: '충청남도', sigungucode: 1, sigunguname: '공주시' },
  { areacode: 34, areaname: '충청남도', sigungucode: 2, sigunguname: '금산군' },
  { areacode: 34, areaname: '충청남도', sigungucode: 3, sigunguname: '논산시' },
  { areacode: 34, areaname: '충청남도', sigungucode: 4, sigunguname: '당진시' },
  { areacode: 34, areaname: '충청남도', sigungucode: 5, sigunguname: '보령시' },
  { areacode: 34, areaname: '충청남도', sigungucode: 6, sigunguname: '부여군' },
  { areacode: 34, areaname: '충청남도', sigungucode: 7, sigunguname: '서산시' },
  { areacode: 34, areaname: '충청남도', sigungucode: 8, sigunguname: '서천군' },
  { areacode: 34, areaname: '충청남도', sigungucode: 9, sigunguname: '아산시' },
  {
    areacode: 34,
    areaname: '충청남도',
    sigungucode: 11,
    sigunguname: '예산군',
  },
  {
    areacode: 34,
    areaname: '충청남도',
    sigungucode: 12,
    sigunguname: '천안시',
  },
  {
    areacode: 34,
    areaname: '충청남도',
    sigungucode: 13,
    sigunguname: '청양군',
  },
  {
    areacode: 34,
    areaname: '충청남도',
    sigungucode: 14,
    sigunguname: '태안군',
  },
  {
    areacode: 34,
    areaname: '충청남도',
    sigungucode: 15,
    sigunguname: '홍성군',
  },
  {
    areacode: 34,
    areaname: '충청남도',
    sigungucode: 16,
    sigunguname: '계룡시',
  },

  // 경상
  { areacode: 35, areaname: '경상북도', sigungucode: 1, sigunguname: '경산시' },
  { areacode: 35, areaname: '경상북도', sigungucode: 2, sigunguname: '경주시' },
  { areacode: 35, areaname: '경상북도', sigungucode: 3, sigunguname: '고령군' },
  { areacode: 35, areaname: '경상북도', sigungucode: 4, sigunguname: '구미시' },
  { areacode: 35, areaname: '경상북도', sigungucode: 6, sigunguname: '김천시' },
  { areacode: 35, areaname: '경상북도', sigungucode: 7, sigunguname: '문경시' },
  { areacode: 35, areaname: '경상북도', sigungucode: 8, sigunguname: '봉화군' },
  { areacode: 35, areaname: '경상북도', sigungucode: 9, sigunguname: '상주시' },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 10,
    sigunguname: '성주군',
  },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 11,
    sigunguname: '안동시',
  },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 12,
    sigunguname: '영덕군',
  },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 13,
    sigunguname: '영양군',
  },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 14,
    sigunguname: '영주시',
  },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 15,
    sigunguname: '영천시',
  },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 16,
    sigunguname: '예천군',
  },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 17,
    sigunguname: '울릉군',
  },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 18,
    sigunguname: '울진군',
  },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 19,
    sigunguname: '의성군',
  },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 20,
    sigunguname: '청도군',
  },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 21,
    sigunguname: '청송군',
  },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 22,
    sigunguname: '칠곡군',
  },
  {
    areacode: 35,
    areaname: '경상북도',
    sigungucode: 23,
    sigunguname: '포항시',
  },
  { areacode: 36, areaname: '경상남도', sigungucode: 1, sigunguname: '거제시' },
  { areacode: 36, areaname: '경상남도', sigungucode: 2, sigunguname: '거창군' },
  { areacode: 36, areaname: '경상남도', sigungucode: 3, sigunguname: '고성군' },
  { areacode: 36, areaname: '경상남도', sigungucode: 4, sigunguname: '김해시' },
  { areacode: 36, areaname: '경상남도', sigungucode: 5, sigunguname: '남해군' },
  { areacode: 36, areaname: '경상남도', sigungucode: 6, sigunguname: '마산시' },
  { areacode: 36, areaname: '경상남도', sigungucode: 7, sigunguname: '밀양시' },
  { areacode: 36, areaname: '경상남도', sigungucode: 8, sigunguname: '사천시' },
  { areacode: 36, areaname: '경상남도', sigungucode: 9, sigunguname: '산청군' },
  {
    areacode: 36,
    areaname: '경상남도',
    sigungucode: 10,
    sigunguname: '양산시',
  },
  {
    areacode: 36,
    areaname: '경상남도',
    sigungucode: 12,
    sigunguname: '의령군',
  },
  {
    areacode: 36,
    areaname: '경상남도',
    sigungucode: 13,
    sigunguname: '진주시',
  },
  {
    areacode: 36,
    areaname: '경상남도',
    sigungucode: 14,
    sigunguname: '진해시',
  },
  {
    areacode: 36,
    areaname: '경상남도',
    sigungucode: 15,
    sigunguname: '창녕군',
  },
  {
    areacode: 36,
    areaname: '경상남도',
    sigungucode: 16,
    sigunguname: '창원시',
  },
  {
    areacode: 36,
    areaname: '경상남도',
    sigungucode: 17,
    sigunguname: '통영시',
  },
  {
    areacode: 36,
    areaname: '경상남도',
    sigungucode: 18,
    sigunguname: '하동군',
  },
  {
    areacode: 36,
    areaname: '경상남도',
    sigungucode: 19,
    sigunguname: '함안군',
  },
  {
    areacode: 36,
    areaname: '경상남도',
    sigungucode: 20,
    sigunguname: '함양군',
  },
  {
    areacode: 36,
    areaname: '경상남도',
    sigungucode: 21,
    sigunguname: '합천군',
  },

  // 전북
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 1,
    sigunguname: '고창군',
  },
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 2,
    sigunguname: '군산시',
  },
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 3,
    sigunguname: '김제시',
  },
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 4,
    sigunguname: '남원시',
  },
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 5,
    sigunguname: '무주군',
  },
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 6,
    sigunguname: '부안군',
  },
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 7,
    sigunguname: '순창군',
  },
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 8,
    sigunguname: '완주군',
  },
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 9,
    sigunguname: '익산시',
  },
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 10,
    sigunguname: '임실군',
  },
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 11,
    sigunguname: '장수군',
  },
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 12,
    sigunguname: '전주시',
  },
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 13,
    sigunguname: '정읍시',
  },
  {
    areacode: 37,
    areaname: '전북특별자치도',
    sigungucode: 14,
    sigunguname: '진안군',
  },

  // 전남
  { areacode: 38, areaname: '전라남도', sigungucode: 1, sigunguname: '강진군' },
  { areacode: 38, areaname: '전라남도', sigungucode: 2, sigunguname: '고흥군' },
  { areacode: 38, areaname: '전라남도', sigungucode: 3, sigunguname: '곡성군' },
  { areacode: 38, areaname: '전라남도', sigungucode: 4, sigunguname: '광양시' },
  { areacode: 38, areaname: '전라남도', sigungucode: 5, sigunguname: '구례군' },
  { areacode: 38, areaname: '전라남도', sigungucode: 6, sigunguname: '나주시' },
  { areacode: 38, areaname: '전라남도', sigungucode: 7, sigunguname: '담양군' },
  { areacode: 38, areaname: '전라남도', sigungucode: 8, sigunguname: '목포시' },
  { areacode: 38, areaname: '전라남도', sigungucode: 9, sigunguname: '무안군' },
  {
    areacode: 38,
    areaname: '전라남도',
    sigungucode: 10,
    sigunguname: '보성군',
  },
  {
    areacode: 38,
    areaname: '전라남도',
    sigungucode: 11,
    sigunguname: '순천시',
  },
  {
    areacode: 38,
    areaname: '전라남도',
    sigungucode: 12,
    sigunguname: '신안군',
  },
  {
    areacode: 38,
    areaname: '전라남도',
    sigungucode: 13,
    sigunguname: '여수시',
  },
  {
    areacode: 38,
    areaname: '전라남도',
    sigungucode: 16,
    sigunguname: '영광군',
  },
  {
    areacode: 38,
    areaname: '전라남도',
    sigungucode: 17,
    sigunguname: '영암군',
  },
  {
    areacode: 38,
    areaname: '전라남도',
    sigungucode: 18,
    sigunguname: '완도군',
  },
  {
    areacode: 38,
    areaname: '전라남도',
    sigungucode: 19,
    sigunguname: '장성군',
  },
  {
    areacode: 38,
    areaname: '전라남도',
    sigungucode: 20,
    sigunguname: '장흥군',
  },
  {
    areacode: 38,
    areaname: '전라남도',
    sigungucode: 21,
    sigunguname: '진도군',
  },
  {
    areacode: 38,
    areaname: '전라남도',
    sigungucode: 22,
    sigunguname: '함평군',
  },
  {
    areacode: 38,
    areaname: '전라남도',
    sigungucode: 23,
    sigunguname: '해남군',
  },
  {
    areacode: 38,
    areaname: '전라남도',
    sigungucode: 24,
    sigunguname: '화순군',
  },

  // 제주
  { areacode: 39, areaname: '제주도', sigungucode: 1, sigunguname: '남제주군' },
  { areacode: 39, areaname: '제주도', sigungucode: 2, sigunguname: '북제주군' },
  { areacode: 39, areaname: '제주도', sigungucode: 3, sigunguname: '서귀포시' },
  { areacode: 39, areaname: '제주도', sigungucode: 4, sigunguname: '제주시' },
]

// 지역 이름(areaname) 목록 반환
export const getAreaNames = () => {
  return Array.from(new Set(areas.map(area => area.areaname)))
}

// 선택한 지역의 시군구 목록 반환
export const getSigunguByAreacode = (areaname: string) => {
  return areas.filter(area => area.areaname === areaname)
}
