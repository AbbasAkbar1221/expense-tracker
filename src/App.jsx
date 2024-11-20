import Navbar from "./Navbar";
import Form from "./pages/form";
import HomePage from "./pages/HomePage";
import View from "./pages/View"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/expense" element={<Form/>}/>
        <Route path="/view" element={<View/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
