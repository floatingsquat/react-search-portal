import Home from "./pages/Home";
import FullSearchResult from "./pages/FullSearchResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import "./styles/reset.css";
import Record from "./pages/Record";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-record" element={<Record />} />
          <Route path="/search-result/:query" element={<FullSearchResult />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
