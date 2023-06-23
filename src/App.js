import './App.css';
import About from "./components/About";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import Info from "./components/myInfo";

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
