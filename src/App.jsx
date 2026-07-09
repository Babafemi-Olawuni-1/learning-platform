import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import LandingPage from './pages/LandingPage'
import RegisterPage from './pages/RegisterPage'
import VerifyEmailPage from './pages/VerifyEmailPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import SubjectsListPage from './pages/SubjectsListPage'
import SubjectPage from './pages/SubjectPage'
import TopicPage from './pages/TopicPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import AIRecommendationsPage from './pages/AIRecommendationsPage'
import SubscriptionPage from './pages/SubscriptionPage'
import TutorsAppPage from './pages/TutorsAppPage'
import ProfilePage from './pages/ProfilePage'
import AdminDashboardPage from './pages/AdminDashboardPage'

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          {/* Public */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Student app */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/subjects" element={<SubjectsListPage />} />
          <Route path="/subject/:id" element={<SubjectPage />} />
          <Route path="/topic/:id" element={<TopicPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/ai-recommendations" element={<AIRecommendationsPage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/tutors-app" element={<TutorsAppPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboardPage />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  )
}
