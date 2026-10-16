import React, { useMemo, useState } from 'react';
import { fixtures, SEASON_TITLE } from '../../data/fixtures';
import { HOME_TEAM, TEAM_LOGOS } from '../../data/teams';
import { groupByDay, involves, matchResult, splitDate } from './matchUtils';

const PAGE_SIZE = 12;

const FILTERS = [
  { id: 'home', label: HOME_TEAM, test: (match) => involves(match, HOME_TEAM) },
  { id: 'all', label: 'All matches', test: () => true },
  { id: 'playoffs', label: 'Playoffs', test: (match) => match.stage !== 'League' },
];

const TeamSide = ({ team, isWinner, align }) => (
  <div className={`flex min-w-0 flex-1 flex-col items-center gap-2 text-center sm:flex-row sm:gap-3 ${align}`}>
    <img src={TEAM_LOGOS[team]} alt="" className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14" loading="lazy" />
    <span
      className={`text-sm leading-tight sm:text-base ${isWinner ? 'font-extrabold text-gray-900' : 'font-medium text-gray-500'}`}
    >
      {team}
    </span>
  </div>
);

const MatchCard = ({ match }) => {
  const { matchNo, stage, date, home, away } = match;
  const { homeSets, awaySets, winner, setScores } = matchResult(match);
  const { time } = splitDate(date);
  const isHomeTeamMatch = involves(match, HOME_TEAM);

  return (
    <article
      className={`rounded-2xl bg-white p-4 shadow-sm ring-1 transition hover:shadow-md sm:p-5 ${
        isHomeTeamMatch ? 'ring-2 ring-toofan-yellow' : 'ring-black/5'
      }`}
      aria-label={`Match ${matchNo}: ${home} ${homeSets}, ${away} ${awaySets}`}
    >
      <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
        <span className="flex items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 font-bold uppercase tracking-wide ${
              stage === 'League' ? 'bg-toofan-purple/10 text-toofan-purple' : 'bg-toofan-yellow text-toofan-purple'
            }`}
          >
            {stage}
          </span>
          Match {matchNo}
        </span>
        <span>{time}</span>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <TeamSide team={home} isWinner={winner === home} align="sm:justify-start sm:text-left" />
        <div className="shrink-0 text-center">
          <div className="text-3xl font-extrabold tabular-nums text-toofan-purple">
            <span className={winner === home ? '' : 'text-gray-400'}>{homeSets}</span>
            <span className="mx-1 text-gray-300">–</span>
            <span className={winner === away ? '' : 'text-gray-400'}>{awaySets}</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Final</span>
        </div>
        <TeamSide team={away} isWinner={winner === away} align="sm:flex-row-reverse sm:justify-start sm:text-right" />
      </div>

      {setScores.length > 0 && (
        <ol className="mt-4 flex flex-wrap justify-center gap-1.5" aria-label="Set scores">
          {setScores.map((set, index) => (
            <li
              key={index}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs tabular-nums text-gray-500"
              title={`Set ${index + 1}`}
            >
              <span className={set.home > set.away ? 'font-bold text-gray-900' : ''}>{set.home}</span>
              <span className="mx-0.5">:</span>
              <span className={set.away > set.home ? 'font-bold text-gray-900' : ''}>{set.away}</span>
            </li>
          ))}
        </ol>
      )}
    </article>
  );
};

const Fixture = () => {
  const [filterId, setFilterId] = useState(FILTERS[0].id);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const counts = useMemo(
    () => Object.fromEntries(FILTERS.map(({ id, test }) => [id, fixtures.filter(test).length])),
    []
  );
  const filtered = useMemo(() => fixtures.filter(FILTERS.find((f) => f.id === filterId).test), [filterId]);
  const days = groupByDay(filtered.slice(0, visibleCount));

  const selectFilter = (id) => {
    setFilterId(id);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <section aria-labelledby="fixtures-title" className="mx-auto max-w-7xl px-5 pb-16 pt-14 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 id="fixtures-title" className="text-3xl font-extrabold text-toofan-purple">
            Matches
          </h2>
          <p className="mt-1 text-sm text-gray-600">{SEASON_TITLE}</p>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter matches">
          {FILTERS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => selectFilter(id)}
              aria-pressed={filterId === id}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                filterId === id
                  ? 'bg-toofan-purple text-white'
                  : 'bg-toofan-purple/5 text-toofan-purple hover:bg-toofan-purple/10'
              }`}
            >
              {label}
              <span
                className={`rounded-full px-2 text-xs font-bold ${
                  filterId === id ? 'bg-toofan-yellow text-toofan-purple' : 'bg-white text-gray-500'
                }`}
              >
                {counts[id]}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-8">
        {days.map(({ day, matches }) => (
          <div key={day}>
            <h3 className="mb-3 flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-gray-500">
              {day}
              <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {matches.map((match) => (
                <MatchCard key={match.matchNo} match={match} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="rounded-md border-2 border-toofan-purple px-6 py-2.5 font-bold text-toofan-purple transition hover:bg-toofan-purple hover:text-white"
          >
            Show more matches ({filtered.length - visibleCount} left)
          </button>
        </div>
      )}
    </section>
  );
};

export default Fixture;
