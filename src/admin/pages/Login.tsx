import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";

export default function Login() {
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      await login();
      navigate("/admin/seasons");
    } catch (err) {
      alert(err instanceof Error ? err.message : "Login failed");
    }
  }

  return (
    <div className="login-wrapper">
      <div className="flex items-center flex-col gap-3 justify-center">
        <button
          onClick={handleLogin}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign in with Google
        </button>
        <a
          href="https://suraj-everestims.github.io/infraon-sports/"
          className="px-6 py-3 bg-gray-300 text-grey-800 rounded-lg hover:bg-blue-200"
        >
          Way to Tournament
        </a>
      </div>
    </div>
  );
}
