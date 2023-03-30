import { ArrowBottomIcon, SolidArrowDownIcon } from "@/src/assets/imgs/icons";
import { IClub, IFootballer } from "@/src/interfaces";
import { Disclosure, Listbox, Transition } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Container } from "../../ui";
import { IPlayers } from "./Players.interface";

const PlayerList = ({
  clubId,
  players,
}: {
  clubId: number;
  players: IFootballer[];
}) => {
  const filterPlayers =
    players.length > 0
      ? players.filter((player) => player.club_id === clubId)
      : players;

  return (
    <Transition
      as={Fragment}
      enter="transition duration-200 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-200 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Disclosure.Panel>
        {filterPlayers.length > 0 ? (
          <ul className="mt-10 grid grid-cols-3 gap-3">
            {filterPlayers.map((player) => (
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
          <p className="mt-3 text-center">No Players</p>
        )}
      </Disclosure.Panel>
    </Transition>
  );
};

export const Players = ({ clubs, players }: IPlayers) => {
  const [allClubs, setAllClubs] = useState<IClub[]>(clubs);
  const [allPlayers, setAllPlayers] = useState<IFootballer[]>(players);
  const [selectedClub, setSelectedClub] = useState<IClub>(allClubs[0]);

  const handleScrollToClub = (id: number) => {
    if (id) {
      const el = document.getElementById(`club-${id}`);
      if (el) {
        el.scrollIntoView();
      }
    }
  };

  return (
    <>
      <section>
        <Container>
          <div className="flex items-center justify-between pt-10">
            <h1 className="text-5xl font-black">
              All players of the Bundesliga
            </h1>
            <Listbox
              value={selectedClub}
              onChange={setSelectedClub}
              as="div"
              className="relative"
            >
              {({ open }) => (
                <>
                  <Listbox.Button
                    type="button"
                    className={classNames(
                      "relative grid w-52 grid-cols-[1fr_1.2rem] items-center border-b border-b-gray-400 px-4 py-3 text-start text-base capitalize before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gray-50 before:opacity-0 before:transition-opacity before:duration-300 before:ease-in-out before:content-[''] hover:before:opacity-25",
                      {
                        ["before:opacity-25"]: open,
                      }
                    )}
                  >
                    <span>{selectedClub.name}</span>
                    <ArrowBottomIcon
                      className={classNames(
                        "h-auto w-full transition-transform duration-300 ease-in-out",
                        {
                          ["rotate-180"]: open,
                        }
                      )}
                    />
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Listbox.Options
                      as="ul"
                      className="absolute z-10 w-full translate-y-[-10px] bg-white text-gray-900 shadow-md"
                    >
                      {allClubs.map((item) => (
                        <Listbox.Option key={item.id} value={item} as="li">
                          {({ active, selected }) => (
                            <button
                              type="button"
                              onClick={() => handleScrollToClub(item.id)}
                              className={classNames(
                                "relative inline-block w-full px-4 py-3 text-start capitalize transition-colors duration-300 ease-in-out",
                                {
                                  ["text-red-500"]: selected,
                                  ["bg-gray-200"]: active,
                                }
                              )}
                            >
                              {item.name}
                            </button>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </>
              )}
            </Listbox>
          </div>
        </Container>
      </section>
      <section className="mt-20">
        <Container>
          <div>
            <div className="flex w-full flex-col">
              {allClubs.map((club) => (
                <Disclosure
                  id={`club-${club.id}`}
                  key={club.id}
                  as="div"
                  className="mb-10 w-full"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        as="button"
                        type="button"
                        className="flex w-full items-center justify-between border-b border-b-gray-300 p-3 text-start"
                      >
                        <span className="flex items-center gap-x-2">
                          <span
                            style={{ backgroundColor: club.color }}
                            className="inline-block h-[35px] w-[35px] rounded-full"
                          ></span>
                          <span>{club.name}</span>
                        </span>
                        <SolidArrowDownIcon
                          className={classNames(
                            "h-full w-[16px] transition-transform duration-300 ease-in-out",
                            {
                              ["rotate-180"]: open,
                            }
                          )}
                        />
                      </Disclosure.Button>
                      <PlayerList clubId={club.id} players={allPlayers} />
                    </>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
