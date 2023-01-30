import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import RouteError from "./pages/RouteError";
import Users from "./pages/Users";
import "./styles/global.scss";

function App() {
  return (
    <div className="root">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/user" element={<Users />} />
          <Route path="/dashboard/users" element={<Users />} />
          <Route path="/dashboard/users/:userId" element={<UserDetails />} />
          <Route path="/*" element={<RouteError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
