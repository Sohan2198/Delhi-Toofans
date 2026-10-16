import React from 'react';
import Sponsors from '../../components/common/Sponsors';
import Fixture from './Fixture';
import banner from './Image/Fixture-and-results-Banner.webp';
import ResultTable from './ResultTable';
import SeasonSummary from './SeasonSummary';

const SectionFixtureResult = () => (
  <>
    <header className="relative overflow-hidden bg-toofan-purple">
      <img src={banner} alt="" className="h-[260px] w-full object-cover opacity-70 md:h-[420px]" fetchpriority="high" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-toofan-purple via-toofan-purple/60 to-transparent"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-5 pb-16 sm:px-8 md:pb-24">
        <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-toofan-yellow">
          <span className="h-1 w-8 rounded-full bg-toofan-yellow" aria-hidden="true" />
          PVL Season 4 · 2025
        </p>
        <h1 className="mt-2 text-4xl font-extrabold text-white md:text-6xl">Fixtures &amp; Results</h1>
      </div>
    </header>

    <SeasonSummary />
    <ResultTable />
    <Fixture />
    <Sponsors />
  </>
);

export default SectionFixtureResult;
