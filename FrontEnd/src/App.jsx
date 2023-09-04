import { Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Resgister from "./pages/Register";

const App = () => {
  return (
    <>
      <nav className="hidden">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Register">Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Resgister/>} />
      </Routes>
    </>
  );
};

export default App;
