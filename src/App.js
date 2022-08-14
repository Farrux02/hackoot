import "./App.css";
import Main from "./Components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BeReady from "./Pages/BeReady";
import Preload from "./Pages/Preload";
import Quiz from "./Pages/Quiz";
import AdminPanel from "./Pages/AdminPanel";

function App() {
  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<AdminPanel/>} />
          <Route path="/preload/:quiz_id" element={<Preload/>} />
          <Route path="/ready/:quiz_id" element={<BeReady/>} />
          <Route path="/quiz/:quiz_id" element={<Quiz/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
