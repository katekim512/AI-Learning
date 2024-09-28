import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface WeatherAlertState {
  lastCalendarVisit: string | null
  hasCheckedAlertToday: boolean
  setLastCalendarVisit: (date: string) => void
  setHasCheckedAlertToday: (checked: boolean) => void
  hasVisitedCalendarToday: () => boolean
  resetDailyCheck: () => void
}

export const useWeatherAlert = create<WeatherAlertState>()(
  persist(
    (set, get) => ({
      lastCalendarVisit: null,
      hasCheckedAlertToday: false,

      setLastCalendarVisit: (date: string) => set({ lastCalendarVisit: date }),

      setHasCheckedAlertToday: (checked: boolean) =>
        set({ hasCheckedAlertToday: checked }),

      hasVisitedCalendarToday: () => {
        const lastVisit = get().lastCalendarVisit
        if (!lastVisit) return false
        const today = new Date().toDateString()
        return new Date(lastVisit).toDateString() === today
      },

      resetDailyCheck: () => {
        const today = new Date().toDateString()
        const lastVisit = get().lastCalendarVisit
        if (lastVisit && new Date(lastVisit).toDateString() !== today) {
          set({ hasCheckedAlertToday: false })
        }
      },
    }),
    {
      name: 'weather-alert-storage',
    },
  ),
)
