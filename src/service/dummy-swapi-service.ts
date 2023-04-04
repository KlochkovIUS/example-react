import { ISwapiService } from './models';

export default class DummySwapiService implements ISwapiService {
  _people = [
    {
      id: '1',
      name: 'Bilbo Baggins [TEST DATA]',
      gender: 'male',
      birth_year: 'long ago',
      eye_color: 'dark brown'
    },

    {
      id: '2',
      name: 'Frodo Baggins [TEST DATA]',
      gender: 'male',
      birth_year: 'long ago',
      eye_color: 'dark brown'
    }
  ];

  _planets = [
    {
      id: '1',
      name: 'Earth [TEST DATA]',
      population: '7.530.000.000',
      rotation_period: '23 hours 56 seconds',
      diameter: '12.742 km'
    },
    {
      id: '2',
      name: 'Venus [TEST DATA]',
      population: 'not known',
      rotation_period: '243 days',
      diameter: '12.104 km'
    }
  ];

  _starships = [
    {
      id: '1',
      name: 'USS Enterprise [TEST DATA]',
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      cost_in_credits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      passengers: 50,
      cargo_capacity: 100
    }
  ];

  getAllPeople = async () => {
    return this._people;
  };

  getPerson = async () => {
    return this._people[0];
  };

  getAllPlanets = async () => {
    return this._planets;
  };

  getPlanet = async () => {
    return this._planets[0];
  };

  getAllStarships = async () => {
    return this._starships;
  };

  getStarship = async () => {
    return this._starships[0];
  };

  getPersonImage = () => {
    return `https://placeimg.com/400/500/people`;
  };

  getStarshipImage = () => {
    return `https://placeimg.com/600/400/tech`;
  };

  getPlanetImage = () => {
    return `https://img.freepik.com/premium-photo/planet-earth-with-realistic-geography-surface-and-orbital-3d-cloud-atmosphere_31965-38885.jpg`;
  };

  getName = () => 'Тестовые данные';
}
