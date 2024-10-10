import LandingContent from "./components/landingPage/landing";
import "./index.css"
import {Routes, Route} from "react-router-dom";
import Dashboard from "./components/TheDashboard/Dashboard";

function App() {
  return (
    <main>
      {/* <LandingContent /> */}
      <Routes>
        <Route path="/" element={<LandingContent />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
  );
}

export default App;

