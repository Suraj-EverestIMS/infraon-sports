import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LogOut, ArrowLeft } from "lucide-react";
import { logout } from "../../firebase/auth";

export default function AdminLayout() {
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/admin/login");
  }

  const location = useLocation();

  const showBackButton = location.pathname !== "/admin";

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between border-b bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          {showBackButton && (
            <button
              onClick={() => navigate(-1)}
              className="rounded-lg border p-2 hover:bg-gray-100"
            >
              <ArrowLeft size={18} />
            </button>
          )}

          <img
            src="https://infraon-assets.s3.us-west-1.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/logo.png"
            alt=""
            width={180}
          />
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 rounded-lg border px-4 py-2 transition hover:bg-gray-100"
        >
          <LogOut size={18} />
          <span className="hidden md:flex">Logout</span>
        </button>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
