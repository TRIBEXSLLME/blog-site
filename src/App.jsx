import "./App.css";
import Topbar from '../src/components/topbar/Topbar'
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const user = false;

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/write" element={user ? <Write /> : <Register/>} />
        <Route path="/settings" element={user ? <Settings />: <Register/>} />
        <Route path="/login" element={user ? <Home/>:<Login />} />
        <Route path="/register" element={user ? <Home/> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
