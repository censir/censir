import {
  CurrentResponse as CurrentResponseInit,
  ThreeHourResponse,
} from "openweathermap-ts/dist/types";

export type Weather = { success: boolean } & CurrentResponseInit &
  ThreeHourResponse;

export type CurrentResponse = { success: boolean } & CurrentResponseInit;

export interface GetCoordsRes {
  latitude: number | null;
  longitude: number | null;
}

export interface SeperatorProps {
  color: string | any;
}

export interface DegreeSymbolProps {
  celsius: boolean;
  size: string;
}
