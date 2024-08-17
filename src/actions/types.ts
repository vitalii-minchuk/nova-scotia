import { EAnimalType } from '@/emuns';

export type TActionsGenericResponse = {
  success?: boolean;
  message?: string | null;
  errors?: Record<string, string | string[]>;
};

export interface IBreed {
  id: number;
  name: string;
  temperament: string;
}

export interface ICatDogResponse {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: IBreed[];
  type: EAnimalType;
}
