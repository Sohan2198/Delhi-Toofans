// Single source of truth for the current Delhi Toofans squad.
// Order matches the official roster; the Squad page groups players by `group`.

import GeorgeAntonyCutout from '../assets/players/george-antony/cutout.webp';
import GeorgeAntonyCard from '../assets/players/george-antony/card.webp';
import GeorgeAntonyInfo from '../assets/players/george-antony/info.webp';
import AnandKCutout from '../assets/players/anand-k/cutout.webp';
import AnandKCard from '../assets/players/anand-k/card.webp';
import AnandKInfo from '../assets/players/anand-k/info.webp';
import AljoSabuCutout from '../assets/players/aljo-sabu/cutout.webp';
import AljoSabuCard from '../assets/players/aljo-sabu/card.webp';
import AljoSabuInfo from '../assets/players/aljo-sabu/info.webp';
import AbhishekRajeevCutout from '../assets/players/abhishek-rajeev/cutout.webp';
import AbhishekRajeevCard from '../assets/players/abhishek-rajeev/card.webp';
import AbhishekRajeevInfo from '../assets/players/abhishek-rajeev/info.webp';
import DeepakKumarMCutout from '../assets/players/deepak-kumar-m/cutout.webp';
import DeepakKumarMCard from '../assets/players/deepak-kumar-m/card.webp';
import DeepakKumarMInfo from '../assets/players/deepak-kumar-m/info.webp';
import PravinPCutout from '../assets/players/pravin-p/cutout.webp';
import PravinPCard from '../assets/players/pravin-p/card.webp';
import PravinPInfo from '../assets/players/pravin-p/info.webp';
import MuhammedJasimCutout from '../assets/players/muhammed-jasim/cutout.webp';
import MuhammedJasimCard from '../assets/players/muhammed-jasim/card.webp';
import MuhammedJasimInfo from '../assets/players/muhammed-jasim/info.webp';
import LalSujanMVCutout from '../assets/players/lal-sujan-m-v/cutout.webp';
import LalSujanMVCard from '../assets/players/lal-sujan-m-v/card.webp';
import LalSujanMVInfo from '../assets/players/lal-sujan-m-v/info.webp';
import MuhammedShamilOKCutout from '../assets/players/muhammed-shamil-o-k/cutout.webp';
import MuhammedShamilOKCard from '../assets/players/muhammed-shamil-o-k/card.webp';
import MuhammedShamilOKInfo from '../assets/players/muhammed-shamil-o-k/info.webp';
import AmadouLayeSambCutout from '../assets/players/amadou-laye-samb/cutout.webp';
import AmadouLayeSambCard from '../assets/players/amadou-laye-samb/card.webp';
import AmadouLayeSambInfo from '../assets/players/amadou-laye-samb/info.webp';
import JamesWeirCutout from '../assets/players/james-weir/cutout.webp';
import JamesWeirCard from '../assets/players/james-weir/card.webp';
import JamesWeirInfo from '../assets/players/james-weir/info.webp';
import YoanDavidCutout from '../assets/players/yoan-david/cutout.webp';
import YoanDavidCard from '../assets/players/yoan-david/card.webp';
import YoanDavidInfo from '../assets/players/yoan-david/info.webp';
import ShiekNumanCutout from '../assets/players/shiek-numan/cutout.webp';
import ShiekNumanCard from '../assets/players/shiek-numan/card.webp';
import ShiekNumanInfo from '../assets/players/shiek-numan/info.webp';
import SachinKCutout from '../assets/players/sachin-k/cutout.webp';
import SachinKCard from '../assets/players/sachin-k/card.webp';
import SachinKInfo from '../assets/players/sachin-k/info.webp';

export const POSITION_GROUPS = ['Outside Hitter', 'Middle Blocker', 'Libero', 'Setter', 'Opposite'];

export const players = [
  {
    id: 'george-antony',
    name: 'George Antony',
    position: 'Outside Hitter',
    group: 'Outside Hitter',
    dob: '1999-10-11',
    bio: "A high-flying outside hitter, George is returning for his second season with the Delhi Toofans. He is a proven, consistent attacker in the senior national circuit, bringing raw power and crucial point-scoring ability to the Toofans' front line.",
    stats: { height: 190, spikeHeight: 348, blockHeight: 339 },
    images: { cutout: GeorgeAntonyCutout, card: GeorgeAntonyCard, info: GeorgeAntonyInfo },
  },
  {
    id: 'anand-k',
    name: 'Anand K',
    position: 'Libero',
    group: 'Libero',
    dob: '2002-09-11',
    bio: "A defensive anchor and foundational player returning to the Delhi Toofans, Anand K also represents the Indian National Team. He burst onto the PVL scene as a teenager, recording astonishing dig success rates. Recently, his international exploits have been stellar, as he was named the Best Libero at the AVC Men's Cup 2026 in Ahmedabad. He also represented India at the 2026 Asian Games and the AVC Men's Volleyball Continental Championship in Japan. Widely regarded as one of India's premier liberos, his energetic defense and miraculous saves make him a crucial returning veteran for the Toofans.",
    stats: { height: 174, spikeHeight: 320, blockHeight: 310 },
    images: { cutout: AnandKCutout, card: AnandKCard, info: AnandKInfo },
  },
  {
    id: 'aljo-sabu',
    name: 'Aljo Sabu',
    position: 'Libero',
    group: 'Libero',
    dob: '2004-09-15',
    bio: 'Selected to the Indian University Volleyball team in 2026, Aljo is an elite rising defensive talent out of MG University. Returning to the Toofans squad after delivering vital cameos under pressure last season, his quick reflexes and steadfast reception make him an invaluable Libero for Delhi.',
    stats: { height: 175, spikeHeight: 310, blockHeight: 200 },
    images: { cutout: AljoSabuCutout, card: AljoSabuCard, info: AljoSabuInfo },
  },
  {
    id: 'abhishek-rajeev',
    name: 'Abhishek Rajeev',
    position: 'Opposite',
    group: 'Opposite',
    dob: '1996-03-18',
    bio: "A dynamic Opposite who is continuing his tenure with the Delhi Toofans after leading several dramatic comebacks for us last season. Abhishek is celebrated for his outstanding spikes and recently led the Indian Air Force to the finals of the 73rd Inter-Services Volleyball Championship. Abhishek's versatility will be crucial to the fortunes of the Toofans' squad ahead of the 5th season of the PVL.",
    stats: { height: 192, spikeHeight: 320, blockHeight: 345 },
    images: { cutout: AbhishekRajeevCutout, card: AbhishekRajeevCard, info: AbhishekRajeevInfo },
  },
  {
    id: 'deepak-kumar-m',
    name: 'Deepak Kumar M',
    position: 'Outside Hitter',
    group: 'Outside Hitter',
    dob: '2002-11-14',
    bio: "Standing at 201cm, this towering Outside Hitter leverages his immense spike height to break through opposition blocks. A dominant offensive force in Kerala's state and national circuits, Deepak will look to make a name for himself at the PVL in a Toofans' shirt this season.",
    stats: { height: 201, spikeHeight: 355, blockHeight: 330 },
    images: { cutout: DeepakKumarMCutout, card: DeepakKumarMCard, info: DeepakKumarMInfo },
  },
  {
    id: 'pravin-p',
    name: 'Pravin P',
    position: 'Middle Blocker',
    group: 'Middle Blocker',
    dob: '2006-01-26',
    bio: 'An elite prospect developed by the Sports Authority of India (SAI). At just 20 years old, Pravin is a technically gifted Middle Blocker whose reading of the game makes him a defensive cornerstone for the future.',
    stats: { height: 197, spikeHeight: 348, blockHeight: 324 },
    images: { cutout: PravinPCutout, card: PravinPCard, info: PravinPInfo },
  },
  {
    id: 'muhammed-jasim',
    name: 'Muhammed Jasim',
    position: 'Middle Blocker',
    group: 'Middle Blocker',
    dob: '2003-07-18',
    bio: 'The tallest Indian player on the squad at an imposing 207cm. Returning to the Toofans after a stellar previous season where his massive triple-blocks clinched crucial matches, Jasim dominates the net utilizing his spike reach as a formidable two-way Middle Blocker. With a year of PVL now under his belt, Jasim will be crucial as the Toofans look towards glory in the 5th season of the PVL.',
    stats: { height: 207, spikeHeight: 365, blockHeight: 355 },
    images: { cutout: MuhammedJasimCutout, card: MuhammedJasimCard, info: MuhammedJasimInfo },
  },
  {
    id: 'lal-sujan-m-v',
    name: 'Lal Sujan M V',
    position: 'Setter',
    group: 'Setter',
    dob: '1992-05-30',
    bio: "A veteran tactical mastermind, Lal Sujan brings years of high-stakes experience from the Indian Army and the PVL. As the team's Setter, his precise distribution and court mapping will dictate the Toofans' offensive tempo.",
    stats: { height: 181, spikeHeight: 315, blockHeight: 305 },
    images: { cutout: LalSujanMVCutout, card: LalSujanMVCard, info: LalSujanMVInfo },
  },
  {
    id: 'muhammed-shamil-o-k',
    name: 'Muhammed Shamil O K',
    position: 'Setter',
    group: 'Setter',
    dob: '2002-02-18',
    bio: "An agile, quick-thinking Setter representing Eastern Railway. Shamil's ability to run a fast-paced offense and his extensive experience in inter-railway championships make him a crucial playmaker.",
    stats: { height: 191, spikeHeight: 330, blockHeight: 330 },
    images: { cutout: MuhammedShamilOKCutout, card: MuhammedShamilOKCard, info: MuhammedShamilOKInfo },
  },
  {
    id: 'amadou-laye-samb',
    name: 'Amadou Laye Samb',
    position: 'Outside Hitter',
    group: 'Outside Hitter',
    dob: '1997-02-19',
    bio: "An explosive international Wing Spiker from Senegal. Amadou brings valuable continental experience, having proudly represented the Senegalese national team at the 2023 Men's African Nations Championship.",
    stats: { height: 209, spikeHeight: 362, blockHeight: 340 },
    images: { cutout: AmadouLayeSambCutout, card: AmadouLayeSambCard, info: AmadouLayeSambInfo },
  },
  {
    id: 'james-weir',
    name: 'James Weir',
    position: 'Middle Blocker',
    group: 'Middle Blocker',
    dob: '1995-07-20',
    bio: "A 204 cm Australian international Middle Blocker. James brings world-class defensive structure to Delhi, having represented the Volleyroos on the global stage, including the AVC Men's Cup and Continental Championships.",
    stats: { height: 204, spikeHeight: 355, blockHeight: 342 },
    images: { cutout: JamesWeirCutout, card: JamesWeirCard, info: JamesWeirInfo },
  },
  {
    id: 'yoan-david',
    name: 'Yoan David',
    position: 'Opposite',
    group: 'Opposite',
    dob: '1999-07-05',
    bio: "A versatile French-Canadian Opposite with a diverse attacking pedigree. Yoan's experience spans across international professional circuits, including the Volleyball World Pro Tour, making him a highly adaptable offensive weapon.",
    stats: { height: 195, spikeHeight: 352, blockHeight: 324 },
    images: { cutout: YoanDavidCutout, card: YoanDavidCard, info: YoanDavidInfo },
  },
  {
    id: 'shiek-numan',
    name: 'Shiek Numan',
    position: 'Outside Hitter',
    group: 'Outside Hitter',
    dob: '2006-06-21',
    bio: 'A promising and explosive Outside Hitter out of SRM University. Known for his leaping ability and agility, Shiek has consistently dismantled defenses in the All-India inter-university games and will be a youngster to keep an eye on!',
    stats: { height: 189, spikeHeight: 337, blockHeight: 320 },
    images: { cutout: ShiekNumanCutout, card: ShiekNumanCard, info: ShiekNumanInfo },
  },
  {
    id: 'sachin-k',
    name: 'Sachin K',
    position: 'Blocker',
    group: 'Middle Blocker',
    dob: '1996-01-20',
    bio: 'A seasoned and robust Blocker for Indian Railways. Sachin is a battle-tested competitor who brings grit and a commanding net presence honed in the highly competitive inter-departmental national tournaments.',
    stats: { height: 198, spikeHeight: 350, blockHeight: 322 },
    images: { cutout: SachinKCutout, card: SachinKCard, info: SachinKInfo },
  },
];

export const playersByGroup = POSITION_GROUPS.map((group) => ({
  group,
  players: players.filter((player) => player.group === group),
}));
