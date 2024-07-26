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

interface ScheduleState {
  startDate: string
  endDate: string
  frequency: string
  location: string[]
  travelStyle: string[]
  setStartDate: (date: string) => void
  setEndDate: (date: string) => void
  setFrequency: (frequency: string) => void
  setLocation: (location: string[]) => void
  toggleLocation: (location: string) => void
  setTravelStyle: (style: string[]) => void
}

export const useScheduleStore = create<ScheduleState>(set => ({
  startDate: getCurrentDate(),
  endDate: getFutureDate(29),
  frequency: '1주에 1번',
  location: [],
  travelStyle: [],
  setStartDate: date => set({ startDate: date }),
  setEndDate: date => set({ endDate: date }),
  setFrequency: frequency => set({ frequency }),
  setLocation: location => set({ location }),
  toggleLocation: location =>
    set(state => {
      const newLocation = state.location.includes(location)
        ? state.location.filter(l => l !== location)
        : [...state.location, location]
      return { location: newLocation }
    }),
  setTravelStyle: style => set({ travelStyle: style }),
}))
