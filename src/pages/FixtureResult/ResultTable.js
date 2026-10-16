import React from 'react';
import { standings } from '../../data/standings';
import { HOME_TEAM } from '../../data/teams';

// Top four go through to the semi-finals.
const QUALIFYING_SPOTS = 4;

// `wide` columns are hidden on small screens to keep the table readable without scrolling.
const COLUMNS = [
  { key: 'gp', abbr: 'P', title: 'Played' },
  { key: 'w', abbr: 'W', title: 'Won' },
  { key: 'l', abbr: 'L', title: 'Lost' },
  { key: 'sd', abbr: 'SD', title: 'Set difference' },
  { key: 'pd', abbr: 'PD', title: 'Point difference', wide: true },
  { key: 'sw', abbr: 'SW', title: 'Sets won', wide: true },
  { key: 'sl', abbr: 'SL', title: 'Sets lost', wide: true },
  { key: 'sr', abbr: 'SR', title: 'Set ratio', wide: true },
  { key: 'pr', abbr: 'PR', title: 'Point ratio', wide: true },
  { key: 'winPct', abbr: 'Win%', title: 'Win percentage', wide: true },
];

const signed = (value) => (typeof value === 'number' && value > 0 ? `+${value}` : value);

const FormBadge = ({ result }) => (
  <span
    className={`grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold ${
      result === 'W' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
    }`}
    title={result === 'W' ? 'Win' : 'Loss'}
  >
    {result}
  </span>
);

const ResultTable = () => (
  <section aria-labelledby="standings-title" className="mx-auto max-w-7xl px-5 pt-14 sm:px-8">
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <h2 id="standings-title" className="text-3xl font-extrabold text-toofan-purple">
        Standings
      </h2>
      <p className="flex items-center gap-2 text-sm text-gray-600">
        <span className="h-3 w-1 rounded-full bg-green-500" aria-hidden="true" />
        Qualified for semi-finals
      </p>
    </div>

    <div className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/5">
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <thead className="bg-toofan-purple text-white">
            <tr>
              <th scope="col" className="w-12 px-2 py-3 sm:px-3 text-center">
                #
              </th>
              <th scope="col" className="px-2 py-3 sm:px-3 text-left">
                Team
              </th>
              {COLUMNS.map(({ key, abbr, title, wide }) => (
                <th
                  key={key}
                  scope="col"
                  className={`px-2 py-3 sm:px-3 text-center font-semibold ${wide ? 'hidden lg:table-cell' : ''}`}
                >
                  <abbr title={title} className="no-underline">
                    {abbr}
                  </abbr>
                </th>
              ))}
              <th scope="col" className="bg-toofan-yellow px-2 py-3 sm:px-3 text-center text-toofan-purple">
                <abbr title="Points" className="no-underline">
                  Pts
                </abbr>
              </th>
              <th scope="col" className="hidden px-2 py-3 sm:px-3 text-center md:table-cell">
                Form
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {standings.map((row) => {
              const isHome = row.team === HOME_TEAM;
              const qualified = row.pos <= QUALIFYING_SPOTS;
              return (
                <tr
                  key={row.team}
                  className={isHome ? 'bg-toofan-yellow/15 font-semibold' : 'odd:bg-white even:bg-gray-50/70'}
                >
                  <td
                    className={`border-l-4 px-2 py-3 sm:px-3 text-center font-bold tabular-nums ${
                      qualified ? 'border-green-500' : 'border-transparent'
                    }`}
                  >
                    {row.pos}
                  </td>
                  <th scope="row" className="px-2 py-3 sm:px-3 text-left font-semibold">
                    <span className="flex items-center gap-2 sm:gap-3">
                      <img
                        src={row.logo}
                        alt=""
                        className="h-7 w-7 shrink-0 object-contain sm:h-9 sm:w-9"
                        loading="lazy"
                      />
                      <span className={isHome ? 'text-toofan-purple' : 'text-gray-800'}>{row.team}</span>
                    </span>
                  </th>
                  {COLUMNS.map(({ key, wide }) => (
                    <td
                      key={key}
                      className={`px-2 py-3 sm:px-3 text-center tabular-nums text-gray-700 ${wide ? 'hidden lg:table-cell' : ''}`}
                    >
                      {key === 'sd' || key === 'pd' ? signed(row[key]) : row[key]}
                    </td>
                  ))}
                  <td className="bg-toofan-yellow/10 px-2 py-3 sm:px-3 text-center text-base font-extrabold tabular-nums text-toofan-purple">
                    {row.pts}
                  </td>
                  <td className="hidden px-2 py-3 sm:px-3 md:table-cell">
                    <span className="flex justify-center gap-1" aria-label={`Last five: ${row.form.join(', ')}`}>
                      {row.form.map((result, index) => (
                        <FormBadge key={index} result={result} />
                      ))}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    <p className="mt-3 text-xs text-gray-500">
      P played · W won · L lost · SD set difference · PD point difference · SR set ratio · PR point ratio
    </p>
  </section>
);

export default ResultTable;
