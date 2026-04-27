import { Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/LoginPage"
import Categoties from "./Pages/Categoties"
import Expenses from "./Pages/Expenses"
import RecurringExpenses from "./Pages/RecurringExpenses"
import Navbar from "./Pages/Navbar"

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/categories" element={<Categoties/>}></Route>
        <Route path="/expenses" element={<Expenses/>}></Route>
        <Route path="/recurring" element={<RecurringExpenses/>}></Route>
      </Routes>
    </>
  )
}

export default App
