import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import "./styles/global.scss";
import RouteError from "./pages/RouteError";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="home" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/users/:userId" element={<UserDetails />} />
        <Route path="/*" element={<RouteError />} />
      </Routes>
    </Router>
  );
}

export default App;
