
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProdcuctDetail from "./pages/ProdcuctDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tools from "./pages/Tools";
import Materail from "./pages/Materail";
import Equipment from "./pages/Equipment";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Home>{<Tools />}</Home>} />
        <Route path="/material" element={<Home>{<Materail/>}</Home>} />
        <Route path="/equipment" element={<Home>{<Equipment />}</Home>} />
        <Route path="/product/:id" element={<ProdcuctDetail/>}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
