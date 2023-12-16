import LandingPage from './views/LandingPage'
import '/src/assets/styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './views/LoginPage'
import SignUp from './views/SignUpPage'
import Feedback from './components/landingpages/Feedback'
import ServicePage from './components/service/ServicePage'
import TransportEmployee from './views/TransportEmployee'
import Admin from './views/Admin'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='login' element={<LoginPage/>} />
      <Route path='signup' element={<SignUp/>} />
      <Route path='service' element={<ServicePage/>} />
      <Route path='service/transport-employee' element={<TransportEmployee/>} />
      <Route path='service/admin' element={<Admin/>} />
      <Route path='feedback' element={<Feedback/>} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
