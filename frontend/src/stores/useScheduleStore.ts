import { create } from 'zustand'

const getCurrentDate = () => {
  const today = new Date()
  return today.toISOString().split('T')[0]
}

const getFutureDate = (days: number): string => {
  const today = new Date()
  today.setDate(today.getDate() + days)
  return today.toISOString().split('T')[0]
}

const getDatesArray = (
  startDate: string,
  endDate: string,
  frequency: string,
): string[] => {
  const dates: string[] = []
  const start = new Date(startDate)
  const end = new Date(endDate)
  const current = new Date(start)

  while (current <= end) {
    dates.push(current.toISOString().split('T')[0])
    switch (frequency) {
      case '1주에 1번':
        current.setDate(current.getDate() + 7)
        break
      case '2주에 1번':
        current.setDate(current.getDate() + 14)
        break
      case '한 달에 1번':
        current.setMonth(current.getMonth() + 1)
        break
      default:
        break
    }
  }

  return dates
}

interface ScheduleState {
  startDate: string
  endDate: string
  dates: string[]
  location: string[]
  travelStyle: string[]
  description: string
  frequency: string // 빈도 추가
  setStartDate: (date: string) => void
  setEndDate: (date: string) => void
  updateDates: () => void // 빈도에 따라 날짜 배열을 업데이트하는 함수
  setFrequency: (frequency: string) => void // 빈도 설정 함수
  setLocation: (location: string[]) => void
  toggleLocation: (location: string) => void
  setTravelStyle: (style: string[]) => void
  setDescription: (description: string) => void
}

export const useScheduleStore = create<ScheduleState>(set => ({
  startDate: getCurrentDate(),
  endDate: getFutureDate(29),
  dates: [],
  location: [],
  travelStyle: [],
  description: '',
  frequency: '1주에 1번', // 초기 빈도 설정
  setStartDate: date => set({ startDate: date }),
  setEndDate: date => set({ endDate: date }),
  updateDates: () =>
    set(state => {
      const { startDate, endDate, frequency } = state
      const dates = getDatesArray(startDate, endDate, frequency)
      return { dates }
    }),
  setFrequency: frequency => set({ frequency }), // 빈도 설정
  setLocation: location => set({ location }),
  toggleLocation: location =>
    set(state => {
      const newLocation = state.location.includes(location)
        ? state.location.filter(l => l !== location)
        : [...state.location, location]
      return { location: newLocation }
    }),
  setTravelStyle: style => set({ travelStyle: style }),
  setDescription: description => set({ description }),
}))
