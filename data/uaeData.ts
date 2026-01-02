export const uaeStatesAndCities = {
  'Dubai': [
    'Bur Dubai', 'Deira', 'Jumeirah', 'Al Barsha', 'Downtown Dubai',
    'Dubai Marina', 'Al Quoz', 'Jebel Ali', 'Mirdif', 'Al Warqa'
  ],
  'Abu Dhabi': [
    'Abu Dhabi City', 'Al Ain', 'Al Dhafra', 'Al Gharbia',
    'Khalifa City', 'Mohammed Bin Zayed City', 'Al Raha', 'Yas Island'
  ],
  'Sharjah': [
    'Sharjah City', 'Al Khan', 'Al Nahda', 'Al Qasimia',
    'Al Majaz', 'Al Taawun', 'University City'
  ],
  'Ajman': [
    'Ajman City', 'Al Jurf', 'Al Hamidiyah', 'Al Nuaimiya',
    'Al Rashidiya', 'Al Mowaihat'
  ],
  'Umm Al Quwain': [
    'Umm Al Quwain City', 'Al Haditha', 'Al Raudah',
    'Al Salamah', 'Al Riqqah'
  ],
  'Ras Al Khaimah': [
    'Ras Al Khaimah City', 'Al Marjan Island', 'Al Nakheel',
    'Al Dhait', 'Al Hamra'
  ],
  'Fujairah': [
    'Fujairah City', 'Al Faseel', 'Al Hayl', 'Al Bithnah',
    'Al Gurfa', 'Al Aqah'
  ]
} as const;

export type Emirate = keyof typeof uaeStatesAndCities;
export type City = typeof uaeStatesAndCities[Emirate][number];

export const emirates = Object.keys(uaeStatesAndCities) as Emirate[];

export function getCitiesByEmirate(emirate: Emirate): City[] {
  return [...uaeStatesAndCities[emirate]];
}