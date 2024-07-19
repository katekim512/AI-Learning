import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import Calendar from './pages/CalendarPage/Calendar'
import Login from './pages/LoginPage/Login'
import Profile from './pages/ProfilePage/Profile'
import Rank from './pages/RankPage/Rank'
import Recommend from './pages/RecommendPage/Recommend'

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
        path: 'calendar',
        element: <Calendar />,
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
        path: 'ranking-place',
        element: <Rank />,
      },
    ],
  },
])

export default router
