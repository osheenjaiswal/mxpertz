import { Route, Routes } from 'react-router-dom'
import Cards from './Components/Cards'
import ViewCard from './Components/ViewCard'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {
 
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/card"  element={<Cards/>}/>
      <Route path="/viewcard/:id"  element={<ViewCard/>}/>
    </Routes>
    
    </>
  )
}

export default App
