import {
  Navigate,
  Outlet,
} from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import AuthLoader from "./AuthLoader";

export default function PublicRoute() {
  const { user, loading } = useAuth();

  if (loading) {
    return <AuthLoader />;
  }

  if (user) {
    return (
      <Navigate
        to="/admin"
        replace
      />
    );
  }

  return <Outlet />;
}