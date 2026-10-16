import React from 'react';
import { fixtures } from '../../data/fixtures';
import { standings } from '../../data/standings';
import { HOME_TEAM, TEAM_LOGOS } from '../../data/teams';

const FEATURED_MATCH_NUMBERS = [14, 17];
const STANDINGS_PREVIEW_ROWS = 5;
const homeHighlight = 'rounded-full p-1 ring-2 ring-toofan-purple';

const TeamLogo = ({ team, className }) => (
  <img
    src={TEAM_LOGOS[team]}
    alt={`${team} logo`}
    className={`${className} ${team === HOME_TEAM ? homeHighlight : ''}`}
    loading="lazy"
  />
);

const resultLine = ({ home, away, score }) => {
  const [homeSets, awaySets] = score.split('-').map(Number);
  const [winner, loser] = homeSets > awaySets ? [home, away] : [away, home];
  const winningScore = `${Math.max(homeSets, awaySets)} - ${Math.min(homeSets, awaySets)}`;
  return { winner, loser, winningScore };
};

const FeaturedResult = ({ match }) => {
  const { winner, loser, winningScore } = resultLine(match);
  return (
    <div className="mb-4 py-1 text-center">
      <div className="flex items-center justify-evenly gap-4 py-2">
        <TeamLogo team={match.home} className="h-auto w-20" />
        <span className="text-2xl font-bold text-toofan-purple">{match.score.replace('-', ' - ')}</span>
        <TeamLogo team={match.away} className="h-auto w-20" />
      </div>
      <h3 className="rounded-md bg-toofan-purple p-2 text-white">
        {winner} <span className="font-bold">beat</span> {loser} {winningScore}
      </h3>
    </div>
  );
};

const StandingsPreview = () => (
  <div className="overflow-x-auto">
    <table className="min-w-full rounded-lg bg-white shadow-md">
      <thead className="bg-toofan-yellow text-center text-black">
        <tr>
          {['Team', 'P', 'W', 'L', 'SD', 'PTS'].map((heading) => (
            <th key={heading} scope="col" className="border-b border-gray-200 px-4 py-2">
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {standings.slice(0, STANDINGS_PREVIEW_ROWS).map((row) => {
          const isHome = row.team === HOME_TEAM;
          return (
            <tr
              key={row.team}
              className={`even:bg-gray-50 ${isHome ? 'bg-yellow-50 ring-2 ring-inset ring-toofan-purple' : ''}`}
            >
              <td className="flex items-center justify-start gap-2 px-4 py-2 text-gray-800">
                <TeamLogo team={row.team} className="h-10 w-10 object-contain" />
                <span className={`font-semibold ${isHome ? 'text-toofan-purple' : ''}`}>{row.team}</span>
              </td>
              {[row.gp, row.w, row.l, row.sd, row.pts].map((value, index) => (
                <td key={index} className="px-4 py-2 text-center font-semibold">
                  {value}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

const PointTable = () => {
  const featured = fixtures.filter((match) => FEATURED_MATCH_NUMBERS.includes(match.matchNo));

  return (
    <section className="m-2 mx-auto mt-10 items-center justify-center bg-gray-100 py-6 md:px-[9rem]">
      <div className="grid justify-center gap-8 md:flex">
        <div className="w-full max-w-lg rounded-lg p-4">
          <h2 className="my-2 mb-6 text-center text-3xl font-bold text-toofan-purple">Fixtures & Results 2025</h2>
          {featured.map((match) => (
            <FeaturedResult key={match.matchNo} match={match} />
          ))}
        </div>

        <div className="w-full max-w-lg rounded-lg bg-white p-4 shadow-md">
          <h2 className="my-2 mb-6 text-center text-3xl font-bold text-toofan-purple">Standings</h2>
          <StandingsPreview />
        </div>
      </div>
    </section>
  );
};

export default PointTable;
