import { BrowserRouter, Routes, Route } from "react-router-dom"
import Createpost from "../src/components/Createpost.jsx"
import Read from "../src/components/Read.jsx"
import Update from "../src/components/Update.jsx"
import Navbar from "./components/Navbar";
import Signup from "./components/Signup.jsx";
const App = () => {
  return <div>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Createpost/> }/>
        <Route path="/read" element={<Read/> }/>
        <Route path="/signup" element={<Signup/> }/>
        <Route path="/:id" element={<Update/> }/>
      </Routes>

    </BrowserRouter>

  </div>;

};

export default App;
