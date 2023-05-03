import Homepage from "./components/Homepage";
import Single from "./components/Single";
import Login from "./components/Login";
import Register from "./components/Register";
import Settings from "./components/Settings";
import TopBar from "./components/TopBar";
import Write from "./components/Write";

import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={user ? <Homepage /> : <Register />} />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
