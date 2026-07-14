import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAppConfig } from "../../firebase/seasonService";
import type { AppConfig } from "../../types";
import { CalendarClock } from "lucide-react";

export default function Season() {
  const [config, setConfig] = useState<AppConfig | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getAppConfig();
    setConfig(data);
  }

  if (!config) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-between mb-6 items-center flex-col md:flex-row gap-2">
        <h1 className="text-3xl font-bold">Select Season</h1>

        <a
          href="https://suraj-everestims.github.io/infraon-sports/"
          className="w-fit flex items-center gap-2 rounded-lg border px-4 py-2 transition bg-white hover:bg-gray-100"
        >
          Check Tournament
          <CalendarClock size={18} />
        </a>
      </div>

      <div className="grid gap-4">
        {config.seasons.map((season) => (
          <button
            key={season.id}
            onClick={() => navigate(`/admin/seasons/${season.id}`)}
            className="rounded-lg border bg-white p-5 text-left hover:border-blue-500"
          >
            <div className="font-semibold">{season.name}</div>
            <div className="text-sm text-gray-500">{season.year}</div>
          </button>
        ))}
      </div>
    </>
  );
}
