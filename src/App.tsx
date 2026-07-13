import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./public/Home";

import Login from "./admin/pages/Login";
import Seasons from "./admin/pages/Seasons";
import Matches from "./admin/pages/Matches";
import AdminLayout from "./admin/layouts/AdminLayout";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/admin/login" element={<Login />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="seasons" element={<Seasons />} />
          <Route path="seasons/:seasonId" element={<Matches />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;