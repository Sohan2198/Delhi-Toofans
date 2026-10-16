import React from 'react';
import SponsorLogo from '../../components/ui/SponsorLogo';
import { SPONSOR_TIERS } from '../../data/sponsors';

const SectionSponsors = () => (
  <section className="mx-1 mt-10 md:mx-10">
    <div className="items-center justify-center rounded-t-2xl bg-white shadow-inner shadow-toofan-purple">
      {SPONSOR_TIERS.map(({ tier, sponsors }) => (
        <div key={tier}>
          <h2 className="my-2 p-3 text-center text-3xl font-semibold text-toofan-purple">{tier}</h2>
          <div className="flex flex-wrap items-center justify-center gap-4 py-4">
            {sponsors.map((sponsor) => (
              <SponsorLogo key={sponsor.name} {...sponsor} className="h-24 w-56 md:h-28 md:w-64" />
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SectionSponsors;
