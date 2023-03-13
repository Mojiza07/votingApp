
import './App.css';
import { Route, Routes } from 'react-router-dom'
import LogIn from "./pages/logIn/components/login" 
import SignUp from "./pages/signUp/components/singUp"
import OtpInput from "./pages/otpInput/componets/otpInput";
import OtpInputAction from './pages/otpInputAction/components/otpInputAction';
import VerifyAccount from './pages/verifyAccount/components/verifyAccount';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path={'/signUp'} element={<SignUp/>}/>
          <Route path={'/verifyAccount'} element={<VerifyAccount/>}/>
          <Route path={'/logIn'} element={<LogIn/>}/>
          <Route path={'/otpInput'} element={<OtpInput/>}/>
          <Route path={'/otpInputAction'} element={<OtpInputAction/>}/>
      </Routes>

    </div>
  );
}

export default App;