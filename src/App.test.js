import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { fixtures } from './data/fixtures';
import { players, playersByGroup, POSITION_GROUPS } from './data/players';
import { standings } from './data/standings';
import { NAV_LINKS } from './data/site';
import { TEAM_LOGOS } from './data/teams';

const renderWithRouter = (ui) => render(<MemoryRouter>{ui}</MemoryRouter>);

describe('Header', () => {
  it('renders every primary navigation link', () => {
    renderWithRouter(<Header />);
    NAV_LINKS.forEach(({ name }) => expect(screen.getAllByRole('link', { name })[0]).toBeInTheDocument());
  });

  it('opens and closes the add-to-calendar dialog', () => {
    renderWithRouter(<Header />);
    fireEvent.click(screen.getByRole('button', { name: 'Schedule' }));
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});

describe('Footer', () => {
  it('links to every social profile in a new tab', () => {
    renderWithRouter(<Footer />);
    ['Facebook', 'X (Twitter)', 'Instagram', 'YouTube'].forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank');
    });
  });
});

describe('squad data', () => {
  it('has 14 players with unique ids and complete profiles', () => {
    expect(players).toHaveLength(14);
    expect(new Set(players.map((p) => p.id)).size).toBe(players.length);
    players.forEach((player) => {
      expect(player.bio).toBeTruthy();
      expect(Object.values(player.stats).every((value) => value > 0)).toBe(true);
      expect(player.images).toEqual(
        expect.objectContaining({ cutout: expect.any(String), card: expect.any(String), info: expect.any(String) })
      );
    });
  });

  it('places every player in a known position group', () => {
    players.forEach((player) => expect(POSITION_GROUPS).toContain(player.group));
    expect(playersByGroup.flatMap((g) => g.players)).toHaveLength(players.length);
  });
});

describe('league data', () => {
  it('has a logo for every team in fixtures and standings', () => {
    const teams = new Set([...fixtures.flatMap((m) => [m.home, m.away]), ...standings.map((s) => s.team)]);
    teams.forEach((team) => expect(TEAM_LOGOS[team]).toBeDefined());
  });
});
