import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./common/layout";
import PageNotFound from "./components/404";
import Home from "./pages";
import TrackDetail from "./pages/trackDetails";
import "./styles/index.scss";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/track/:id" element={<TrackDetail />} />
        </Route>
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
