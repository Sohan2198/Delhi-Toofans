import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { players, POSITION_GROUPS } from '../../data/players';

const ALL = 'All';
const FILTERS = [ALL, ...POSITION_GROUPS];

const STATS = [
  { key: 'height', label: 'Height' },
  { key: 'spikeHeight', label: 'Spike Height' },
  { key: 'blockHeight', label: 'Block Height' },
];

const iconButtonClass =
  'grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white transition hover:border-toofan-yellow hover:bg-toofan-yellow hover:text-toofan-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-toofan-yellow';

/** Home page squad preview: filter by position, pick a player, see their card, bio and stats. */
const Squad = () => {
  const [filter, setFilter] = useState(ALL);
  const [selectedId, setSelectedId] = useState(players[0].id);

  const visiblePlayers = useMemo(
    () => (filter === ALL ? players : players.filter((player) => player.group === filter)),
    [filter]
  );
  const selected = visiblePlayers.find((player) => player.id === selectedId) ?? visiblePlayers[0];
  const selectedIndex = visiblePlayers.indexOf(selected);

  const step = (direction) =>
    setSelectedId((currentId) => {
      const current = Math.max(
        0,
        visiblePlayers.findIndex((player) => player.id === currentId)
      );
      const next = (current + direction + visiblePlayers.length) % visiblePlayers.length;
      return visiblePlayers[next].id;
    });

  // Keep the selected player visible inside the list (horizontal on mobile, vertical on desktop)
  // without scrolling the page itself.
  const listRef = useRef(null);
  useEffect(() => {
    const list = listRef.current;
    const item = list?.querySelector('[aria-pressed="true"]');
    if (!item) return;
    const listBox = list.getBoundingClientRect();
    const itemBox = item.getBoundingClientRect();
    if (itemBox.left < listBox.left || itemBox.right > listBox.right) {
      list.scrollBy({ left: itemBox.left - listBox.left - 20, behavior: 'smooth' });
    }
    if (itemBox.top < listBox.top || itemBox.bottom > listBox.bottom) {
      list.scrollBy({ top: itemBox.top - listBox.top - 8, behavior: 'smooth' });
    }
  }, [selected.id]);

  return (
    <section className="bg-toofan-purple py-12 text-white md:my-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              <span className="h-1 w-8 rounded-full bg-toofan-yellow" aria-hidden="true" />
              Meet the Toofans
            </p>
            <h2 className="mt-2 text-4xl font-extrabold md:text-5xl">Squad</h2>
          </div>
          <Link
            to="/Squad"
            className="rounded-md border-2 border-toofan-yellow px-5 py-2 text-sm font-bold text-toofan-yellow transition hover:bg-toofan-yellow hover:text-toofan-purple"
          >
            View Full Squad
          </Link>
        </div>

        {/* Position filter */}
        <div className="-mx-5 mt-6 overflow-x-auto px-5 sm:mx-0 sm:px-0" role="group" aria-label="Filter by position">
          <div className="flex w-max gap-2">
            {FILTERS.map((group) => (
              <button
                key={group}
                type="button"
                onClick={() => setFilter(group)}
                aria-pressed={filter === group}
                className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  filter === group ? 'bg-toofan-yellow text-toofan-purple' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
          {/* Player list: horizontal strip on mobile, scrollable column on desktop */}
          <div className="min-w-0 lg:relative lg:col-span-4">
            <ul
              ref={listRef}
              className="squad-list -mx-5 flex gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0 lg:absolute lg:inset-0 lg:flex-col lg:gap-2 lg:overflow-y-auto lg:overflow-x-hidden lg:pb-0 lg:pr-2"
              aria-label="Players"
            >
              {visiblePlayers.map((player) => {
                const isSelected = player.id === selected.id;
                return (
                  <li key={player.id} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => setSelectedId(player.id)}
                      aria-pressed={isSelected}
                      className={`flex w-full items-center gap-3 rounded-xl border-l-4 p-2 pr-4 text-left transition lg:pr-2 ${
                        isSelected
                          ? 'border-toofan-yellow bg-white/15'
                          : 'border-transparent bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <img
                        src={player.images.cutout}
                        alt=""
                        className="h-14 w-14 shrink-0 rounded-lg bg-white/10 object-cover object-top"
                        loading="lazy"
                      />
                      <span className="min-w-0">
                        <span className="block truncate font-bold">{player.name}</span>
                        <span className="block text-sm text-white/70">{player.position}</span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Player card */}
          <div className="mx-auto w-full max-w-sm lg:col-span-4 lg:max-w-none lg:self-start">
            <div className="relative">
              <div className="absolute -bottom-3 -right-3 hidden h-full w-full rounded-2xl bg-toofan-yellow sm:block" />
              <img
                key={selected.id}
                src={selected.images.card}
                alt={selected.name}
                className="relative aspect-[595/842] w-full rounded-2xl motion-safe:animate-fade-in object-cover object-top shadow-2xl"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col lg:col-span-4" aria-live="polite">
            <span className="w-fit rounded-full bg-toofan-yellow px-3 py-1 text-xs font-bold uppercase tracking-wider text-toofan-purple">
              {selected.position}
            </span>
            <h3 className="mt-3 text-3xl font-extrabold text-toofan-yellow md:text-4xl">{selected.name}</h3>
            <p className="mt-4 leading-relaxed text-white/85">{selected.bio}</p>

            <dl className="mt-6 grid grid-cols-3 gap-3">
              {STATS.map(({ key, label }) => (
                <div key={key} className="flex flex-col-reverse justify-end rounded-xl bg-white/10 px-3 py-3">
                  <dt className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                    {label}
                    <span className="block normal-case tracking-normal text-white/50">(cm)</span>
                  </dt>
                  <dd className="text-2xl font-extrabold tabular-nums md:text-3xl">{selected.stats[key]}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex items-center gap-3 lg:mt-auto lg:pt-6">
              <button type="button" onClick={() => step(-1)} className={iconButtonClass} aria-label="Previous player">
                <ChevronLeft size={20} />
              </button>
              <button type="button" onClick={() => step(1)} className={iconButtonClass} aria-label="Next player">
                <ChevronRight size={20} />
              </button>
              <span className="text-sm font-semibold tabular-nums text-white/70">
                <span className="text-toofan-yellow">{String(selectedIndex + 1).padStart(2, '0')}</span> /{' '}
                {String(visiblePlayers.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Squad;
