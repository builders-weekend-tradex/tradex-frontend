import "./App.css";
import "./index.css";
import Header from "./layout/Header";
import LandingPage from "./pages/LandingPage";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
