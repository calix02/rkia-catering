import LandingPage from './landing_page/LandingPage'
import Unauthorized from './Unauthorized';
 
import AdminDashboard from './admin/Dashboard';
import Bookings from './admin/Bookings';
import Events from './admin/Events';
import Accounts from './admin/Accounts';
import BookingHistory from './admin/BookingHistory';

import BookRequest from './admin/BookRequest';
import AdminRoute from './AdminRoute';
import CustomerRoute from './CustomerRoute';

import UserDashboard from './user/Dashboard';
import BookingStatus from './user/BookingStatus';
import BookingHistoryUser from './user/BookingHistory';

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
        <Route path='/admin/bookings' element={
          <AdminRoute>
              <Bookings/>
          </AdminRoute>
        }/>
        <Route path='/admin/events' element={
          <AdminRoute>
              <Events/>
          </AdminRoute>
        }/>
       
         <Route path='/admin/booking-history' element={
          <AdminRoute>
              <BookingHistory/>
          </AdminRoute>
        }/>
        <Route path='/admin/accounts' element={
          <AdminRoute>
              <Accounts/>
          </AdminRoute>
        }/>
        <Route path='/admin/book-request' element={
          <AdminRoute>
              <BookRequest/>
          </AdminRoute>
        }/>

        <Route path='/customer/dashboard' element={
            <CustomerRoute>
              <UserDashboard/>
            </CustomerRoute>
          }/>
           <Route path='/customer/book-status' element={
            <CustomerRoute>
              <BookingStatus/>
            </CustomerRoute>
          }/>
           <Route path='/customer/book-history' element={
            <CustomerRoute>
              <BookingHistoryUser/>
            </CustomerRoute>
          }/>

        <Route path='/403' element={<Unauthorized/>}/>

      </Routes>
    </Router>
     
    </>
  )
}

export default App
