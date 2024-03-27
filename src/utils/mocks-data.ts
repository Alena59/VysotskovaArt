import {TOffer} from '../types/offer';
import {CITIES, TYPES, DESCRIPTIONS, TITLES, IMAGES} from '../const';
import {getRandomInt, getRandomArrayElement, getRandomFloat} from './utils';

function getCityOffer(index: number): TOffer {
  return {
    bedrooms: getRandomInt(0, 20),
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: getRandomInt(0, 20)
      },
      name: getRandomArrayElement(CITIES),
    },
    description: getRandomArrayElement(DESCRIPTIONS),
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: `../../public/img/painting/roses.jpg`,
      id: index.toString(),
      isPro: !!getRandomInt(0, 1),
      name: 'Angelina',
    },
    id: index.toString(),
    images: [
      getRandomArrayElement(IMAGES)
    ],
    isFavorite: !!getRandomInt(0, 1),
    isPremium: !!getRandomInt(0, 1),
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: getRandomInt(0, 20)
    },
    maxAdults: getRandomInt(0, 10),
    previewImage: `../../public/img/painting/roses.jpg`,
    price: getRandomInt(100, 2000),
    rating: getRandomFloat(1, 5, 1),
    title: getRandomArrayElement(TITLES),
    type: getRandomArrayElement(TYPES)
  };
}

export const offer: TOffer[] = Array.from({length: 5}, (_, index: number): TOffer => getCityOffer(index + 1));

// export default offer;
