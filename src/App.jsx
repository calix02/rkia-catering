import LandingPage from './landing_page/LandingPage'
import Unauthorized from './Unauthorized';
import AdminDashboard from './admin/Dashboard';
import Bookings from './admin/Bookings';
import Events from './admin/Events';
import Payments from './admin/Payments';
import Accounts from './admin/Accounts';
import BookRequest from './admin/BookRequest';
import AdminRoute from './AdminRoute';
import CustomerRoute from './CustomerRoute';

import UserDashboard from './user/Dashboard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/admin/dashboard' element={
          <AdminRoute>
              <AdminDashboard/>
          </AdminRoute>
          }/>
        <Route path='/admin/bookings' element={<Bookings/>}/>
        <Route path='/admin/events' element={<Events/>}/>
        <Route path='/admin/payments' element={<Payments/>}/>
        <Route path='/admin/accounts' element={<Accounts/>}/>
        <Route path='/admin/book-request' element={<BookRequest/>}/>


        <Route path='/user/dashboard' element={
            <CustomerRoute>
              <UserDashboard/>
            </CustomerRoute>
          }/>

        <Route path='/403' element={<Unauthorized/>}/>



      </Routes>
    </Router>
     
    </>
  )
}

export default App
