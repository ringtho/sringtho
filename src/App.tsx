import Navbar from "./components/Navbar/Navbar"
import { Work, Services, About, Contact } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Work />} />
          <Route path='/services' element={<Services />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
