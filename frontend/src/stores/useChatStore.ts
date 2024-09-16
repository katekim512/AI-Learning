import create from 'zustand'

interface ChatMessage {
  id: string
  sender: 'user' | 'bot'
  text: string
}

interface ChatStore {
  messages: ChatMessage[]
  isLoading: boolean
  addMessage: (message: ChatMessage) => void
  setLoading: (loading: boolean) => void
}

export const useChatStore = create<ChatStore>(set => ({
  messages: [],
  isLoading: false,
  addMessage: message =>
    set(state => ({ messages: [...state.messages, message] })),
  setLoading: loading => set({ isLoading: loading }),
}))
