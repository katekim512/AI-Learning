import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { checkEmail } from '../../../api/auth/postCheckEmail'
import { checkNickname } from '../../../api/auth/postCheckNickname'
import { login } from '../../../api/auth/postLogin'
import { register } from '../../../api/auth/postRegister'
import {
  getAreaNames,
  getSigunguByAreacode,
  Sigungu,
} from '../../../datas/RegisterCityMapper'
import authToken from '../../../stores/authToken'
import * as L from '../styles/Register.style'

const RegisterForm = ({ accessToken }: { accessToken?: string }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const emailFromKakao = location.state?.email || ''

  const [signupForm, setSignupForm] = useState({
    email: accessToken ? emailFromKakao : '',
    nickname: '',
    year: 2024,
    areacode: 0,
    sigungucode: 0,
    password: '',
    checkedPassword: '',
  })

  // 오류 메세지
  const [validMessage, setValidMessage] = useState({
    emailMessage: '',
    nicknameMessage: '',
    passwordMessage: '',
    checkedPasswordMessage: '',
  })

  // 유효성 검사
  const [isValid, setIsValid] = useState({
    email: !!accessToken,
    nickname: false,
    password: false,
    checkedPassword: false,
  })

  const currentYear = new Date().getFullYear()
  const startYear = currentYear - 30
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => currentYear - i,
  )

  const [selectedArea, setSelectedArea] = useState('') // 선택한 지역
  const [selectedSigungu, setSelectedSigungu] = useState('') // 선택한 시군구
  const [sigunguList, setSigunguList] = useState<Sigungu[]>([]) // 해당 지역의 시군구 목록

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setSignupForm({ ...signupForm, [name]: value })

    // if (name === 'email') {
    //   setValidMessage(prev => ({
    //     ...prev,
    //     emailMessage: '다시 중복확인을 해주세요.',
    //   }))
    // }
    // if (name === 'nickname') {
    //   setValidMessage(prev => ({
    //     ...prev,
    //     nicknameMessage: '다시 중복확인을 해주세요.',
    //   }))
    // }
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target

    if (name === 'year') {
      setSignupForm({ ...signupForm, [name]: Number(value) })
    } else {
      setSignupForm({ ...signupForm, [name]: value })
    }
  }

  const handleCheckEmail = async () => {
    const emailResult = await checkEmail(signupForm.email)

    if (emailResult?.data.isExist === true) {
      setValidMessage(prev => ({
        ...prev,
        emailMessage: '사용 불가능한 이메일입니다.',
      }))
      setIsValid({ ...isValid, email: false })
    } else if (emailResult?.data.isExist == false) {
      setValidMessage(prev => ({
        ...prev,
        emailMessage: '사용 가능한 이메일입니다.',
      }))
      setIsValid({ ...isValid, email: true })
    } else {
      setValidMessage(prev => ({
        ...prev,
        emailMessage: '잠시 후 다시 시도해주세요.',
      }))
      setIsValid({ ...isValid, email: false })
    }
  }

  const handleCheckNickname = async () => {
    const nicknameResult = await checkNickname(signupForm.nickname)

    if (nicknameResult?.data.isExist === true) {
      setValidMessage(prev => ({
        ...prev,
        nicknameMessage: '중복된 닉네임입니다.',
      }))
      setIsValid({ ...isValid, nickname: false })
    } else if (nicknameResult?.data.isExist == false) {
      setValidMessage(prev => ({
        ...prev,
        nicknameMessage: '사용 가능한 닉네임입니다.',
      }))
      setIsValid({ ...isValid, nickname: true })
    } else {
      setValidMessage(prev => ({
        ...prev,
        nicknameMessage: '잠시 후 다시 시도해주세요.',
      }))
      setIsValid({ ...isValid, nickname: false })
    }
  }

  // 비밀번호 유효성 검사
  useEffect(() => {
    const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*]).{8,15}$/

    if (!regex.test(signupForm.password)) {
      setValidMessage(prev => ({
        ...prev,
        passwordMessage:
          '숫자, 영문, 특수문자를 포함하여 최소 8자를 입력해주세요',
      }))
      setIsValid({ ...isValid, password: false })
    } else {
      setValidMessage(prev => ({
        ...prev,
        passwordMessage: '',
      }))
      setIsValid({ ...isValid, password: true })
    }
  }, [signupForm.password])

  // 비밀번호 확인
  useEffect(() => {
    if (signupForm.password !== signupForm.checkedPassword) {
      setValidMessage(prev => ({
        ...prev,
        checkedPasswordMessage: '비밀번호가 일치하지 않습니다.',
      }))
      setIsValid({ ...isValid, checkedPassword: false })
    } else {
      setValidMessage(prev => ({
        ...prev,
        checkedPasswordMessage: '',
      }))
      setIsValid({ ...isValid, checkedPassword: true })
    }
  }, [signupForm.password, signupForm.checkedPassword])

  // 지역 선택 핸들러
  const handleAreaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAreaname = e.target.value
    setSelectedArea(selectedAreaname) // 선택한 지역을 상태로 설정
    const sigungus = getSigunguByAreacode(selectedAreaname) // 시군구 목록 가져오기
    setSigunguList(sigungus) // 해당 시군구 목록 설정

    // 시군구 선택 초기화
    setSelectedSigungu('')

    // 선택한 지역의 첫 번째 시군구를 기본값으로 설정 (필요한 경우)
    if (sigungus.length > 0) {
      setSignupForm({
        ...signupForm,
        areacode: sigungus[0].areacode, // 선택한 지역의 areacode 설정
        sigungucode: 0, // 시군구 선택을 초기화
      })
    }
  }

  // 시군구 선택 핸들러
  const handleSigunguChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSigunguName = e.target.value
    setSelectedSigungu(selectedSigunguName)

    const selectedSigungu = sigunguList.find(
      sigungu => sigungu.sigunguname === selectedSigunguName,
    )
    if (selectedSigungu) {
      setSignupForm({
        ...signupForm,
        sigungucode: selectedSigungu.sigungucode, // 선택한 시군구의 sigungucode 설정
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (isValid) {
      const registerResult = await register(
        signupForm.email,
        signupForm.nickname,
        signupForm.password,
        signupForm.year,
        signupForm.areacode,
        signupForm.sigungucode,
        accessToken,
      )

      console.log(signupForm.areacode)

      if (registerResult && emailFromKakao) {
        const successResponse = await login(
          signupForm.email,
          signupForm.password,
        )
        if (successResponse) {
          authToken.setToken(successResponse.data.token)
          navigate('/calendar')
        }
      } else if (registerResult) {
        navigate('/login')
      } else {
        console.error('register fail')
      }
    } else {
      console.error('register fail')
      return
    }
  }

  return (
    <L.Form onSubmit={handleSubmit}>
      <L.InputWrapper>
        <L.Label>이메일</L.Label>
        <L.Input
          type='email'
          name='email'
          id='email'
          value={signupForm.email}
          onChange={handleChange}
          placeholder='이메일을 입력해주세요'
          required
          disabled={!!accessToken} // accessToken이 있으면 이메일 입력을 비활성화
        />
        {!accessToken && (
          <L.Button type='button' onClick={handleCheckEmail}>
            중복확인
          </L.Button>
        )}
        <L.ValidationMessage error={!isValid.email}>
          {validMessage.emailMessage}
        </L.ValidationMessage>
      </L.InputWrapper>
      <L.InputWrapper>
        <L.Label>닉네임</L.Label>
        <L.Input
          type='text'
          name='nickname'
          id='nickname'
          value={signupForm.nickname}
          onChange={handleChange}
          maxLength={10}
          placeholder='닉네임'
          required
        />
        <L.Button type='button' onClick={handleCheckNickname}>
          중복확인
        </L.Button>
        <L.ValidationMessage error={!isValid.nickname}>
          {validMessage.nicknameMessage}
        </L.ValidationMessage>
      </L.InputWrapper>
      <L.InputWrapper>
        <L.Label>자녀 출생연도</L.Label>
        <L.Select
          name='year'
          id='year'
          value={signupForm.year}
          onChange={handleSelectChange}
          required
        >
          <option value='' disabled>
            출생연도
          </option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </L.Select>
      </L.InputWrapper>
      <L.InputWrapper>
        <L.Label>사는 지역</L.Label>
        <L.Select
          name='area'
          value={selectedArea}
          onChange={handleAreaChange}
          required
        >
          <option value='' disabled>
            지역 선택
          </option>
          {getAreaNames().map(area => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </L.Select>
        <L.Select
          name='sigungu'
          value={selectedSigungu}
          onChange={handleSigunguChange}
          required
        >
          <option value='' disabled>
            시/군/구 선택
          </option>
          {sigunguList.map(sigungu => (
            <option key={sigungu.sigungucode} value={sigungu.sigunguname}>
              {sigungu.sigunguname}
            </option>
          ))}
        </L.Select>
      </L.InputWrapper>

      <L.InputWrapper>
        <L.Label>비밀번호</L.Label>
        <L.Input
          type='password'
          name='password'
          id='password'
          value={signupForm.password}
          onChange={handleChange}
          placeholder='영문자, 숫자, 특수문자 포함 8~20자리'
          required
        />
        <L.ValidationMessage error={!isValid.password}>
          {validMessage.passwordMessage}
        </L.ValidationMessage>
        <L.Input
          type='password'
          name='checkedPassword'
          id='checkedPassword'
          placeholder='비밀번호 확인'
          value={signupForm.checkedPassword}
          onChange={handleChange}
          required
        />
        <L.ValidationMessage error={!isValid.checkedPassword}>
          {validMessage.checkedPasswordMessage}
        </L.ValidationMessage>
      </L.InputWrapper>
      <br />
      <L.SubmitButton type='submit'>회원가입 완료하기</L.SubmitButton>
      <L.TextCenter>
        이미 회원가입을 하셨나요?&nbsp;&nbsp;&nbsp;
        <L.Link href='/login'>로그인하기</L.Link>
      </L.TextCenter>
    </L.Form>
  )
}

export default RegisterForm
