import { CalendarClock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function comingSoon(sport: string) {
    alert(`${sport} is coming soon!`);
  }

  return (
    <div>
      <div className="mb-8 flex justify-between items-center flex-col md:flex-row gap-2">
        <h1 className="text-3xl font-bold">Sports Admin</h1>

        <a
          href="https://suraj-everestims.github.io/infraon-sports/"
          className="w-fit flex items-center gap-2 rounded-lg border px-4 py-2 transition bg-white hover:bg-gray-100"
        >
          Check Tournament
          <CalendarClock size={18} />
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <button
          onClick={() => navigate("/admin/seasons")}
          className="rounded-xl border bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="text-5xl">🏓</div>

          <h2 className="mt-4 text-xl font-semibold">Table Tennis</h2>

          <p className="mt-2 text-sm text-gray-500">
            Manage seasons, matches and results.
          </p>
        </button>

        <button
          onClick={() => comingSoon("Badminton")}
          className="rounded-xl border bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="text-5xl">🏸</div>

          <h2 className="mt-4 text-xl font-semibold">Badminton</h2>

          <p className="mt-2 text-sm text-gray-500">Coming Soon</p>
        </button>

        <button
          onClick={() => comingSoon("Carrom")}
          className="rounded-xl border bg-white p-8 shadow transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="text-5xl">🎯</div>

          <h2 className="mt-4 text-xl font-semibold">Carrom</h2>

          <p className="mt-2 text-sm text-gray-500">Coming Soon</p>
        </button>
      </div>
    </div>
  );
}
