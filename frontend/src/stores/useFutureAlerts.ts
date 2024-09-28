import { create } from 'zustand'

import { AlertPlace } from '../api/profile/getAlertList'

interface AlertState {
  futureAlerts: AlertPlace[]
  setFutureAlerts: (alerts: AlertPlace[]) => void
}

export const useAlertStore = create<AlertState>(set => ({
  futureAlerts: [],
  setFutureAlerts: alerts => set({ futureAlerts: alerts }),
}))
