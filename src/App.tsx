import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import UpcomingMatches from './components/UpcomingMatches';
import PointsTable from './components/PointsTable';
import KnockoutBracket from './components/KnockoutBracket';
import PreviousMatches from './components/PreviousMatches';
// import Highlights from './components/Highlights';
import Footer from './components/Footer';

import { 
  groups, 
  upcomingMatches, 
  previousMatches, 
  // highlights, 
  knockoutMatches 
} from './data/tournamentData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <UpcomingMatches matches={upcomingMatches} />
      <PointsTable groups={groups} />
      <KnockoutBracket matches={knockoutMatches} />
      <PreviousMatches matches={previousMatches} />
      {/* <Highlights highlights={highlights} /> */}
      <Footer />
    </div>
  );
}

export default App;