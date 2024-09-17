import create from 'zustand'

interface ChatMessage {
  id: string
  sender: 'user' | 'bot'
  text: string
}

interface ChatStore {
  chatHistories: { [key: string]: ChatMessage[] } // contentid별로 대화 저장
  isLoading: boolean
  currentMessages: ChatMessage[]
  addMessage: (message: ChatMessage, contentid: string) => void
  setMessages: (messages: ChatMessage[], contentid: string) => void
  setLoading: (loading: boolean) => void
  clearMessages: () => void
}

export const useChatStore = create<ChatStore>(set => ({
  chatHistories: {},
  isLoading: false,
  currentMessages: [],
  addMessage: (message, contentid) => {
    set(state => {
      const updatedMessages = [
        ...(state.chatHistories[contentid] || []),
        message,
      ]
      return {
        chatHistories: { ...state.chatHistories, [contentid]: updatedMessages },
        currentMessages: updatedMessages,
      }
    })
  },
  setMessages: (messages, contentid) => {
    set(state => ({
      chatHistories: { ...state.chatHistories, [contentid]: messages },
      currentMessages: messages,
    }))
  },
  setLoading: loading => set({ isLoading: loading }),
  clearMessages: () => set({ currentMessages: [] }), // 현재 메시지 비우기
}))
