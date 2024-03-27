import { getRandomInt } from "./utils/utils";

export const DESCRIPTIONS = [
  'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
  'Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.',
  'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.'
];

export const TITLES = [
  'Beautiful & luxurious studio at great location',
  'Our hotel is located in close proximity to the sea and a beautiful sandy beach',
  'Loft Studio in the Central Area',
  'Nice, cozy, warm big bed apartment'
];

export const TYPES = ['apartment', 'room', 'house', 'hotel'];

export const CITIES = ['Все работы', 'Натюрморт', 'Пейзаж', 'Морской пейзаж'];

export const IMAGES = [
  `../../public/img/painting/roses.jpg`,
];


export const MAX_REVIEWS_COUNT = 10;

export const MAX_NEAR_PLACES_COUNT = 3;

export const RviewSymbolLenght = {
  Max: 300,
  Min: 50
} as const;

export const AppRoute = {
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer',
  Root: '/',
  NotFound: '*',
  Lose: '/lose',
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityName {
  // Paris = 'Paris',
  // Cologne = 'Cologne',
  // Brussels = 'Brussels',
  // Amsterdam = 'Amsterdam',
  // Hamburg = 'Hamburg',
  // Dusseldorf = 'Dusseldorf',
  All = 'Все работы',
  stillLife = 'Натюрморт'
}

export enum NameSpace {
  App = 'APP',
  User = 'USER',
  Offers = 'OFFERS',
  Reviews = 'REVIEWS',
  Favorites = 'FAVORITES',
  NearPlaces = 'NEAR_PLACES',
  Offer = 'OFFER',
}

export const SortOption = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRatedFirst: 'Top rated first',
} as const;

export enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments',
  NearPlaces = '/nearby',
  Favorite = '/favorite',
}

export enum RequestStatus {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Error = 'error',
}

export const ErrorCause = {
  FetchOffers: 'FETCH_OFFERS',
  FetchActiveOffer: 'FETCH_ACTIVE_OFFER',
  FetchNearPlaces: 'FETCH_NEAR_PLACES',
  FetchReviews: 'FETCH_REVIEWS',
  FetchFavorites: 'FETCH_FAVORITES',
} as const;
