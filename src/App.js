import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./navigationbar/Navbar"; 
import Usecontexthook from "./contexthook/Usecontexthook";
import Refhook from "./refhook/Refhook";
import Ustatehook from "./statehook/Ustatehook";
import Useeffecthook from "./useeffecthook/Useeffecthook";
import Counter2 from "./usecustomhook/Counter2";
import Customhook from "./usecustomhook/Customhook";
import Memohook from "./usememo/Memohook";
import Reducer from "./usereducer/Reducer";
import ProductPage from "./usecallback/ProductPage";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/customhook" element={<Customhook />} />
        <Route path="/counter2" element={<Counter2 />} />
        <Route path="/memohook" element={<Memohook />} />
        <Route path="/refhook" element={<Refhook />} />
        <Route path="/useeffecthook" element={<Useeffecthook />} />
        <Route path="/ustatehook" element={<Ustatehook />} />
        <Route path="/usecontexthook" element={<Usecontexthook />} />
      </Routes>
    </Router>
  );
}

export default App;
