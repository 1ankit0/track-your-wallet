import { Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/LoginPage"

function App() {
  return (
    <>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path="/" element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
