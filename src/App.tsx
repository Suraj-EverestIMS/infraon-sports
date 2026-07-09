import Header from './components/Header';
import HeroSection from './components/HeroSection';
import UpcomingMatches from './components/UpcomingMatches';
import PointsTable from './components/PointsTable';
import KnockoutBracket from './components/KnockoutBracket';
import PreviousMatches from './components/PreviousMatches';
import Highlights from './components/Highlights';
import Footer from './components/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useSeasonData } from './hooks/useSeasonData';

function App() {
  const { seasons, activeSeasonId, setActiveSeasonId, data, loading, error } = useSeasonData();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold text-red-600 mb-2">Couldn't load tournament data</h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (loading || !data) {
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-500">Loading tournament data...</div>
      </div>
    );
  }

  const upcomingMatches = data.matches.filter(
    (match) =>
      match.stage === 'group' &&
      match.status === 'scheduled'
  ).sort((a, b) => a.date.localeCompare(b.date));

  const previousMatches = data.matches.filter(
    match => match.status === "completed"
  ).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        seasons={seasons}
        activeSeasonId={activeSeasonId}
        onSeasonChange={setActiveSeasonId}
      />
      <HeroSection data={data} />
      <UpcomingMatches matches={upcomingMatches} />
      <PointsTable groups={data.groups} previousMatches={previousMatches} />
      <KnockoutBracket data={data} />
      <PreviousMatches matches={previousMatches} />
      <Highlights highlights={data.highlights} />
      <Footer />
    </div>
  );
}

export default App;
