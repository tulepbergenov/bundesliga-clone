import { BasketballIcon } from "@/src/assets/imgs/icons";
import Link from "next/link";
import { Articles, Container } from "../../ui";
import { IClubPage } from "./Club.interface";

export const Club = ({ club, players, articles }: IClubPage) => {
  return (
    <>
      <section
        style={{
          backgroundColor: club.color,
        }}
        className="min-h-[240px]"
      >
        <Container>
          <div className="pt-14">
            <div className="flex items-center">
              <div
                style={{ backgroundColor: club.color }}
                className="mr-10 flex h-[100px] w-[100px] items-center justify-center rounded-full border-[3px] border-white"
              >
                <p className="font-bold text-white">{club.short_name}</p>
              </div>
              <div className="text-white">
                <h1 className="mb-1 text-4xl font-bold">{club.name}</h1>
                <div className="flex items-center gap-x-3 text-sm">
                  <BasketballIcon />
                  <p>{club.stadium}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-14">
        <Container>
          <div>
            <h2 className="mb-10 text-center text-3xl font-bold uppercase">
              Players {club.name}
            </h2>
            {players.length > 0 ? (
              <ul className="grid grid-cols-3 gap-3">
                {players.map((player) => (
                  <li key={player.id}>
                    <Link
                      href={`/players/${player.id}`}
                      className="flex min-h-[64px] w-full items-center justify-between bg-white p-3 shadow transition-shadow duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="flex items-center gap-x-3 text-sm">
                        <div className="inline-block h-[48px] w-[48px] rounded-full bg-gray-500"></div>
                        <p className="text-gray-400">{player.goals}</p>
                        <p>{player.name}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No Players</p>
            )}
          </div>
        </Container>
      </section>
      <Articles articles={articles} />
    </>
  );
};
