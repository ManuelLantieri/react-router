import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import "./App.css";

function Layout({ children }) {
  return (
    <div>
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Chi Siamo
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Post
        </NavLink>
      </nav>
      <main>{children}</main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
