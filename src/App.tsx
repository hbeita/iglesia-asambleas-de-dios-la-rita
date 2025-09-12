import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Contacto from "./pages/Contacto";
import Donar from "./pages/Donar";
import Eventos from "./pages/Eventos";
import Home from "./pages/Home";
import Ministerios from "./pages/Ministerios";
import SobreNosotros from "./pages/SobreNosotros";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ministerios" element={<Ministerios />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/donar" element={<Donar />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
