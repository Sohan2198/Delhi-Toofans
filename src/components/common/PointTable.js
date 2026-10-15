import React from 'react';
// Team Logo 
import Team_First from '../../pages/FixtureResult/Image/Teams/Hyderabad.webp';
import Team_Second from '../../pages/FixtureResult/Image/Teams/Delhi.webp';
import Team_Third from '../../pages/FixtureResult/Image/Teams/Delhi.webp';
import Team_Fourth from '../../pages/FixtureResult/Image/Teams/Calicut.webp';

import teamA from '../../pages/FixtureResult/Image/Teams/Delhi.webp';
import teamB from '../../pages/FixtureResult/Image/Teams/Ahmedabad.webp';
import teamC from '../../pages/FixtureResult/Image/Teams/Goa.webp';
import teamD from '../../pages/FixtureResult/Image/Teams/Bengaluru.webp';
import teamE from '../../pages/FixtureResult/Image/Teams/Mumbai.webp';

const StandingTable = () => {
  const teams = [
    { team: 'Mumbai Meteors', logo: teamE, p: 7, w: 6, l: 1, sd: '12', pts: 17 },
    { team: 'Bengaluru Torpedoes', logo: teamD, p: 7, w: 5, l: 2, sd: '5', pts: 14 },
    { team: 'Ahmedabad Defenders', logo: teamB, p: 7, w: 4, l: 3, sd: '2', pts: 12 },
    { team: 'Goa Guardians', logo: teamC, p: 7, w: 3, l: 4, sd: '0', pts: 10 },
    { team: 'Delhi Toofans', logo: teamA, p: 7, w: 3, l: 4, sd: '-1', pts: 10 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-[#ffbd00] text-white text-center">
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">Team</th>
            <th className="py-2 px-4 border-b border-gray-200">P</th>
            <th className="py-2 px-4 border-b border-gray-200">W</th>
            <th className="py-2 px-4 border-b border-gray-200">L</th>
            <th className="py-2 px-4 border-b border-gray-200">SD</th>
            <th className="py-2 px-4 border-b border-gray-200">PTS</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => {
            const isDelhi = team.team === 'Delhi Toofans';
            return (
              <tr
                key={index}
                className={`even:bg-gray-50 ${isDelhi ? 'bg-yellow-50 ring-2 ring-[#3b0067] ring-inset' : ''}`}
              >
                <td className="py-2 px-4 text-gray-800 flex items-center gap-2 justify-start">
                  <img
                    src={team.logo}
                    className={`w-10 h-10 object-contain ${isDelhi ? 'ring-2 ring-[#3b0067] rounded-full p-1' : ''}`}
                    alt={`${team.team} logo`}
                  />
                  <span className={`font-semibold ${isDelhi ? 'text-[#3b0067]' : ''}`}>{team.team}</span>
                  {isDelhi && (
                    <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full bg-[#3b0067]/10 text-[#3b0067] font-bold tracking-wide">
                      HIGHLIGHT
                    </span>
                  )}
                </td>
                <td className="py-2 px-4 font-semibold text-center">{team.p}</td>
                <td className="py-2 px-4 font-semibold text-center">{team.w}</td>
                <td className="py-2 px-4 font-semibold text-center">{team.l}</td>
                <td className="py-2 px-4 font-semibold text-center">{team.sd}</td>
                <td className="py-2 px-4 font-semibold text-center">{team.pts}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// Highlight only Delhi logos in fixtures
const DelhiLogo = ({ src, alt, isDelhi }) => (
  <img
    src={src}
    alt={alt}
    className={`w-20 h-auto ${isDelhi ? 'ring-2 ring-[#3b0067] rounded-full p-1' : ''}`}
  />
);

const PointTable = () => {
  return (
    <section className="bg-gray-100 py-6 justify-center items-center mx-auto m-2 mt-10 md:px-[9rem]">
      <main className="md:flex justify-center gap-8 grid">
        {/* Left Section: Fixture & Results */}
        <div className="w-full max-w-lg rounded-lg p-4">
          <h1 className="text-center text-3xl font-bold my-2 mb-6 text-[#3b0067]">Fixtures & Results 2025</h1>

          {/* Fixture 1: Hyderabad vs Delhi (highlight Delhi on RIGHT) */}
          <div className="text-center py-1 mb-4">
            <div className="flex justify-evenly items-center gap-4 py-2">
              <DelhiLogo src={Team_First} alt="Hyderabad Black Hawks" isDelhi={false} />
              <span className="text-[#3b0067] text-2xl font-bold">0 - 3</span>
              <DelhiLogo src={Team_Second} alt="Delhi Toofans" isDelhi />
            </div>
            <h2 className="bg-[#3b0067] text-white p-2 rounded-md">
              Delhi Toofans <span className="font-bold">beat</span> Hyderabad Black Hawks 3 - 0
            </h2>
          </div>

          {/* Fixture 2: Delhi vs Calicut (highlight Delhi on LEFT) */}
          <div className="text-center py-1">
            <div className="flex justify-evenly items-center gap-4 py-2">
              <DelhiLogo src={Team_Third} alt="Delhi Toofans" isDelhi />
              <span className="text-[#3b0067] text-2xl font-bold">3 - 0</span>
              <DelhiLogo src={Team_Fourth} alt="Calicut Heroes" isDelhi={false} />
            </div>
            <h2 className="bg-[#3b0067] text-white p-2 rounded-md">
              Delhi Toofans <span className="font-bold">beat</span> Calicut Heroes 3 - 0
            </h2>
          </div>
        </div>

        {/* Right Section: Standing Table */}
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-4">
          <h1 className="text-center text-3xl font-bold my-2 mb-6 text-[#3b0067]">Standings</h1>
          <StandingTable />
        </div>
      </main>
    </section>
  );
};

export default PointTable;
