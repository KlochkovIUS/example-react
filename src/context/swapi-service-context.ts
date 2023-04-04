import { createContext } from 'react';
import { ISwapiService } from '../service/models';

export const SwapiServiceContext = createContext<ISwapiService | undefined>(
  undefined
);
