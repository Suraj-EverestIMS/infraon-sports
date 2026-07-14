import React from "react";
import type { SeasonMeta } from "../types";
import { LogIn } from "lucide-react";

interface HeaderProps {
  seasons: SeasonMeta[];
  activeSeasonId: string;
  onSeasonChange: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  seasons,
  activeSeasonId,
  onSeasonChange,
}) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <a href="/" className="flex items-center gap-2">
          <div className="w-[180px] flex items-center justify-center text-white rounded-full">
            <img
              src="https://infraon-assets.s3.us-west-1.amazonaws.com/docs/sports-tournaments-highlights/table-tennis/logo.png"
              alt=""
            />
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button
            onClick={() => scrollToSection("home")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("matches")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Matches
          </button>
          <button
            onClick={() => scrollToSection("points")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Points Table
          </button>
          <button
            onClick={() => scrollToSection("brackets")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Brackets
          </button>
          <button
            onClick={() => scrollToSection("matchResults")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Matches Results
          </button>
          <button
            onClick={() => scrollToSection("highlights")}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Highlights
          </button>

          <select
            value={activeSeasonId}
            onChange={(e) => onSeasonChange(e.target.value)}
            className="text-gray-700 hover:text-blue-600 transition-colors outline-0 cursor-pointer bg-transparent"
          >
            {seasons.map((season) => (
              <option
                key={season.id}
                className="text-gray-700 hover:text-blue-600 transition-colors"
                value={season.id}
              >
                {season.name}
              </option>
            ))}
          </select>

          <a
            href="https://suraj-everestims.github.io/infraon-sports/#/admin/login"
            className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1"
          >
            <span>Login</span>
            <LogIn size={18} />
          </a>
        </div>

        <button className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
