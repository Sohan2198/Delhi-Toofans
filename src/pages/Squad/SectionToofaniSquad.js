import React, { useState, useRef, useEffect } from 'react';

// Player cards (595x842)
import George from './Team/With BG/George Antony_Attacker.png';
import Deepak from './Team/With BG/Deepak Kumar_Universal.png';
import Amadou from './Team/With BG/Amadou Laye Samb_Attacker.png';
import Pravin from './Team/With BG/Pravin P_Blocker.png';
import Muhammed from './Team/With BG/Muhammed Jasim_Blocker.png';
import James from './Team/With BG/James Weir_Blocker.png';
import Anand from './Team/With BG/Anand K_Libero.png';
import Aljo from './Team/With BG/Aljo sabu_Libero.png';
import LalSujan from './Team/With BG/Lal Sujan_Setter.png';
import Shamil from './Team/With BG/Muhammed Shamil_Setter.png';
import Abhishek from './Team/With BG/Abhishek Rajeev_Universal.png';
import Yoan from './Team/With BG/Yoan David_Universal.png';
import Sheik from './Team/With BG/Shiek Numan_Attacker.png';
import Sachin from './Team/With BG/Sachin Kundathil_Blocker.png';

// Info cards (1920x822)
import GeorgeHover from './Team/Info/George Antony_Attacker.webp';
import DeepakHover from './Team/Info/Deepak Kumar_Universal.webp';
import AmadouHover from './Team/Info/Amadou Laye Samb_Attacker.webp';
import PravinHover from './Team/Info/Pravin P_Blocker.webp';
import MuhammedHover from './Team/Info/Muhammed Jasim_Blocker.webp';
import JamesHover from './Team/Info/James Weir_Blocker.webp';
import AnandHover from './Team/Info/Anand K_Libero.webp';
import AljoHover from './Team/Info/Aljo Sabu_Libero.webp';
import LalSujanHover from './Team/Info/Lal Sujan_Setter.webp';
import ShamilHover from './Team/Info/Muhammed Shamil_Setter.webp';
import AbhishekHover from './Team/Info/Abhishek Rajeev_Universal.webp';
import YoanHover from './Team/Info/Yoan David_Universal.webp';
import SheikHover from './Team/Info/Shiek Numan_Attacker.webp';
import SachinHover from './Team/Info/Sachin Kundathil_Blocker.webp';

const GridItem = ({ image, name, position, hoverImage, onHover }) => {
  return (
    <div className="relative flex flex-col items-center md:w-1/5 w-full mb-2 gap-4 mx-1">
      <img
        src={image}
        alt={name}
        className="z-10"
        onMouseEnter={() => onHover({ name, position, hoverImage })}
        onMouseLeave={() => onHover(null)}
      />
      <span className="font-bold text-xl py-1 z-30">{name}</span>
      <span className="font-semibold z-30">{position}</span>
    </div>
  );
};

const ModalBox = ({ player, isVisible, onClose }) => {
  if (!isVisible || !player) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white py-5 px-4 rounded-lg relative mx-auto">
        <button
          className="absolute top-0 right-1 text-2xl font-bold cursor-pointer"
          onClick={onClose}
          aria-label="Close player details"
        >
          &times;
        </button>

        <img
          src={player.hoverImage}
          alt={player.name}
          className="w-auto md:h-96 h-auto mb-4"
        />
        <h2 className="text-center font-bold text-xl mb-2">
          {player.name}
        </h2>
        <p className="text-center font-semibold">{player.position}</p>
      </div>
    </div>
  );
};

const SectionToofaniSquad = () => {
  const [hoveredPlayer, setHoveredPlayer] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  const enterTimeout = useRef(null);
  const leaveTimeout = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(enterTimeout.current);
      clearTimeout(leaveTimeout.current);
    };
  }, []);

  const handleHover = (player) => {
    clearTimeout(leaveTimeout.current);
    clearTimeout(enterTimeout.current);

    if (player) {
      enterTimeout.current = setTimeout(() => {
        setHoveredPlayer(player);
        setModalVisible(true);
      }, 500);
    } else {
      leaveTimeout.current = setTimeout(() => {
        setModalVisible(false);
      }, 20000);
    }
  };

  // OUTSIDE HITTERS - 4 players
  const outsideHitters = [
    {
      image: George,
      name: 'George Antony',
      position: 'Outside Hitter',
      dob: '10/11/1999',
      hoverImage: GeorgeHover
    },
    {
      image: Deepak,
      name: 'Deepak Kumar M',
      position: 'Outside Hitter',
      dob: '11/14/2002',
      hoverImage: DeepakHover
    },
    {
      image: Amadou,
      name: 'Amadou Laye Samb',
      position: 'Outside Hitter',
      dob: '2/19/1997',
      hoverImage: AmadouHover
    },
    {
      image: Sheik,
      name: 'Shiek Numan',
      position: 'Outside Hitter',
      dob: '6/21/2006',
      hoverImage: SheikHover
    }
  ];

  // MIDDLE BLOCKERS - 4 players
  const middleBlockers = [
    {
      image: Pravin,
      name: 'Pravin P',
      position: 'Middle Blocker',
      dob: '1/26/2006',
      hoverImage: PravinHover
    },
    {
      image: Muhammed,
      name: 'Muhammed Jasim',
      position: 'Middle Blocker',
      dob: '7/18/2003',
      hoverImage: MuhammedHover
    },
    {
      image: James,
      name: 'James Weir',
      position: 'Middle Blocker',
      dob: '7/20/1995',
      hoverImage: JamesHover
    },
    {
      image: Sachin,
      name: 'Sachin K',
      position: 'Blocker',
      dob: '1/20/1996',
      hoverImage: SachinHover
    }
  ];

  // LIBEROS - 2 players
  const liberos = [
    {
      image: Anand,
      name: 'Anand K',
      position: 'Libero',
      dob: '9/11/2002',
      hoverImage: AnandHover
    },
    {
      image: Aljo,
      name: 'Aljo Sabu',
      position: 'Libero',
      dob: '9/15/2004',
      hoverImage: AljoHover
    }
  ];

  // SETTERS - 2 players
  const setters = [
    {
      image: LalSujan,
      name: 'Lal Sujan M V',
      position: 'Setter',
      dob: '5/30/1992',
      hoverImage: LalSujanHover
    },
    {
      image: Shamil,
      name: 'Muhammed Shamil O K',
      position: 'Setter',
      dob: '2/18/2002',
      hoverImage: ShamilHover
    }
  ];

  // OPPOSITES - 2 players
  const opposites = [
    {
      image: Abhishek,
      name: 'Abhishek Rajeev',
      position: 'Opposite',
      dob: '3/18/1996',
      hoverImage: AbhishekHover
    },
    {
      image: Yoan,
      name: 'Yoan David',
      position: 'Opposite',
      dob: '7/5/1999',
      hoverImage: YoanHover
    }
  ];

  const squad = [
    { title: 'Outside Hitter', players: outsideHitters },
    { title: 'Middle Blocker', players: middleBlockers },
    { title: 'Libero', players: liberos },
    { title: 'Setter', players: setters },
    { title: 'Opposite', players: opposites }
  ];

  return (
    <section className="mb-6">
      <h1 className="py-4 bg-[#ffbd00] text-center text-4xl font-bold">
        Toofani Squad
      </h1>

      <div className="max-auto md:px-[8rem]">
        {squad.map(({ title, players }) => (
          <React.Fragment key={title}>
            <h2 className="text-center md:text-4xl py-5 font-semibold text-[#3b0067] text-2xl">
              {title}
            </h2>
            <div className="flex flex-wrap justify-center gap-5">
              {players.map((player) => (
                <GridItem
                  key={player.name}
                  {...player}
                  onHover={handleHover}
                />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>

      <ModalBox
        player={hoveredPlayer}
        isVisible={isModalVisible}
        onClose={() => {
          clearTimeout(enterTimeout.current);
          clearTimeout(leaveTimeout.current);
          setModalVisible(false);
        }}
      />
    </section>
  );
};

export default SectionToofaniSquad;
