import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Modal from '../../components/ui/Modal';
import { playersByGroup } from '../../data/players';

// Profiles step through players in the same order the page shows them.
const orderedPlayers = playersByGroup.flatMap(({ players }) => players);

const groupId = (group) => `squad-${group.toLowerCase().replace(/\s+/g, '-')}`;

const STATS = [
  { key: 'height', label: 'Height' },
  { key: 'spikeHeight', label: 'Spike' },
  { key: 'blockHeight', label: 'Block' },
];

const PlayerCard = ({ player, onOpen }) => (
  <li>
    <button
      type="button"
      onClick={() => onOpen(player.id)}
      className="group relative block w-full overflow-hidden rounded-2xl bg-toofan-purple text-left shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-toofan-yellow"
      aria-label={`View ${player.name} profile`}
    >
      <img
        src={player.images.card}
        alt=""
        className="aspect-[595/842] w-full object-cover transition duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Name plate over a bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-toofan-purple via-toofan-purple/85 to-transparent px-4 pb-4 pt-16">
        <span className="block text-lg font-extrabold leading-tight text-white sm:text-xl">{player.name}</span>
        <span className="mt-1 block text-sm font-semibold text-toofan-yellow">{player.position}</span>
        <span className="mt-3 hidden gap-3 text-xs text-white/80 sm:flex">
          {STATS.map(({ key, label }) => (
            <span key={key}>
              <span className="font-bold tabular-nums text-white">{player.stats[key]}</span> {label}
            </span>
          ))}
        </span>
      </div>

      <span
        className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-toofan-yellow text-toofan-purple opacity-0 shadow transition group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden="true"
      >
        <Maximize2 size={16} />
      </span>
    </button>
  </li>
);

const PlayerProfile = ({ player, index, total, onStep }) => (
  <div className="bg-toofan-purple text-white">
    <img src={player.images.info} alt={`${player.name} profile card`} className="h-auto w-full" />
    <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4">
      <div>
        <h2 id="player-modal-title" className="text-xl font-extrabold md:text-2xl">
          {player.name}
        </h2>
        <p className="text-sm font-semibold text-toofan-yellow">{player.position}</p>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold tabular-nums text-white/70">
          <span className="text-toofan-yellow">{String(index + 1).padStart(2, '0')}</span> /{' '}
          {String(total).padStart(2, '0')}
        </span>
        {[
          { direction: -1, label: 'Previous player', Icon: ChevronLeft },
          { direction: 1, label: 'Next player', Icon: ChevronRight },
        ].map(({ direction, label, Icon }) => (
          <button
            key={label}
            type="button"
            onClick={() => onStep(direction)}
            aria-label={label}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition hover:border-toofan-yellow hover:bg-toofan-yellow hover:text-toofan-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-toofan-yellow"
          >
            <Icon size={20} />
          </button>
        ))}
      </div>
    </div>
  </div>
);

const SectionToofaniSquad = () => {
  const [activeId, setActiveId] = useState(null);
  const activeIndex = orderedPlayers.findIndex((player) => player.id === activeId);
  const activePlayer = orderedPlayers[activeIndex];

  const closeModal = useCallback(() => setActiveId(null), []);
  const step = useCallback(
    (direction) =>
      setActiveId((currentId) => {
        const current = orderedPlayers.findIndex((player) => player.id === currentId);
        return orderedPlayers[(current + direction + orderedPlayers.length) % orderedPlayers.length].id;
      }),
    []
  );

  // Arrow keys move between profiles while the modal is open.
  useEffect(() => {
    if (!activeId) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') step(-1);
      if (event.key === 'ArrowRight') step(1);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [activeId, step]);

  return (
    <>
      {/* Page header */}
      <header className="relative overflow-hidden bg-toofan-purple text-white">
        <div
          className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-toofan-yellow/10 blur-2xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
          <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white/70">
            <span className="h-1 w-8 rounded-full bg-toofan-yellow" aria-hidden="true" />
            Delhi Toofans
          </p>
          <h1 className="mt-2 text-4xl font-extrabold md:text-6xl">
            Toofani <span className="text-toofan-yellow">Squad</span>
          </h1>
          <p className="mt-3 max-w-xl text-white/80">
            {orderedPlayers.length} players across {playersByGroup.length} positions. Select a player to view their full
            profile.
          </p>
        </div>
      </header>

      {/* Position jump links */}
      <nav
        aria-label="Positions"
        className="sticky top-0 z-20 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur"
      >
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 sm:px-8">
          {playersByGroup.map(({ group, players: groupPlayers }) => (
            <li key={group} className="shrink-0">
              <a
                href={`#${groupId(group)}`}
                className="flex items-center gap-2 rounded-full bg-toofan-purple/5 px-4 py-1.5 text-sm font-semibold text-toofan-purple transition hover:bg-toofan-purple hover:text-white"
              >
                {group}
                <span className="rounded-full bg-toofan-yellow px-2 text-xs font-bold text-toofan-purple">
                  {groupPlayers.length}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Groups */}
      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
        {playersByGroup.map(({ group, players: groupPlayers }) => (
          <section
            key={group}
            id={groupId(group)}
            className="scroll-mt-20 pt-12"
            aria-labelledby={`${groupId(group)}-title`}
          >
            <div className="mb-6 flex items-center gap-4">
              <h2 id={`${groupId(group)}-title`} className="text-2xl font-extrabold text-toofan-purple md:text-3xl">
                {group}
              </h2>
              <span className="h-px flex-1 bg-gradient-to-r from-toofan-yellow to-transparent" aria-hidden="true" />
              <span className="text-sm font-semibold text-gray-500">
                {groupPlayers.length} {groupPlayers.length === 1 ? 'player' : 'players'}
              </span>
            </div>
            <ul className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
              {groupPlayers.map((player) => (
                <PlayerCard key={player.id} player={player} onOpen={setActiveId} />
              ))}
            </ul>
          </section>
        ))}
      </div>

      <Modal isOpen={Boolean(activePlayer)} onClose={closeModal} labelledBy="player-modal-title" className="max-w-5xl">
        {activePlayer && (
          <PlayerProfile player={activePlayer} index={activeIndex} total={orderedPlayers.length} onStep={step} />
        )}
      </Modal>
    </>
  );
};

export default SectionToofaniSquad;
