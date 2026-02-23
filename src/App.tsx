import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Vghadim from './pages/vGhadim/Vghadim'
import Vjadid from './pages/vJadid/Vjadid'
import { CourseProvider } from './context/CourseContext'
import Bookmark from './pages/bookmark/Bookmark'
function App() {
  return (
    <CourseProvider>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/vghadim" element={<Vghadim />} />
        <Route path="/vjadid" element={<Vjadid />} />
        <Route path="/bookmark" element={<Bookmark />} />


      </Routes>
    </CourseProvider>
  )
}

export default App