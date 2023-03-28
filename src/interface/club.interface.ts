export interface IClubsResponse {
  data: IClub[];
}

export interface IClubResponse {
  data: IClub;
}

export interface IClubs {
  clubs: IClub[];
}

export interface IClubData {
  club: IClub;
}

export interface IClub {
  id: number;
  name: string;
  stadium: string;
  short_name: string;
  color: string;
  win: string;
  draw: string;
  lose: string;
}
