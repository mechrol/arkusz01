import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'

// Import placeholder components for pages that might not exist yet
const RegistrationPage = ({setUserData}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    setUserData({
      nickname: e.target.nickname.value,
      email: e.target.email.value
    })
  }
  
  return (
    <div className="container" style={{padding: '2rem 0'}}>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom: '1rem'}}>
          <label htmlFor="nickname">Nickname:</label>
          <input type="text" id="nickname" name="nickname" required />
        </div>
        <div style={{marginBottom: '1rem'}}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

const WorksheetPage = ({userData, worksheetData, setWorksheetData}) => (
  <div className="container" style={{padding: '2rem 0'}}>
    <h1>Financial Worksheet</h1>
    {userData ? (
      <div>Welcome, {userData.nickname}!</div>
    ) : (
      <div>Please register first</div>
    )}
  </div>
)

const ThankYouPage = ({userData}) => (
  <div className="container" style={{padding: '2rem 0'}}>
    <h1>Thank You!</h1>
    {userData && <p>Thank you for completing the worksheet, {userData.nickname}!</p>}
  </div>
)

function App() {
  const [userData, setUserData] = useState(null)
  const [worksheetData, setWorksheetData] = useState({})

  return (
    <Router>
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Header />
        <main style={{flex: '1'}}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/register" 
              element={<RegistrationPage setUserData={setUserData} />} 
            />
            <Route 
              path="/worksheet" 
              element={
                <WorksheetPage 
                  userData={userData} 
                  worksheetData={worksheetData}
                  setWorksheetData={setWorksheetData}
                />
              } 
            />
            <Route path="/thank-you" element={<ThankYouPage userData={userData} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
