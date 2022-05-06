import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SignUp from './signUp'
import LogIn from './logIn'
import Home from './components/Home'
import { useAuthContext } from './useAuthContext'
import './components/App.css'
import Auth from './components/Auth'
import Onboard from './components/Onboarding'
import Nav from './components/Nav';

function App() {
  const { user, authIsReady } = useAuthContext()
  return (
    <div className="App">
      {/* {authIsReady && (
        <BrowserRouter>
          <Routes>
              <Route path="/" />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
          </Routes>
        </BrowserRouter>
      )} */}


      <Nav></Nav>
      {authIsReady &&
      <BrowserRouter>
      <Routes>
        <Route path="/onboard" element={user? <Onboard/> : <Navigate to="/login" />} />
        {//user && <Route path="/onboard" element={<Onboard/>}></Route>
        }
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element = {<Auth/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>}
    </div>
  )}

export default App;