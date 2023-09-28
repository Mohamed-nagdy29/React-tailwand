import "./App.css";
import { Analyises } from "./Componets/Analyises";
import { Card } from "./Componets/Card";
import { Footer } from "./Componets/Footer";
import Hero from "./Componets/Hero";
import { Middle } from "./Componets/Middle";
import { Navbbar } from "./Componets/Navbbar";
function App() {
  return (
    <div className="App">
      <Navbbar />
      <Hero />
      <Analyises />
      <Middle />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
