import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import { screenRoutes } from './Routes/AllRoute';
import MainLayout from './components/Layouts/MainLayout';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Otp from './components/Otp/Otp';
import Forgotpassword from './components/ForgotPassword/Forgotpassword';
import VerifyCode from './components/VerifyCode/VerifyCode';
import SetPassword from './components/SetPassword/Setpassword';
import Account from './components/Account/Account';
import PassengerDetails from './components/Passenger Details/PassengerDetails';
import OnlineBooking from './components/OnlineBookingHome/OnlineBooking';
import Ticket from './components/Bus-Ticket/Ticket';
import Ticket3 from './components/Bus-Ticket/Ticket3';
import Ticket1 from './components/Bus-Ticket/Ticketes';
import Ticketes from './components/Bus-Ticket/Ticketes';
import 'bootstrap/dist/css/bootstrap.css';


// import './App.css';

function App() {
  return (
   <BrowserRouter>
   <MainLayout>
   <Routes>
    {
      screenRoutes.map((elm)=>{
        return(
          <Route path={elm.path} element={elm.component} />
          
        )
      })
    }


    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/otp" element={<Otp/>} />
    <Route path="/forgotpassword" element={<Forgotpassword/>} />
    <Route path="/verifycode" element={<VerifyCode/>} />
    <Route path="/setpassword" element={<SetPassword/>} />
    <Route path="/account" element={<Account/>} />
    <Route path="/passenger" element={<PassengerDetails/>} />
    <Route path="/booking" element={<OnlineBooking/>} />
    <Route path="/ticket" element={<Ticket/>}/>
<Route path="/ticket1" element={<Ticketes/>}/>
<Route path="/ticket2" element={<Ticket3/>}/>
   </Routes>
   </MainLayout>
   </BrowserRouter>
  );
}

export default App;
