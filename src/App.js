import { BrowserRouter, Routes, Route } from "react-router-dom";
import Componentes from "./componentes";
import Detalle from "./detalle";

function App({ locale }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Componentes />} />
        <Route path="/edificios" element={<Componentes />} />
        <Route path="/edificios/:edificioId" element={<Detalle locale={locale} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
