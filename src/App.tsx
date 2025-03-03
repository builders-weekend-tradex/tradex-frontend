import "./App.css";
import "./index.css";
import Header from "./components/layout/Header";
import LandingPage from "./components/pages/LandingPage";
import Footer from "./components/layout/Footer";
import "./i18n";

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
