import { Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Resgister from "./pages/Register";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <nav className="hidden">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Profile">Profile</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Resgister/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  );
};

export default App;
