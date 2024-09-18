import { Routes , Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from "./pages/Home"
import ComingSoon from './pages/ComingSoon'
import Crew from './pages/Crew'
import NotFound from './pages/NotFound'
function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/comingsoon" element={<ComingSoon/>}/>
        <Route path="/more" element={<ComingSoon/>}/>
        <Route path="/crew" element={<Crew/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>

    </>
  )
}

export default App
