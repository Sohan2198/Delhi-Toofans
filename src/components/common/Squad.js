import React, { useState } from 'react';
import image1 from '../../pages/Squad/Team/Without BG/George Antony_Attacker.png'; // George Antony
import image2 from '../../pages/Squad/Team/Without BG/Anand K_Libero.png'; // Anand K
import image3 from '../../pages/Squad/Team/Without BG/Aljo sabu_Libero.png'; // Aljo Sabu
import image4 from '../../pages/Squad/Team/Without BG/Abhishek Rajeev_Universal.png'; // Abhishek Rajeev
import image5 from '../../pages/Squad/Team/Without BG/Deepak Kumar_Universal.png'; // Deepak Kumar M
import image6 from '../../pages/Squad/Team/Without BG/Pravin P_Blocker.png'; // Pravin P
import image7 from '../../pages/Squad/Team/Without BG/Muhammed Jasim_Blocker.png'; // Muhammed Jasim
import image8 from '../../pages/Squad/Team/Without BG/Lal Sujan_Setter.png'; // Lal Sujan M V
import image9 from '../../pages/Squad/Team/Without BG/Muhammed Shamil_Setter.png'; // Muhammed Shamil O K
import image10 from '../../pages/Squad/Team/Without BG/Amadou Laye Samb_Attacker.png'; // Amadou Laye Samb
import image11 from '../../pages/Squad/Team/Without BG/James Weir_Blocker.png'; // James Weir
import image12 from '../../pages/Squad/Team/Without BG/Yoan David_Universal.png'; // Yoan David
import image13 from '../../pages/Squad/Team/Without BG/Shiek Numan_Attacker.png'; // Shiek Numan
import image14 from '../../pages/Squad/Team/Without BG/Sachin Kundathil_Blocker.png'; // Sachin K

import selectedImage1 from '../../pages/Squad/Team/With BG/George Antony_Attacker.png'; // George Antony
import selectedImage2 from '../../pages/Squad/Team/With BG/Anand K_Libero.png'; // Anand K
import selectedImage3 from '../../pages/Squad/Team/With BG/Aljo sabu_Libero.png'; // Aljo Sabu
import selectedImage4 from '../../pages/Squad/Team/With BG/Abhishek Rajeev_Universal.png'; // Abhishek Rajeev
import selectedImage5 from '../../pages/Squad/Team/With BG/Deepak Kumar_Universal.png'; // Deepak Kumar M
import selectedImage6 from '../../pages/Squad/Team/With BG/Pravin P_Blocker.png'; // Pravin P
import selectedImage7 from '../../pages/Squad/Team/With BG/Muhammed Jasim_Blocker.png'; // Muhammed Jasim
import selectedImage8 from '../../pages/Squad/Team/With BG/Lal Sujan_Setter.png'; // Lal Sujan M V
import selectedImage9 from '../../pages/Squad/Team/With BG/Muhammed Shamil_Setter.png'; // Muhammed Shamil O K
import selectedImage10 from '../../pages/Squad/Team/With BG/Amadou Laye Samb_Attacker.png'; // Amadou Laye Samb
import selectedImage11 from '../../pages/Squad/Team/With BG/James Weir_Blocker.png'; // James Weir
import selectedImage12 from '../../pages/Squad/Team/With BG/Yoan David_Universal.png'; // Yoan David
import selectedImage13 from '../../pages/Squad/Team/With BG/Shiek Numan_Attacker.png'; // Shiek Numan
import selectedImage14 from '../../pages/Squad/Team/With BG/Sachin Kundathil_Blocker.png'; // Sachin K
import { Link } from 'react-router-dom';

const Squad = () => {
  const players = [
    {
      name: 'George Antony',
      role: 'Outside Hitter',
      thumbnail: image1,
      image: selectedImage1,
      details: {
        name: 'George Antony',
        position: 'Outside Hitter',
        description: "A high-flying outside hitter, George is returning for his second season with the Delhi Toofans. He is a proven, consistent attacker in the senior national circuit, bringing raw power and crucial point-scoring ability to the Toofans' front line.",
        stats: {
          Height: 190,
          Hname:'Height (cms).',
          SpikeH: 348,
          SHname:'Spike Height (cms).',
          BlockH: 339,
          BHname:'Block Height (cms).'
        },
      },
    },
    {
      name: 'Anand K',
      role: 'Libero',
      thumbnail: image2,
      image: selectedImage2,
      details: {
        name: 'Anand K',
        position: 'Libero',
        description: "A defensive anchor and foundational player returning to the Delhi Toofans, Anand K also represents the Indian National Team. He burst onto the PVL scene as a teenager, recording astonishing dig success rates. Recently, his international exploits have been stellar, as he was named the Best Libero at the AVC Men's Cup 2026 in Ahmedabad. He also represented India at the 2026 Asian Games and the AVC Men's Volleyball Continental Championship in Japan. Widely regarded as one of India's premier liberos, his energetic defense and miraculous saves make him a crucial returning veteran for the Toofans.",
        stats: {
          Height: 174,
          Hname:'Height (cms).',
          SpikeH: 320,
          SHname:'Spike Height (cms).',
          BlockH: 310,
          BHname:'Block Height (cms).'
        },
      },
    },
    {
      name: 'Aljo Sabu',
      role: 'Libero',
      thumbnail: image3,
      image: selectedImage3,
      details: {
        name: 'Aljo Sabu',
        position: 'Libero',
        description: "Selected to the Indian University Volleyball team in 2026, Aljo is an elite rising defensive talent out of MG University. Returning to the Toofans squad after delivering vital cameos under pressure last season, his quick reflexes and steadfast reception make him an invaluable Libero for Delhi.",
        stats: {
          Height: 175,
          Hname:'Height (cms).',
          SpikeH: 310,
          SHname:'Spike Height (cms).',
          BlockH: 200,
          BHname:'Block Height (cms).'
        },
      },
    },
    {
      name: 'Abhishek Rajeev',
      role: 'Opposite',
      thumbnail: image4,
      image: selectedImage4,
      details: {
        name: 'Abhishek Rajeev',
        position: 'Opposite',
        description: "A dynamic Opposite who is continuing his tenure with the Delhi Toofans after leading several dramatic comebacks for us last season. Abhishek is celebrated for his outstanding spikes and recently led the Indian Air Force to the finals of the 73rd Inter-Services Volleyball Championship. Abhishek's versatility will be crucial to the fortunes of the Toofans' squad ahead of the 5th season of the PVL.",
        stats: {
          Height: 192,
          Hname:'Height (cms).',
          SpikeH: 320,
          SHname:'Spike Height (cms).',
          BlockH: 345,
          BHname:'Block Height (cms).'
        },
      },
    },
    {
      name: 'Deepak Kumar M',
      role: 'Outside Hitter',
      thumbnail: image5,
      image: selectedImage5,
      details: {
        name: 'Deepak Kumar M',
        position: 'Outside Hitter',
        description: "Standing at 201cm, this towering Outside Hitter leverages his immense spike height to break through opposition blocks. A dominant offensive force in Kerala's state and national circuits, Deepak will look to make a name for himself at the PVL in a Toofans' shirt this season.",
        stats: {
          Height: 201,
          Hname:'Height (cms).',
          SpikeH: 355,
          SHname:'Spike Height (cms).',
          BlockH: 330,
          BHname:'Block Height (cms).'
        },
      },
    },
    {
      name: 'Pravin P',
      role: 'Middle Blocker',
      thumbnail: image6,
      image: selectedImage6,
      details: {
        name: 'Pravin P',
        position: 'Middle Blocker',
        description: "An elite prospect developed by the Sports Authority of India (SAI). At just 20 years old, Pravin is a technically gifted Middle Blocker whose reading of the game makes him a defensive cornerstone for the future.",
        stats: {
          Height: 197,
          Hname:'Height (cms).',
          SpikeH: 348,
          SHname:'Spike Height (cms).',
          BlockH: 324,
          BHname:'Block Height (cms).'
        },
      },
    },
    {
      name: 'Muhammed Jasim',
      role: 'Middle Blocker',
      thumbnail: image7,
      image: selectedImage7,
      details: {
        name: 'Muhammed Jasim',
        position: 'Middle Blocker',
        description: "The tallest Indian player on the squad at an imposing 207cm. Returning to the Toofans after a stellar previous season where his massive triple-blocks clinched crucial matches, Jasim dominates the net utilizing his spike reach as a formidable two-way Middle Blocker. With a year of PVL now under his belt, Jasim will be crucial as the Toofans look towards glory in the 5th season of the PVL.",
        stats: {
          Height: 207,
          Hname:'Height (cms).',
          SpikeH: 365,
          SHname:'Spike Height (cms).',
          BlockH: 355,
          BHname:'Block Height (cms).'
        },
      },
    },
    {
      name: 'Lal Sujan M V',
      role: 'Setter',
      thumbnail: image8,
      image: selectedImage8,
      details: {
        name: 'Lal Sujan M V',
        position: 'Setter',
        description: "A veteran tactical mastermind, Lal Sujan brings years of high-stakes experience from the Indian Army and the PVL. As the team's Setter, his precise distribution and court mapping will dictate the Toofans' offensive tempo.",
        stats: {
          Height: 181,
          Hname:'Height (cms).',
          SpikeH: 315,
          SHname:'Spike Height (cms).',
          BlockH: 305,
          BHname:'Block Height (cms).'
        },
      },
    },
    {
      name: 'Muhammed Shamil O K',
      role: 'Setter',
      thumbnail: image9,
      image: selectedImage9,
      details: {
        name: 'Muhammed Shamil O K',
        position: 'Setter',
        description: "An agile, quick-thinking Setter representing Eastern Railway. Shamil's ability to run a fast-paced offense and his extensive experience in inter-railway championships make him a crucial playmaker.",
        stats: {
          Height: 191,
          Hname:'Height (cms).',
          SpikeH: 330,
          SHname:'Spike Height (cms).',
          BlockH: 330,
          BHname:'Block Height (cms).'
        },
      },
    },
    {
      name: 'Amadou Laye Samb',
      role: 'Outside Hitter',
      thumbnail: image10,
      image: selectedImage10,
      details: {
        name: 'Amadou Laye Samb',
        position: 'Outside Hitter',
        description: "An explosive international Wing Spiker from Senegal. Amadou brings valuable continental experience, having proudly represented the Senegalese national team at the 2023 Men's African Nations Championship.",
        stats: {
          Height: 209,
          Hname:'Height (cms).',
          SpikeH: 362,
          SHname:'Spike Height (cms).',
          BlockH: 340,
          BHname:'Block Height (cms).'
        },
      },
    },
    {
      name: 'James Weir',
      role: 'Middle Blocker',
      thumbnail: image11,
      image: selectedImage11,
      details: {
        name: 'James Weir',
        position: 'Middle Blocker',
        description: "A 204 cm Australian international Middle Blocker. James brings world-class defensive structure to Delhi, having represented the Volleyroos on the global stage, including the AVC Men's Cup and Continental Championships.",
        stats: {
          Height: 204,
          Hname:'Height (cms).',
          SpikeH: 355,
          SHname:'Spike Height (cms).',
          BlockH: 342,
          BHname:'Block Height (cms).'
        },
      },
    },
    {
      name: 'Yoan David',
      role: 'Opposite',
      thumbnail: image12,
      image: selectedImage12,
      details: {
        name: 'Yoan David',
        position: 'Opposite',
        description: "A versatile French-Canadian Opposite with a diverse attacking pedigree. Yoan's experience spans across international professional circuits, including the Volleyball World Pro Tour, making him a highly adaptable offensive weapon.",
        stats: {
          Height: 195,
          Hname:'Height (cms).',
          SpikeH: 352,
          SHname:'Spike Height (cms).',
          BlockH: 324,
          BHname:'Block Height (cms).'
        },
      },
    },
    {
      name: 'Shiek Numan',
      role: 'Outside Hitter',
      thumbnail: image13,
      image: selectedImage13,
      details: {
        name: 'Shiek Numan',
        position: 'Outside Hitter',
        description: "A promising and explosive Outside Hitter out of SRM University. Known for his leaping ability and agility, Shiek has consistently dismantled defenses in the All-India inter-university games and will be a youngster to keep an eye on!",
        stats: {
          Height: 189,
          Hname:'Height (cms).',
          SpikeH: 337,
          SHname:'Spike Height (cms).',
          BlockH: 320,
          BHname:'Block Height (cms).'
        },
      },
    },
    {
      name: 'Sachin K',
      role: 'Blocker',
      thumbnail: image14,
      image: selectedImage14,
      details: {
        name: 'Sachin K',
        position: 'Blocker',
        description: "A seasoned and robust Blocker for Indian Railways. Sachin is a battle-tested competitor who brings grit and a commanding net presence honed in the highly competitive inter-departmental national tournaments.",
        stats: {
          Height: 198,
          Hname:'Height (cms).',
          SpikeH: 350,
          SHname:'Spike Height (cms).',
          BlockH: 322,
          BHname:'Block Height (cms).'
        },
      },
    },
    // Add more players as needed
  ];

  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <section className='bg-[#3b0067] md:pt-6 justify-center items-center mx-auto m-2 md:my-10 md:px-[9rem]'>
      <h1 className='md:text-5xl text-3xl text-white text-center font-bold mb-7'>Squad</h1>
      <div className='flex flex-col lg:flex-row gap-5 h-auto'>
      <div className='flex flex-col w-full justify-center lg:w-1/3'>
          <div className='h-96 overflow-y-auto'>
            {players.map((player, index) => (
              <div 
                key={index} 
                className='flex items-center p-2 rounded-md cursor-pointer'
                onClick={() => handlePlayerClick(player)}
              >
                <img src={player.thumbnail} alt={player.name} className='w-20 h-20 object-fill shadow-2xl rounded-md' />
                <div className='ml-4 text-white'>
                  <h4 className='text-lg font-bold'>{player.name}</h4>
                  <span className='text-sm'>{player.role}</span>
                </div>
              </div>
            ))}
          </div>
          <Link to={'/Squad'}>
          <button className='bg-[#ffbd00] px-5 py-1.5 w-24 text-sm rounded-md text-black font-medium mt-3'>View All</button>
          </Link>
        </div>

        <div className='w-full lg:w-1/3 h-auto'>
          <img src={selectedPlayer.image} alt="News" className='rounded-md' />
        </div>

        <div className='w-full lg:w-1/3 pl-4 pt-10'>
          <h2 className='text-3xl font-bold mb-3 text-[#ffbd00]'>{selectedPlayer.details.name}</h2>
          <h5 className='text-xl text-white mb-4 font-semibold'>{selectedPlayer.details.position}</h5>
          <p className='text-sm text-white mb-4'>{selectedPlayer.details.description}</p>
          <div className='grid grid-cols-4 gap-2 text-white'>
            <div className='text-left '>
              <span className='text-2xl font-extrabold block'>{selectedPlayer.details.stats.TotalP || selectedPlayer.details.stats.Height}</span>
              <span className='text-sm font-bold'>{selectedPlayer.details.stats.TPName || selectedPlayer.details.stats.Hname }</span>
            </div>
            <div className='text-left'>
              <span className='text-2xl font-extrabold block'>{selectedPlayer.details.stats.AttackP || selectedPlayer.details.stats.SpikeH}</span>
              <span className='text-sm font-bold '>{selectedPlayer.details.stats.APName || selectedPlayer.details.stats.SHname }</span>
            </div>
            <div className='text-left'>
              <span className='text-2xl font-extrabold block'>{selectedPlayer.details.stats.BlockP || selectedPlayer.details.stats.BlockH}</span>
              <span className='text-sm font-bold  '>{selectedPlayer.details.stats.BPName || selectedPlayer.details.stats.BHname }</span>
            </div>
            <div className='text-left'>
              <span className='text-2xl font-extrabold block'>{selectedPlayer.details.stats.ServeP}</span>
              <span className='text-sm font-bold '>{selectedPlayer.details.stats.SPName}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Squad;
