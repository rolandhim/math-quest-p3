import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import QuizPage from './pages/QuizPage.jsx'
import ChallengeParent from './pages/ChallengeParent.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz/:topic" element={<QuizPage />} />
          <Route path="/challenge" element={<ChallengeParent />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
