import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import AISchedule1 from './pages/AISchedule1Page/AISchedule1'
import AISchedule2 from './pages/AISchedule2Page/AISchedule2'
import AISchedule3 from './pages/AISchedule3Page/AISchedule3'
import CalendarInput from './pages/CalendarInputPage/CalendarInput'
import CalendarCycle from './pages/CalendarInputPage/CalenderCycle'
import Calendar from './pages/CalendarPage/Calendar'
import AddPlace from './pages/CalendarPage/components/AddPlace'
import DateSelected from './pages/DateSelectedPage/DateSelected'
import KakaoRedirectHandle from './pages/LoginPage/components/KakaoRedirectHandle'
import Login from './pages/LoginPage/Login'
import MyInfoEdit from './pages/MyInfoEditPage/MyInfoEdit'
import PlaceDetail from './pages/PlaceDetailPage/PlaceDetail'
import Profile from './pages/ProfilePage/Profile'
import Rank from './pages/RankPage/Rank'
import Recommend from './pages/RecommendPage/Recommend'
import RecommendDetail from './pages/RecommendPage/RecommendDetail'
import Register from './pages/RegisterPage/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'login/oauth',
        element: <KakaoRedirectHandle />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'calendar',
        element: <Calendar />,
      },
      {
        path: 'addplace/:date',
        element: <AddPlace />,
      },
      {
        path: 'calendarInput',
        element: <CalendarInput />,
      },
      {
        path: 'calendarCycle',
        element: <CalendarCycle />,
      },
      {
        path: 'place/:contenttypeid/:contentid',
        element: <PlaceDetail />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'recommend-place',
        element: <Recommend />,
      },
      {
        path: 'recommend-place-detail',
        element: <RecommendDetail />,
      },
      {
        path: 'dateselected/:contentid/:place', // 동적 매개변수로 경로 설정
        element: <DateSelected />,
      },
      {
        path: 'ranking-place',
        element: <Rank />,
      },
      {
        path: 'ai-schedule-step1',
        element: <AISchedule1 />,
      },
      {
        path: 'ai-schedule-step2',
        element: <AISchedule2 />,
      },
      {
        path: 'ai-schedule-step3',
        element: <AISchedule3 />,
      },
      {
        path: 'my-info',
        element: <MyInfoEdit />,
      },
    ],
  },
])

export default router
