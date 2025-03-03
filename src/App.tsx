import "./App.css";
import "./index.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./i18n";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <main className="flex-1 p-4 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
