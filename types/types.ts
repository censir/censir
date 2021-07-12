import {
  CurrentResponse,
  ThreeHourResponse,
} from "openweathermap-ts/dist/types";

export type Weather = { success: boolean } & CurrentResponse &
  ThreeHourResponse;
