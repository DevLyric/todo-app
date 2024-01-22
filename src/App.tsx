import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Todo from "./pages/Todo";

export default function App() {
  return (
    <div className="w-screen h-screen bg-zinc-800 text-white">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/app/todo" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}
