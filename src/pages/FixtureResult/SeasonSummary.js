import React from 'react';
import { fixtures } from '../../data/fixtures';
import { standings } from '../../data/standings';
import { HOME_TEAM, TEAM_LOGOS } from '../../data/teams';
import { involves, matchResult } from './matchUtils';

const ordinal = (n) => {
  const suffix = { one: 'st', two: 'nd', few: 'rd', other: 'th' }[
    new Intl.PluralRules('en', { type: 'ordinal' }).select(n)
  ];
  return `${n}${suffix}`;
};

/** Delhi Toofans' season at a glance plus the league champion, all derived from fixtures and standings. */
const SeasonSummary = () => {
  const row = standings.find((team) => team.team === HOME_TEAM);
  const ourMatches = fixtures.filter((match) => involves(match, HOME_TEAM));
  const wins = ourMatches.filter((match) => matchResult(match).winner === HOME_TEAM).length;
  const final = fixtures.find((match) => match.stage === 'Final');
  const champion = final && matchResult(final).winner;

  const stats = [
    { label: 'League position', value: row ? ordinal(row.pos) : '—' },
    { label: 'Points', value: row?.pts ?? '—' },
    { label: 'Record', value: `${wins}W – ${ourMatches.length - wins}L` },
    { label: 'Sets won – lost', value: row ? `${row.sw} – ${row.sl}` : '—' },
  ];

  return (
    <section aria-labelledby="season-summary-title" className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="relative z-10 -mt-10 grid gap-4 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5 md:-mt-14 md:grid-cols-[1fr_auto] md:p-6">
        <div>
          <h2 id="season-summary-title" className="flex items-center gap-3 text-lg font-extrabold text-toofan-purple">
            <img src={TEAM_LOGOS[HOME_TEAM]} alt="" className="h-9 w-9 object-contain" />
            Delhi Toofans this season
          </h2>
          <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map(({ label, value }) => (
              <div
                key={label}
                className="flex flex-col-reverse justify-end rounded-xl border-l-4 border-toofan-yellow bg-toofan-purple/5 px-4 py-3"
              >
                <dt className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</dt>
                <dd className="text-2xl font-extrabold tabular-nums text-toofan-purple">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {champion && (
          <div className="flex items-center gap-4 rounded-xl bg-toofan-purple px-5 py-4 text-white md:flex-col md:justify-center md:text-center">
            <img src={TEAM_LOGOS[champion]} alt="" className="h-14 w-14 object-contain" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-toofan-yellow">Champions</p>
              <p className="font-extrabold">{champion}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SeasonSummary;
