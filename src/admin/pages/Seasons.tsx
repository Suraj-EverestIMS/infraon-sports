import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAppConfig } from "../../firebase/seasonService";
import type { AppConfig } from "../../types";

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
      <h1 className="text-3xl font-bold mb-6">Select Season</h1>

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
