import { IPlayerPageData } from "@/src/interfaces";
import { Container, LastArticles } from "../../ui";

export const Player = ({ player, articles, club }: IPlayerPageData) => {
  return (
    <>
      <section style={{ backgroundColor: club.color }}>
        <Container>
          <div className="mb-20 flex min-h-[300px] flex-col justify-between py-5 text-white">
            <div className="flex items-center gap-x-3">
              <p className="text-8xl font-black">{player.id}</p>
              <h1 className="max-w-[200px] text-3xl">{player.name}</h1>
            </div>
            <ul className="grid max-w-[500px] grid-cols-2 gap-y-3 text-sm">
              <li>
                Club <span className="font-bold">{club.name}</span>
              </li>
              <li>
                Birthday <span className="font-bold">{player.age}</span>
              </li>
              <li>
                Height <span className="font-bold">{player.height}</span>
              </li>
              <li>
                Position <span className="font-bold">{player.position}</span>
              </li>
              <li>
                Nationality{" "}
                <span className="font-bold">{player.nationality}</span>
              </li>
              <li>
                Weight <span className="font-bold">{player.weight}</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>
      <section className="mb-20">
        <Container>
          <div>
            <h2 className="mb-4 text-center text-3xl font-bold uppercase">
              {player.name} STATS SEASON
            </h2>
            <div className="grid grid-cols-2 gap-x-5">
              <div>
                <h3 className="mb-4 font-bold uppercase">TEAM PLAY</h3>
                <ul className="text-sm">
                  <li className="flex min-h-[46px] items-center justify-between border-b bg-white px-5">
                    <p>Appearances</p>
                    <p className="font-bold">{player.appearances}</p>
                  </li>
                  <li className="flex min-h-[46px] items-center justify-between border-b bg-white px-5">
                    <p>Distance</p>
                    <p className="font-bold">{player.distance}</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 font-bold uppercase">ATTACK</h3>
                <ul className="text-sm">
                  <li className="flex min-h-[46px] items-center justify-between border-b bg-white px-5">
                    <p>Goals</p>
                    <p className="font-bold">{player.goals}</p>
                  </li>
                  <li className="flex min-h-[46px] items-center justify-between border-b bg-white px-5">
                    <p>Assists</p>
                    <p className="font-bold">{player.assists}</p>
                  </li>
                  <li className="flex min-h-[46px] items-center justify-between border-b bg-white px-5">
                    <p>Penalties</p>
                    <p className="font-bold">{player.penalties}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="flex justify-center">
            <div className="w-full max-w-screen-sm">
              <h2 className="mb-4 text-center text-3xl font-bold uppercase">
                {player.name} CAREER
              </h2>
              <ul className="text-sm">
                <li className="flex min-h-[46px] items-center justify-between border-b bg-white px-5">
                  <p>Appearances</p>
                  <p className="font-bold">{player.appearances}</p>
                </li>
                <li className="flex min-h-[46px] items-center justify-between border-b bg-white px-5">
                  <p>Goals</p>
                  <p className="font-bold">{player.goals}</p>
                </li>
                <li className="flex min-h-[46px] items-center justify-between border-b bg-white px-5">
                  <p>Assists</p>
                  <p className="font-bold">{player.assists}</p>
                </li>
                <li className="flex min-h-[46px] items-center justify-between border-b bg-white px-5">
                  <p>Ball actions</p>
                  <p className="font-bold">{player.ball_actions}</p>
                </li>
                <li className="flex min-h-[46px] items-center justify-between border-b bg-white px-5">
                  <p>Distance (km)</p>
                  <p className="font-bold">{player.distance}</p>
                </li>
                <li className="flex min-h-[46px] items-center justify-between border-b bg-white px-5">
                  <p>Penalties</p>
                  <p className="font-bold">{player.penalties}</p>
                </li>
              </ul>
              <div className="mt-10 flex flex-col gap-y-5">
                <div>
                  <h3 className="mb-1 font-bold uppercase">
                    MANUEL NEUER HISTORY
                  </h3>
                  <p>{player.player_history}</p>
                </div>
                <div>
                  <h3 className="mb-1 font-bold uppercase">CURRENT SEASON</h3>
                  <p>{player.current_season}</p>
                </div>
                <div>
                  <h3 className="mb-1 font-bold uppercase">LAST GAME</h3>
                  <p>{player.last_game}</p>
                </div>
                <div>
                  <h3 className="mb-1 font-bold uppercase">
                    BUNDESLIGA CAREER AND RECORDS
                  </h3>
                  <p>{player.career_records}</p>
                </div>
                <div>
                  <h3 className="mb-1 font-bold uppercase">
                    INTERNATIONAL APPOINTMENTS
                  </h3>
                  <p>{player.int_appointments}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <LastArticles articles={articles} />
    </>
  );
};
