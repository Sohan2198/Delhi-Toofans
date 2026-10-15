import React from 'react'

import teamA from './Image/Teams/Calicut.webp';
import teamB from './Image/Teams/Delhi.webp';
import teamC from './Image/Teams/Ahmedabad.webp';
import teamD from './Image/Teams/Bengaluru.webp';
import teamE from './Image/Teams/Mumbai.webp';
import teamF from './Image/Teams/Chennai.webp';
import teamG from './Image/Teams/Kolkata.webp';
import teamH from './Image/Teams/Kochi.webp';
import teamI from './Image/Teams/Hyderabad.webp';
import teamJ from './Image/Teams/Goa.webp';

const teams = [
  {
    pos: 1, q: true,  logo: teamE, team: 'Mumbai Meteors',
    gp: 7, w: 6, l: 1, sd: 12, pd: 54, pts: 17,
    sw: 19, sl: 7, sr: 2.71, pr: 1.17, winPct: '85.71%',
    form: ['L','W','W','W','L']
  },
  {
    pos: 2, q: true,  logo: teamD, team: 'Bengaluru Torpedoes',
    gp: 7, w: 5, l: 2, sd: 5, pd: 8, pts: 14,
    sw: 18, sl: 13, sr: 1.38, pr: 1.02, winPct: '71.43%',
    form: ['W','W','L','L','W']
  },
  {
    pos: 3, q: true,  logo: teamC, team: 'Ahmedabad Defenders',
    gp: 7, w: 4, l: 3, sd: 2, pd: 13, pts: 12,
    sw: 17, sl: 15, sr: 1.13, pr: 1.03, winPct: '57.14%',
    form: ['L','L','W','L','W']
  },
  {
    pos: 4, q: true,  logo: teamJ, team: 'Goa Guardians',
    gp: 7, w: 3, l: 4, sd: 0, pd: 8, pts: 10,
    sw: 16, sl: 16, sr: 1, pr: 1.02, winPct: '42.86%',
    form: ['L','W','L','W','L']
  },
  {
    pos: 5, q: false, logo: teamB, team: 'Delhi Toofans',
    gp: 7, w: 3, l: 4, sd: -1, pd: -14, pts: 10,
    sw: 13, sl: 14, sr: 0.93, pr: 0.96, winPct: '42.86%',
    form: ['W','L','L','W','W']
  },
  {
    pos: 6, q: false, logo: teamH, team: 'Kochi Blue Spikers',
    gp: 7, w: 3, l: 4, sd: -1, pd: -22, pts: 10,
    sw: 15, sl: 16, sr: 0.94, pr: 0.95, winPct: '42.86%',
    form: ['W','W','L','L','L']
  },
  {
    pos: 7, q: false, logo: teamG, team: 'Kolkata ThunderBolts',
    gp: 7, w: 3, l: 4, sd: -2, pd: -17, pts: 10,
    sw: 12, sl: 14, sr: 0.86, pr: 0.95, winPct: '42.86%',
    form: ['L','W','L','L','W']
  },
  {
    pos: 8, q: false, logo: teamF, team: 'Chennai Blitz',
    gp: 7, w: 4, l: 3, sd: -1, pd: 10, pts: 9,
    sw: 14, sl: 15, sr: 0.93, pr: 1.02, winPct: '57.14%',
    form: ['L','W','W','L','L']
  },
  {
    pos: 9, q: false, logo: teamI, team: 'Hyderabad Black Hawks',
    gp: 7, w: 3, l: 4, sd: -3, pd: -10, pts: 9,
    sw: 12, sl: 15, sr: 0.8, pr: 0.97, winPct: '42.86%',
    form: ['L','W','W','L','L']
  },
  {
    pos: 10, q: false, logo: teamA, team: 'Calicut Heroes',
    gp: 7, w: 1, l: 6, sd: -11, pd: -30, pts: 4,
    sw: 7, sl: 18, sr: 0.39, pr: 0.92, winPct: '14.29%',
    form: ['L','W','L','L','L']
  },
];



function StatBox({ label, value }) {
  return (
    <div className="rounded-xl bg-black/20 border border-white/10 px-3 py-3 text-center">
      <div className="text-lg font-extrabold">{value}</div>
      <div className="text-[10px] uppercase tracking-wider opacity-80">{label}</div>
    </div>
  );
}

function StandingCardsMobile() {
  return (
    <div className="grid gap-3 md:hidden">
      {teams.map(t => (
        <div key={t.pos} className="rounded-2xl bg-[#111] text-white p-4 shadow-lg">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#ffbd00] text-black text-xs font-bold grid place-items-center">
                {t.pos}
              </span>
              <img src={t.logo} alt={`${t.team} logo`} className="w-8 h-8 object-contain" />
              <h3 className="text-sm font-bold uppercase">{t.team}</h3>
            </div>
            <div className="text-right">
              <div className="text-[#ff6] text-xl font-extrabold">{t.pts}</div>
              <div className="text-[10px] opacity-80 -mt-1">Points</div>
            </div>
          </div>

          {/* Stats grid (like screenshot) */}
          <div className="grid grid-cols-4 gap-2 mt-3">
            <StatBox label="GP" value={t.gp} />
            <StatBox label="W"  value={t.w} />
            <StatBox label="L"  value={t.l} />
            <StatBox label="SD" value={t.sd} />
            <StatBox label="PD" value={t.pd} />
            <StatBox label="SW" value={t.sw} />
            <StatBox label="SL" value={t.sl} />
            <StatBox label="SR" value={t.sr} />
            <StatBox label="PR" value={t.pr} />
            <StatBox label="Win%" value={t.winPct} />
          </div>

          {/* Form */}
          <div className="mt-4 flex flex-wrap gap-3 ">
            <div className="text-xs opacity-70 mb-2">Form</div>
            <div className="flex gap-2 text-end">
              {t.form.map((f, i) => (
                <span
                  key={i}
                  className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    f === 'W' ? 'bg-green-200 text-green-900' : 'bg-red-200 text-red-900'
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StandingTableDesktop() {
  return (
    <div className="overflow-x-auto hidden md:block">
      <table className="min-w-full shadow-md rounded-lg">
        <thead className="bg-[#ffbd00] text-black text-center">
          <tr>
            <th className="py-2 px-3">Pos</th>
            <th className="py-2 px-3">Logo</th>
            <th className="py-2 px-3 text-left">Team Name</th>
            <th className="py-2 px-3">GP</th>
            <th className="py-2 px-3">W</th>
            <th className="py-2 px-3">L</th>
            <th className="py-2 px-3">SD</th>
            <th className="py-2 px-3">Pts</th>
            <th className="py-2 px-3">PD</th>
            <th className="py-2 px-3">SW</th>
            <th className="py-2 px-3">SL</th>
            <th className="py-2 px-3">SR</th>
            <th className="py-2 px-3">PR</th>
            <th className="py-2 px-3">Win%</th>
            <th className="py-2 px-3">Form</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(t => (
            <tr key={t.pos} className="even:bg-gray-50 text-center">
              <td className="py-2 px-3 font-semibold">{t.pos}</td>
              <td className="py-2 px-3">
                <img src={t.logo} alt={`${t.team} logo`} className="w-12 h-auto mx-auto" />
              </td>
              <td className="py-2 px-3 text-left font-semibold">{t.team}</td>
              <td className="py-2 px-3">{t.gp}</td>
              <td className="py-2 px-3 font-bold">{t.w}</td>
              <td className="py-2 px-3">{t.l}</td>
              <td className="py-2 px-3">{t.sd}</td>
              <td className="py-2 px-3 font-bold">{t.pts}</td>
              <td className="py-2 px-3">{t.pd}</td>
              <td className="py-2 px-3">{t.sw}</td>
              <td className="py-2 px-3">{t.sl}</td>
              <td className="py-2 px-3">{t.sr}</td>
              <td className="py-2 px-3">{t.pr}</td>
              <td className="py-2 px-3">{t.winPct}</td>
              <td className="py-2 px-3">
                <div className="flex items-center justify-center gap-1">
                  {t.form.map((f, i) => (
                    <span
                      key={i}
                      className={`px-2 py-0.5 rounded text-xs font-bold ${
                        f === 'W' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const ResultTable = () => {
  return (
    <div className="mx-auto m-2 md:px-[13.25rem] mt-14">
      <h1 className="text-center text-3xl font-bold my-2 mb-6 text-[#3b0067]">Standings</h1>

      {/* Mobile cards */}
      <StandingCardsMobile />

      {/* Desktop table */}
      <StandingTableDesktop />
    </div>
  );
};

export default ResultTable;
