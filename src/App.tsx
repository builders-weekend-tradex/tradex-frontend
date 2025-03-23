import "./index.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./i18n";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="p-6">
      <Header />
      {/* Outlet will update dynamically based on the current route */}
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
