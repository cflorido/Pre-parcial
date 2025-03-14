import logo from './logo.svg';
import './App.css';
import Componentes from "./componentes";
import Detalle from "./detalle";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Componentes />} />
          <Route path="/edificios" element={<Componentes />} />
          <Route path="/edificios/:edificioId" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
 }

export default App;
