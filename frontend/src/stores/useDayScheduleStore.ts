import create from 'zustand'

import { DateSchedule } from '../api/calendar/postTimelineDay'

interface DayScheduleState {
  daySchedule: DateSchedule | undefined
  setDaySchedule: (schedule: DateSchedule | undefined) => void
  updateInfo: (info: DateSchedule['info']) => void
}

export const useDayScheduleStore = create<DayScheduleState>(set => ({
  daySchedule: undefined,
  setDaySchedule: schedule => set({ daySchedule: schedule }),
  updateInfo: info =>
    set(state => {
      if (state.daySchedule) {
        return { daySchedule: { ...state.daySchedule, info } }
      }
      return state
    }),
}))
