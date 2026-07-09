import { useCallback, useEffect, useState } from 'react';
import { getAppConfig, getSeasonData } from '../firebase/seasonService';
import type { SeasonData, SeasonMeta } from '../types';

interface UseSeasonDataResult {
  seasons: SeasonMeta[];
  activeSeasonId: string;
  setActiveSeasonId: (id: string) => void;
  data: SeasonData | null;
  loading: boolean;
  error: string | null;
}

export function useSeasonData(): UseSeasonDataResult {
  const [seasons, setSeasons] = useState<SeasonMeta[]>([]);
  const [activeSeasonId, setActiveSeasonIdState] = useState<string>('');
  const [data, setData] = useState<SeasonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const config = await getAppConfig();
        if (cancelled) return;
        const sorted = [...config.seasons].sort((a, b) => b.order - a.order);
        setSeasons(sorted);
        setActiveSeasonIdState(config.latestSeasonId);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load app config.');
          setLoading(false);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!activeSeasonId) return;
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const seasonData = await getSeasonData(activeSeasonId);
        if (!cancelled) setData(seasonData);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Failed to load season data.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [activeSeasonId]);

  const setActiveSeasonId = useCallback((id: string) => {
    setActiveSeasonIdState(id);
  }, []);

  return { seasons, activeSeasonId, setActiveSeasonId, data, loading, error };
}
