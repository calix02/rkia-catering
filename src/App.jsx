import LandingPage from './landing_page/LandingPage'
import AdminDashboard from './admin/Dashboard';
import UserDashboard from './user/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
        <Route path='/user/dashboard' element={<AdminDashboard/>}/>


      </Routes>
    </Router>
     
    </>
  )
}

export default App
