import React, { useState } from 'react'

import * as L from '../styles/Login.style'

const LoginForm = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 로그인 로직
  }

  return (
    <L.Form onSubmit={handleSubmit}>
      <L.Input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="이메일을 입력해주세요"
        required
      />
      <L.Input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="비밀번호를 입력해주세요"
        required
      />
      <L.LoginButton type="submit">로그인</L.LoginButton>
    </L.Form>
  )
}

export default LoginForm
