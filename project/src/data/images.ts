// Centralized image URLs — all real Sri Lankan photography from Pexels (license-free)
// Replace these with client-provided assets when available.

const build = (url: string, w = 1200) => {
  const base = url.split('?')[0];
  return `${base}?auto=compress&cs=tinysrgb&w=${w}`;
};

export const IMG = {
  // Hero
  heroElla: build('https://images.pexels.com/photos/10913652/pexels-photo-10913652.jpeg', 1920),
  heroEllaWide: build('https://images.pexels.com/photos/18080584/pexels-photo-18080584.jpeg', 1920),
  nineArches: build('https://images.pexels.com/photos/34218645/pexels-photo-34218645.jpeg', 1920),

  // Mountains & Tea
  teaFields: build('https://images.pexels.com/photos/33345878/pexels-photo-33345878.jpeg'),
  teaPlantation: build('https://images.pexels.com/photos/321570/pexels-photo-321570.jpeg'),
  teaPlantation2: build('https://images.pexels.com/photos/36847090/pexels-photo-36847090.jpeg'),
  teaMisty: build('https://images.pexels.com/photos/1122875/pexels-photo-1122875.jpeg'),
  ellaAerial: build('https://images.pexels.com/photos/18826653/pexels-photo-18826653.jpeg'),
  ellaMountains: build('https://images.pexels.com/photos/18080584/pexels-photo-18080584.jpeg'),
  mandaramnuwara: build('https://images.pexels.com/photos/19287633/pexels-photo-19287633.jpeg'),

  // Beaches
  beachSunset: build('https://images.pexels.com/photos/319912/pexels-photo-319912.jpeg'),
  beachUnawatuna: build('https://images.pexels.com/photos/11398739/pexels-photo-11398739.jpeg'),
  beachTropical: build('https://images.pexels.com/photos/34861048/pexels-photo-34861048.jpeg'),
  beachAhangama: build('https://images.pexels.com/photos/11629009/pexels-photo-11629009.jpeg'),
  beachSilhouette: build('https://images.pexels.com/photos/11616553/pexels-photo-11616553.jpeg'),

  // Wildlife
  yalaElephant: build('https://images.pexels.com/photos/17281950/pexels-photo-17281950.jpeg'),
  elephantSavanna: build('https://images.pexels.com/photos/4769072/pexels-photo-4769072.jpeg'),
  elephantDust: build('https://images.pexels.com/photos/7913563/pexels-photo-7913563.jpeg'),
  elephantPair: build('https://images.pexels.com/photos/31348874/pexels-photo-31348874.jpeg'),

  // Heritage
  sigiriya: build('https://images.pexels.com/photos/34128249/pexels-photo-34128249.jpeg'),
  sigiriyaAerial: build('https://images.pexels.com/photos/35606860/pexels-photo-35606860.jpeg'),
  sigiriyaAerial2: build('https://images.pexels.com/photos/6045035/pexels-photo-6045035.jpeg'),
  galleFort: build('https://images.pexels.com/photos/27669314/pexels-photo-27669314.jpeg'),
  galleFort2: build('https://images.pexels.com/photos/38143923/pexels-photo-38143923.jpeg'),
  galleLighthouse: build('https://images.pexels.com/photos/11116033/pexels-photo-11116033.jpeg'),
  kandyTemple: build('https://images.pexels.com/photos/38253196/pexels-photo-38253196.jpeg'),
  buddhaStatue: build('https://images.pexels.com/photos/29202503/pexels-photo-29202503.jpeg'),
  ancientRuins: build('https://images.pexels.com/photos/33171756/pexels-photo-33171756.jpeg'),
  buddhaStone: build('https://images.pexels.com/photos/14056213/pexels-photo-14056213.jpeg'),
  galVihara: build('https://images.pexels.com/photos/1259789/pexels-photo-1259789.jpeg'),

  // Waterfalls
  waterfall: build('https://images.pexels.com/photos/30935691/pexels-photo-30935691.jpeg'),
  waterfall2: build('https://images.pexels.com/photos/26597035/pexels-photo-26597035.jpeg'),
  waterfall3: build('https://images.pexels.com/photos/11865764/pexels-photo-11865764.jpeg'),
  waterfall4: build('https://images.pexels.com/photos/31018816/pexels-photo-31018816.jpeg'),

  // Food
  foodNoodles: build('https://images.pexels.com/photos/5176006/pexels-photo-5176006.jpeg'),
  foodStreet: build('https://images.pexels.com/photos/37051940/pexels-photo-37051940.jpeg'),
  foodMarket: build('https://images.pexels.com/photos/37052028/pexels-photo-37052028.jpeg'),
  foodVendor: build('https://images.pexels.com/photos/37052004/pexels-photo-37052004.jpeg'),
  foodPettah: build('https://images.pexels.com/photos/37933301/pexels-photo-37933301.jpeg'),

  // Villages & People
  villageBoys: build('https://images.pexels.com/photos/6140563/pexels-photo-6140563.jpeg'),
  villageWoman: build('https://images.pexels.com/photos/29358084/pexels-photo-29358084.jpeg'),
  teaWoman: build('https://images.pexels.com/photos/8654894/pexels-photo-8654894.jpeg'),
  villageHouse: build('https://images.pexels.com/photos/38974683/pexels-photo-38974683.jpeg'),
  villageRoad: build('https://images.pexels.com/photos/38974653/pexels-photo-38974653.jpeg'),
  railwayVillage: build('https://images.pexels.com/photos/38974703/pexels-photo-38974703.jpeg'),

  // Scenic roads
  roadHighway: build('https://images.pexels.com/photos/6194882/pexels-photo-6194882.jpeg'),
  roadHills: build('https://images.pexels.com/photos/31729880/pexels-photo-31729880.jpeg'),
  roadBus: build('https://images.pexels.com/photos/21081146/pexels-photo-21081146.jpeg'),
  roadForest: build('https://images.pexels.com/photos/5335565/pexels-photo-5335565.jpeg'),

  // Train
  trainGreen: build('https://images.pexels.com/photos/36847014/pexels-photo-36847014.jpeg'),

  // Culture & Festivals
  kandyanDancer: build('https://images.pexels.com/photos/36638332/pexels-photo-36638332.jpeg'),
  kandyanDance: build('https://images.pexels.com/photos/36638326/pexels-photo-36638326.jpeg'),
  kandyanDancer2: build('https://images.pexels.com/photos/36638324/pexels-photo-36638324.jpeg'),
  fireDancers: build('https://images.pexels.com/photos/36638343/pexels-photo-36638343.jpeg'),
  kandyanDancer3: build('https://images.pexels.com/photos/18161079/pexels-photo-18161079.jpeg'),
  kandyElephant: build('https://images.pexels.com/photos/27907342/pexels-photo-27907342.png'),
  kandyElephant2: build('https://images.pexels.com/photos/27907343/pexels-photo-27907343.png'),
  kandyMusicians: build('https://images.pexels.com/photos/36431759/pexels-photo-36431759.jpeg'),
  kandyDrummers: build('https://images.pexels.com/photos/36431760/pexels-photo-36431760.jpeg'),

  // Guest portraits
  guest1: 'https://images.pexels.com/photos/20849174/pexels-photo-20849174.jpeg?auto=compress&cs=tinysrgb&w=400',
  guest2: 'https://images.pexels.com/photos/22600348/pexels-photo-22600348.jpeg?auto=compress&cs=tinysrgb&w=400',
  guest3: 'https://images.pexels.com/photos/12038917/pexels-photo-12038917.jpeg?auto=compress&cs=tinysrgb&w=400',
  guest4: 'https://images.pexels.com/photos/14692614/pexels-photo-14692614.jpeg?auto=compress&cs=tinysrgb&w=400',
} as const;
