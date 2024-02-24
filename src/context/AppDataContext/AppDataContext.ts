import { createContext } from "react";

export enum Difficulty {
  Letter,
  TwoLetters,
  ThreeLetters,
  FourLetters,
  MoreLetters
}

export interface AppDataType {
  duration: number;
  pace: number;
  difficulty: Difficulty;
  link: string;
}

const initialAppData = {
  duration: 30,
  pace: 5,
  difficulty: Difficulty.Letter,
  link: ""
};

export default createContext<AppDataType>(initialAppData);
