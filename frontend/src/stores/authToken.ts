class AuthToken {
  private token: string
  private readonly TOKEN_KEY: string = 'authToken' // 저장할 키 값

  constructor() {
    // 초기화 시 localStorage에서 토큰 정보를 가져옵니다.
    const storedToken = localStorage.getItem(this.TOKEN_KEY)
    if (storedToken) {
      this.token = storedToken || ''
    } else {
      this.token = ''
    }
  }

  // 새로운 accessToken을 설정하고 저장합니다.
  setToken(newAccessToken: string) {
    try {
      localStorage.setItem(this.TOKEN_KEY, newAccessToken)
      this.token = newAccessToken
    } catch (e) {
      this.token = ''
    }
  }

  // accessToken을 가져오는 메서드
  getAccessToken() {
    return this.token
  }

  // accessToken을 로컬스토리지에 저장된 정보로 업데이트합니다.
  private updateLocalStorage() {
    localStorage.setItem(this.TOKEN_KEY, this.token)
  }

  // 토큰 정보를 제거합니다.
  removeToken() {
    localStorage.removeItem(this.TOKEN_KEY)
    this.token = ''
  }
}

const authToken = new AuthToken()

export default authToken
