import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import WorkClass from './pages/WorkClass'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/class" element={<WorkClass/>}/>
      </Routes>
    </>
  )
}

export default App
