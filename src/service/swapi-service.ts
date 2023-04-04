import {
  ISwapiService,
  Person,
  PersonRequest,
  Planet,
  PlanetRequest,
  Starship,
  StarshipRequest,
  UrlConsider
} from './models';

export default class SwapiService implements ISwapiService {
  _apiBase = 'https://swapi.dev/api';
  _imageBase = 'https://starwars-visualguide.com/assets/img';

  getResource = async (url: string) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPeople = async () => {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson).slice(0, 5);
  };

  getPerson = async (id: string) => {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet).slice(0, 5);
  };

  getPlanet = async (id: string) => {
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship).slice(0, 5);
  };

  getStarship = async (id: string) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  getPersonImage = ({ id }: { id: string }) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  getStarshipImage = ({ id }: { id: string }) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  };

  getPlanetImage = ({ id }: { id: string }) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  };

  _extractId = (item: UrlConsider) => {
    const idRegExp = /\/([0-9]*)\/$/;
    const url = item.url;
    const matches = url.match(idRegExp);
    if (matches) {
      return matches[1];
    }

    return '-1';
  };

  getName = () => 'Реальные данные';

  _transformPlanet = (planet: PlanetRequest): Planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotation_period: planet.rotation_period,
      diameter: planet.diameter
    };
  };

  _transformStarship = (starship: StarshipRequest): Starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      cost_in_credits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargo_capacity: starship.cargo_capacity
    };
  };

  _transformPerson = (person: PersonRequest): Person => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birth_year: person.birth_year,
      eye_color: person.eye_color
    };
  };
}
