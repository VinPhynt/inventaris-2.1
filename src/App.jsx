import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<Login/>} />
        <Route path="/dashboarad" element={<Dashboard/>} />

      </Routes>
    </BrowserRouter>
  )
}
export default App;
