
import { Navigate,Route, Routes} from "react-router-dom"
import Home from "./home/Home"
import About from "./componentrs/About"
import Contact from "./componentrs/Contact"
import Books from "./Books/Books"
import SignUp from "./componentrs/SignUp"
import {Toaster} from 'react-hot-toast'
import { useAuth } from "./context/AuthProvider"


function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="books"element={authUser ? <Books /> : <Navigate to="/signup" />} />
        <Route path="about" element={<About/>} />

        <Route path="contact" element={<Contact/>} />
        <Route path="signup" element={<SignUp/>}/>
     </Routes>
     <Toaster/>
    </>
  )
}

export default App
