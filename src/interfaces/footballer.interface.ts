export interface IFootballersResponse {
  data: IFootballer[];
}

export interface IFootballerResponse {
  data: IFootballer;
}

export interface IFootballer {
  id: number;
  name: string;
  club_id: number;
  position: string;
  age: string;
  nationality: string;
  height: string;
  weight: string;
  appearances: string;
  goals: string;
  assists: string;
  ball_actions: string;
  distance: string;
  penalties: string;
  player_history: string;
  current_season: string;
  last_game: string;
  career_records: string;
  int_appointments: string;
}
