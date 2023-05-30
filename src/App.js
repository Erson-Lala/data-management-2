import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Regjistrohu from "./Components/Regjistrohu/Regjistrohu";
import Indentifikohu from "./Components/Indentifikohu/Indentifikohu";
import Studentet from "./Components/Studentet/Studentet";
import DetajetEStudenteve from "./Components/DetajetEStudenteve/DetajetEStudenteve";
import './App.sass'

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/regjistrohu" element={<Regjistrohu/>}/>
        <Route path="/indentifikohu" element={<Indentifikohu/>}/>
        <Route path="/studentet" element={<Studentet/>}/>
        <Route path="/detajetestudenteve" element={<DetajetEStudenteve/>}/>
      </Routes>
    </Router>
  );
}

export default App;
