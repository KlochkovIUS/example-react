export interface UrlConsider {
  url: string;
}

export interface IdConsider {
  id: string;
}

interface SimpleObject {
  [key: string]: number | string | undefined;
}

interface PersonBase extends SimpleObject {
  name: string;
  gender: string;
  birth_year: string;
  eye_color: string;
}

export interface PersonRequest extends PersonBase, UrlConsider {}
export interface Person extends PersonBase, IdConsider {}

interface StarshipBase extends SimpleObject {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: number;
  passengers: number;
  cargo_capacity: number;
}

export interface StarshipRequest extends StarshipBase, UrlConsider {}
export interface Starship extends StarshipBase, IdConsider {}

interface PlanetBase extends SimpleObject {
  name: string;
  population: string;
  rotation_period: string;
  diameter: string;
}

export interface PlanetRequest extends PlanetBase, UrlConsider {}
export interface Planet extends PlanetBase, IdConsider {}

export type Item = Planet | Person | Starship;
export type Items = Planet[] | Person[] | Starship[];
export type GetItem = (
  id: string
) => Promise<Planet> | Promise<Person> | Promise<Starship>;
export type GetAllItems = () =>
  | Promise<Planet[]>
  | Promise<Person[]>
  | Promise<Starship[]>;

export interface ISwapiService {
  getAllPeople: () => Promise<Person[]>;
  getPerson: (id: string) => Promise<Person>;
  getAllPlanets: () => Promise<Planet[]>;
  getPlanet: (id: string) => Promise<Planet>;
  getAllStarships: () => Promise<Starship[]>;
  getStarship: (id: string) => Promise<Starship>;
  getPersonImage: ({ id }: { id: string }) => string;
  getStarshipImage: ({ id }: { id: string }) => string;
  getPlanetImage: ({ id }: { id: string }) => string;
  getName: () => string;
}
