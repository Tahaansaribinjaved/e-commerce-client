import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App