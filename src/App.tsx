import "./App.css";
import "./index.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./i18n";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      {/* Outlet will update dynamically based on the current route */}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
