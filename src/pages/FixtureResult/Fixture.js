import React, { useState } from "react";
import Team_Calicut from "./Image/Teams/Calicut.webp";
import Team_Delhi from "./Image/Teams/Delhi.webp";
import Team_Ahmedabad from "./Image/Teams/Ahmedabad.webp";
import Team_Mumbai from "./Image/Teams/Mumbai.webp";
import Team_Bengaluru from "./Image/Teams/Bengaluru.webp";
import Team_Kochi from "./Image/Teams/Kochi.webp";
import Team_Kolkata from "./Image/Teams/Kolkata.webp";
import Team_Chennai from "./Image/Teams/Chennai.webp";
import Team_Hyderabad from "./Image/Teams/Hyderabad.webp";
import Team_Goa from "./Image/Teams/Goa.webp";

const MatchCard = ({
  matchNo,
  team1,
  team2,
  firstTeamName,
  secondTeamName,
  date,
  time,
  result,
  score,
  set,
}) => {
  return (
    <div className="text-center py-1 mb-4 w-full shadow-xl rounded-xl">
      <span className="font-semibold">
        {result} | {date} | {time}
      </span>
      <div className="flex justify-evenly items-center gap-5 py-4">
        <img src={team1} alt={firstTeamName} className="w-20 h-auto" />

        {/* Score and Set stacked vertically */}
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold text-[#3b0067]">{score}</span>
          {set && (
            <span className="text-sm font-semibold text-gray-600 mt-1">
              {set}
            </span>
          )}
        </div>

        <img src={team2} alt={secondTeamName} className="w-20 h-auto" />
      </div>

      <h2 className="bg-[#3b0067] text-white py-2 rounded-md">
        Match {matchNo}: {firstTeamName}{" "}
        <span className="font-bold px-1">Vs</span> {secondTeamName}
      </h2>
    </div>
  );
};

const Fixture = () => {
  const [visibleMatches, setVisibleMatches] = useState(10);

  const matches = [
    // Day 1 - Thu Oct 2, 2025
    { matchNo: 1, team1: Team_Hyderabad, team2: Team_Calicut, score: '3-0', firstTeamName: 'Hyderabad Black Hawks', secondTeamName: 'Calicut Heroes', result: 'League', date: 'Thu Oct 2, 2025 | 6:30 PM IST', set: '15:12 18:16 18:16' },
  
    // Day 2 - Fri Oct 3, 2025
    { matchNo: 2, team1: Team_Goa, team2: Team_Bengaluru, score: '2-3', firstTeamName: 'Goa Guardians', secondTeamName: 'Bengaluru Torpedoes', result: 'League', date: 'Fri Oct 3, 2025 | 6:30 PM IST', set: '9:15 15:11 15:13 15:17 9:15' },
    { matchNo: 3, team1: Team_Chennai, team2: Team_Kochi, score: '2-3', firstTeamName: 'Chennai Blitz', secondTeamName: 'Kochi Blue Spikers', result: 'League', date: 'Fri Oct 3, 2025 | 8:30 PM IST', set: '15:13 16:14 11:15 11:15 12:15' },
  
    // Day 3 - Sat Oct 4, 2025
    { matchNo: 4, team1: Team_Delhi, team2: Team_Ahmedabad, score: '2-3', firstTeamName: 'Delhi Toofans', secondTeamName: 'Ahmedabad Defenders', result: 'League', date: 'Sat Oct 4, 2025 | 6:30 PM IST', set: '15:13 15:13 13:15 8:15 16:18' },
    { matchNo: 5, team1: Team_Hyderabad, team2: Team_Mumbai, score: '3-0', firstTeamName: 'Hyderabad Black Hawks', secondTeamName: 'Mumbai Meteors', result: 'League', date: 'Sat Oct 4, 2025 | 8:30 PM IST', set: '15:9 15:13 15:7' },
  
    // Day 4 - Sun Oct 5, 2025
    { matchNo: 6, team1:Team_Kolkata, team2:Team_Bengaluru, score: '1-3', firstTeamName: 'Kolkata Thunderbolts', secondTeamName: 'Bengaluru Torpedoes', result: 'League', date: 'Sun Oct 5, 2025 | 6:30 PM IST', set: '15:11 13:15 11:15 11:15' },
    { matchNo: 7, team1: Team_Kochi, team2: Team_Goa, score: '3-2', firstTeamName: 'Kochi Blue Spikers', secondTeamName: 'Goa Guardians', result: 'League', date: 'Sun Oct 5, 2025 | 8:30 PM IST', set: '11:15 17:15 15:13 10:15 15:10' },
  
    // Day 5 - Mon Oct 6, 2025
    { matchNo: 8, team1: Team_Mumbai, team2: Team_Calicut, score: '3-0', firstTeamName: 'Mumbai Meteors', secondTeamName: 'Calicut Heroes', result: 'League', date: 'Mon Oct 6, 2025 | 6:30 PM IST', set: '15:9 15:8 15:12' },
  
    // Day 6 - Tue Oct 7, 2025
    { matchNo: 9, team1: Team_Kolkata, team2: Team_Kochi, score: '3-1', firstTeamName: 'Kolkata Thunderbolts', secondTeamName: 'Kochi Blue Spikers', result: 'League', date: 'Tue Oct 7, 2025 | 6:30 PM IST', set: '12:15 15:13 15:6 19:17' },
    { matchNo: 10, team1: Team_Goa, team2: Team_Ahmedabad, score: '3-2', firstTeamName: 'Goa Guardians', secondTeamName:'Ahmedabad Defenders' , result: 'League', date: 'Tue Oct 7, 2025 | 8:30 PM IST', set: '13:15 15:11 9:15 19:17' },
  
    // Day 7 - Wed Oct 8, 2025
    { matchNo: 11, team1: Team_Mumbai, team2: Team_Delhi, score: '3-0', firstTeamName: 'Mumbai Meteors', secondTeamName: 'Delhi Toofans', result: 'League', date: 'Wed Oct 8, 2025 | 6:30 PM IST', set: '15:12 15:10 15:11' },
  
    // Day 8 - Thu Oct 9, 2025
    { matchNo: 12, team1: Team_Goa, team2: Team_Chennai, score: '2-3', firstTeamName: 'Goa Guardians', secondTeamName: 'Chennai Blitz', result: 'League', date: 'Thu Oct 9, 2025 | 6:30 PM IST', set: '15:12 11:15 15:10 16:19 13:15' },
  
    // Day 9 - Fri Oct 10, 2025
    { matchNo: 13, team1: Team_Calicut, team2: Team_Ahmedabad, score: '1-3', firstTeamName: 'Calicut Heroes', secondTeamName: 'Ahmedabad Defenders', result: 'League', date: 'Fri Oct 10, 2025 | 6:30 PM IST', set: '15:12 12:15 12:15 14:16' },
    { matchNo: 14, team1: Team_Hyderabad, team2: Team_Delhi, score: '0-3', firstTeamName: 'Hyderabad Black Hawks', secondTeamName: 'Delhi Toofans', result: 'League', date: 'Fri Oct 10, 2025 | 8:30 PM IST', set: '10:15 14:16 15:17' },
  
    // Day 10 - Sat Oct 11, 2025
    { matchNo: 15, team1: Team_Kochi, team2: Team_Bengaluru, score: '1-3', firstTeamName: 'Kochi Blue Spikers', secondTeamName: 'Bengaluru Torpedoes', result: 'League', date: 'Sat Oct 11, 2025 | 6:30 PM IST', set: '15:13 15:17 9:15 12:15' },
    { matchNo: 16, team1: Team_Kolkata, team2: Team_Chennai, score: '3-0', firstTeamName: 'Kolkata Thunderbolts', secondTeamName: 'Chennai Blitz', result: 'League', date: 'Sat Oct 11, 2025 | 8:30 PM IST', set: '15:11 15:12 15:13' },
  
    // Day 11 - Sun Oct 12, 2025
    { matchNo: 17, team1: Team_Delhi, team2: Team_Calicut, score: '3-0', firstTeamName: 'Delhi Toofans', secondTeamName: 'Calicut Heroes', result: 'League', date: 'Sun Oct 12, 2025 | 6:30 PM IST', set: '15:11 15:9 15:11' },
    { matchNo: 18, team1: Team_Ahmedabad, team2: Team_Hyderabad, score: '3-2', firstTeamName: 'Ahmedabad Defenders', secondTeamName: 'Hyderabad Black Hawks', result: 'League', date: 'Sun Oct 12, 2025 | 8:30 PM IST', set: '9:15 7:15 15:9 15:11 15:8' },
  
    // Day 12 - Mon Oct 13, 2025
    { matchNo: 19, team1: Team_Bengaluru, team2: Team_Chennai, score: '3-1', firstTeamName: 'Bengaluru Torpedoes', secondTeamName: 'Chennai Blitz', result: 'League', date: 'Mon Oct 13, 2025 | 6:30 PM IST', set: '17:15 14:16 17:15 16:14' },
  
    // Day 13 - Tue Oct 14, 2025
    { matchNo: 20, team1: Team_Mumbai, team2: Team_Kochi, score: '3-2', firstTeamName: 'Mumbai Meteors', secondTeamName: 'Kochi Blue Spikers', result: 'League', date: 'Tue Oct 14, 2025 | 6:30 PM IST', set: '15:7 7:15 13:15 15:11' },
    { matchNo: 21, team1: Team_Kolkata, team2: Team_Goa, score: '0-3', firstTeamName: 'Kolkata Thunderbolts', secondTeamName: 'Goa Guardians', result: 'League', date: 'Tue Oct 14, 2025 | 8:30 PM IST', set: '11:15 8:15 6:15' },
  
    // Day 14 - Wed Oct 15, 2025
    { matchNo: 22, team1: Team_Chennai, team2: Team_Ahmedabad, score: '3-2', firstTeamName: 'Chennai Blitz', secondTeamName: 'Ahmedabad Defenders', result: 'League', date: 'Wed Oct 15, 2025 | 6:30 PM IST', set: '15:10 10:15 15:11 12:15 15:13' },
    { matchNo: 23, team1: Team_Bengaluru, team2: Team_Calicut, score: '3-2', firstTeamName: 'Bengaluru Torpedoes', secondTeamName: 'Calicut Heroes', result: 'League', date: 'Wed Oct 15, 2025 | 8:30 PM IST', set: '20:18 20:18 7:15 11:15 15:12' },
  
    // Day 15 - Thu Oct 16, 2025
    { matchNo: 24, team1: Team_Goa, team2: Team_Hyderabad, score: '1-3', firstTeamName: 'Goa Guardians', secondTeamName: 'Hyderabad Black Hawks', result: 'League', date: 'Thu Oct 16, 2025 | 6:30 PM IST', set: '13:15 18:20 17:15 9:15' },
  
    // Day 16 - Fri Oct 17, 2025
    { matchNo: 25, team1: Team_Calicut, team2: Team_Kolkata, score: '3-0', firstTeamName: 'Calicut Heroes', secondTeamName: 'Kolkata Thunderbolts', result: 'League', date: 'Fri Oct 17, 2025 | 6:30 PM IST', set: '15:10 15:11 15:12' },
    { matchNo: 26, team1: Team_Delhi, team2: Team_Chennai, score: '0-3', firstTeamName: 'Delhi Toofans', secondTeamName: 'Chennai Blitz', result: 'League', date: 'Fri Oct 17, 2025 | 8:30 PM IST', set: '10:15 10:15 10:15' },
  
    // Day 17 - Sat Oct 18, 2025
    { matchNo: 27, team1: Team_Ahmedabad, team2: Team_Mumbai, score: '3-1', firstTeamName: 'Ahmedabad Defenders', secondTeamName: 'Mumbai Meteors', result: 'League', date: 'Sat Oct 18, 2025 | 6:30 PM IST', set: '12:15 15:7 15:12 21:20' },
    { matchNo: 28, team1: Team_Bengaluru, team2: Team_Hyderabad, score: '2-3', firstTeamName: 'Bengaluru Torpedoes', secondTeamName: 'Hyderabad Black Hawks', result: 'League', date: 'Sat Oct 18, 2025 | 8:30 PM IST', set: '15:13 10:15 16:18 16:14 11:15' },
  
    // Day 18 - Sun Oct 19, 2025
    { matchNo: 29, team1: Team_Delhi, team2: Team_Goa, score: '2-3', firstTeamName: 'Delhi Toofans', secondTeamName: 'Goa Guardians', result: 'League', date: 'Sun Oct 19, 2025 | 6:30 PM IST', set: '16:14 15:11 11:15 13:16 11:15' },
    { matchNo: 30, team1: Team_Kochi, team2: Team_Calicut, score: '3-1', firstTeamName: 'Kochi Blue Spikers', secondTeamName: 'Calicut Heroes', result: 'League', date: 'Sun Oct 19, 2025 | 8:30 PM IST', set: '15:13 9:15 15:8 15:13' },
  
    // Day 19 - Mon Oct 20, 2025
    { matchNo: 31, team1: Team_Hyderabad, team2: Team_Kolkata, score: '1-3', firstTeamName: 'Hyderabad Black Hawks', secondTeamName: 'Kolkata Thunderbolts', result: 'League', date: 'Mon Oct 20, 2025 | 6:30 PM IST', set: '9:15 13:15 15:9 13:15' },
    { matchNo: 32, team1: Team_Chennai, team2: Team_Mumbai, score: '1-3', firstTeamName: 'Chennai Blitz', secondTeamName: 'Mumbai Meteors', result: 'League', date: 'Mon Oct 20, 2025 | 8:30 PM IST', set: '14:16 15:11 12:15 19:21' },
  
    // Day 20 - Tue Oct 21, 2025
    { matchNo: 33, team1: Team_Ahmedabad, team2: Team_Kochi, score: '1-3', firstTeamName: 'Ahmedabad Defenders', secondTeamName: 'Kochi Blue Spikers', result: 'League', date: 'Tue Oct 21, 2025 | 6:30 PM IST', set: '13:15 16:14 15:17 9:15' },
  
    // Day 21 - Wed Oct 22, 2025
    { matchNo: 34, team1: Team_Mumbai, team2: Team_Bengaluru, score: '3-1', firstTeamName: 'Mumbai Meteors', secondTeamName: 'Bengaluru Torpedoes', result: 'League', date: 'Wed Oct 22, 2025 | 6:30 PM IST', set: '15:13 15:13 18:20 15:10' },
    { matchNo: 35, team1: Team_Kolkata, team2: Team_Delhi, score: '2-3', firstTeamName: 'Kolkata Thunderbolts', secondTeamName: 'Delhi Toofans', result: 'League', date: 'Wed Oct 22, 2025 | 8:30 PM IST', set: '16:18 15:11 15:12 11:15 12:15' },
  
    // Day 22 - Thu Oct 23, 2025 → Rest Day (skip)
  
    // Day 23 - Fri Oct 24, 2025 → Semi Finals
    { matchNo: 36, team1: Team_Mumbai, team2: Team_Goa, score: '3-0', firstTeamName: 'Mumbai Meteors', secondTeamName: 'Goa Guardians', result: 'Semi Final', date: 'Fri Oct 24, 2025 | 6:30 PM IST', set: '15:8 15:8 16:14' },
    { matchNo: 37, team1: Team_Bengaluru, team2: Team_Ahmedabad, score: '3-1', firstTeamName: 'Bengaluru Torpedoes', secondTeamName: 'Ahmedabad Defenders', result: 'Semi Final', date: 'Fri Oct 24, 2025 | 8:30 PM IST', set: '10:15 15:11 15:13 15:13' },
  
    // Day 24 - Sat Oct 25, 2025 → Rest Day (skip)
  
    // Day 25 - Sun Oct 26, 2025 → Final
    { matchNo: 38, team1: Team_Mumbai, team2: Team_Bengaluru, score: '0-3', firstTeamName: 'Mumbai Meteors', secondTeamName: 'Bengaluru Torpedoes', result: 'Final', date: 'Sun Oct 26, 2025 | 6:30 PM IST', set: '' },
  ];

  const showMoreMatches = () => {
    setVisibleMatches((prev) => prev + 10);
  };

  return (
    <div className="max-auto md:px-[9rem]">
      <h1 className="text-2xl font-bold text-center py-6 text-[#3b0067]">
        Prime Volleyball League powered by Scapia <br /> Season 4 - Fixtures
      </h1>
      <div className="grid md:grid-cols-2 items-center justify-center gap-6 p-1 md:px-10">
        {matches.slice(0, visibleMatches).map((match, index) => (
          <MatchCard key={index} {...match} />
        ))}
      </div>
      {visibleMatches < matches.length && (
        <div className="text-center py-4">
          <button
            onClick={showMoreMatches}
            className="px-4 py-2 bg-[#ffbd00] text-black rounded-md"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Fixture;
