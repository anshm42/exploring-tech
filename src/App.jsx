import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Developments from "./pages/Developments";
import Facts from "./pages/Facts";
import Outlook from "./pages/Outlook";
import References from "./pages/References";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/exploring-tech" element={<Home />} />
          <Route path="/developments" element={<Developments />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/outlook" element={<Outlook />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
