class AuthToken {
  private accessToken: string
  private refreshToken: string
  private readonly TOKEN_KEY: string = 'authTokens' // 저장할 키 값

  constructor() {
    // 초기화 시 localStorage에서 토큰 정보를 가져옵니다.
    const storedTokens = localStorage.getItem(this.TOKEN_KEY)
    if (storedTokens) {
      const parsedTokens = JSON.parse(storedTokens)
      this.accessToken = parsedTokens.accessToken || ''
      this.refreshToken = parsedTokens.refreshToken || ''
    } else {
      this.accessToken = ''
      this.refreshToken = ''
    }
  }

  // 새로운 accessToken과 refreshToken을 설정하고 저장합니다.
  setTokens(newAccessToken: string, newRefreshToken: string) {
    try {
      const tokenData = {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      }
      localStorage.setItem(this.TOKEN_KEY, JSON.stringify(tokenData))
      this.accessToken = newAccessToken
      this.refreshToken = newRefreshToken
    } catch (e) {
      this.accessToken = ''
      this.refreshToken = ''
    }
  }

  // accessToken을 가져오는 메서드
  getAccessToken() {
    return this.accessToken
  }

  // refreshToken을 가져오는 메서드
  getRefreshToken() {
    return this.refreshToken
  }

  // 특정 토큰만 설정하는 경우
  setAccessToken(newAccessToken: string) {
    this.accessToken = newAccessToken
    this.updateLocalStorage()
  }

  setRefreshToken(newRefreshToken: string) {
    this.refreshToken = newRefreshToken
    this.updateLocalStorage()
  }

  // 로컬스토리지에 저장된 토큰 정보를 업데이트합니다.
  private updateLocalStorage() {
    const tokenData = {
      accessToken: this.accessToken,
      refreshToken: this.refreshToken,
    }
    localStorage.setItem(this.TOKEN_KEY, JSON.stringify(tokenData))
  }

  // 토큰 정보를 제거합니다.
  removeTokens() {
    localStorage.removeItem(this.TOKEN_KEY)
    this.accessToken = ''
    this.refreshToken = ''
  }
}

const authToken = new AuthToken()

export default authToken
