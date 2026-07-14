import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./public/Home";

import Login from "./admin/pages/Login";
import Seasons from "./admin/pages/Seasons";
import Matches from "./admin/pages/Matches";
import AdminLayout from "./admin/layouts/AdminLayout";
import PublicRoute from "./admin/components/PublicRoute";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import Dashboard from "./admin/pages/Dashboard";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PublicRoute />}>
          <Route path="/admin/login" element={<Login />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />

            <Route path="seasons" element={<Seasons />} />

            <Route path="seasons/:seasonId" element={<Matches />} />
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
