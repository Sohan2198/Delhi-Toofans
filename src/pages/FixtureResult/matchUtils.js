/** Helpers that derive display data from the raw fixtures in `src/data/fixtures.js`. */

/** 'Thu Oct 2, 2025 | 6:30 PM IST' → { day: 'Thu Oct 2, 2025', time: '6:30 PM IST' } */
export const splitDate = (date) => {
  const [day, time = ''] = date.split('|').map((part) => part.trim());
  return { day, time };
};

/** Parses score and set strings into numbers and works out the winner. */
export const matchResult = ({ home, away, score, sets }) => {
  const [homeSets, awaySets] = score.split('-').map(Number);
  const setScores = sets
    ? sets
        .split(/\s+/)
        .filter(Boolean)
        .map((set) => {
          const [h, a] = set.split(':').map(Number);
          return { home: h, away: a };
        })
    : [];
  return { homeSets, awaySets, winner: homeSets > awaySets ? home : away, setScores };
};

export const involves = (match, team) => match.home === team || match.away === team;

/** Groups matches by calendar day, preserving order. */
export const groupByDay = (matches) =>
  matches.reduce((groups, match) => {
    const { day } = splitDate(match.date);
    const last = groups[groups.length - 1];
    if (last && last.day === day) last.matches.push(match);
    else groups.push({ day, matches: [match] });
    return groups;
  }, []);
