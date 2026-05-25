import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import HomePage from './pages/HomePage.jsx'
import QuizPage from './pages/QuizPage.jsx'
import ChallengeParent from './pages/ChallengeParent.jsx'
import TimedChallengePage from './pages/TimedChallengePage.jsx'
import WrongQuestionsPage from './pages/WrongQuestionsPage.jsx'
import ParentDashboard from './pages/ParentDashboard.jsx'
import ClockPage from './pages/ClockPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import MultiplicationPage from './pages/MultiplicationPage.jsx'
import SongPage from './pages/multiplication/SongPage.jsx'
import MatchPage from './pages/multiplication/MatchPage.jsx'
import MonsterPage from './pages/multiplication/MonsterPage.jsx'
import ColoringPage from './pages/multiplication/ColoringPage.jsx'
import DailyChallengePage from './pages/multiplication/DailyChallengePage.jsx'
import './App.css'

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-spinner"></div>
      <p style={{ marginTop: 16, fontSize: 18, fontWeight: 700, color: 'var(--text-light)' }}>
        準備中...
      </p>
    </div>
  )
}

function AppRoutes() {
  const { currentUser, loading } = useAuth()

  if (loading) {
    return <LoadingScreen />
  }

  if (!currentUser) {
    return <LoginPage />
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz/:topic" element={<QuizPage />} />
      <Route path="/challenge" element={<ChallengeParent />} />
      <Route path="/timed-challenge" element={<TimedChallengePage />} />
      <Route path="/wrong-questions" element={<WrongQuestionsPage />} />
      <Route path="/parent-dashboard" element={<ParentDashboard />} />
      <Route path="/clock" element={<ClockPage />} />
      <Route path="/multiplication" element={<MultiplicationPage />} />
      <Route path="/multiplication/song" element={<SongPage />} />
      <Route path="/multiplication/match" element={<MatchPage />} />
      <Route path="/multiplication/monster" element={<MonsterPage />} />
      <Route path="/multiplication/coloring" element={<ColoringPage />} />
      <Route path="/multiplication/daily" element={<DailyChallengePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app">
          <AppRoutes />
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
