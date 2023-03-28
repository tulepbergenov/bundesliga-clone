import { SolidArrowDownIcon } from "@/src/assets/imgs/icons";
import { useRouter } from "next/router";
import { Articles, Container, Heading } from "../../ui";
import { ITable } from "./Table.interface";

export const Table = ({ clubs, articles }: ITable) => {
  const router = useRouter();

  const handleToClub = (id: number) => {
    router.push(`/clubs/${id}`);
  };

  return (
    <>
      <section>
        <Container>
          <div>
            <Heading as="h1">Table</Heading>
            <div>
              {clubs.length > 0 ? (
                <div className="overflow-hidden text-end text-sm text-gray-500">
                  <table className="w-full table-auto">
                    <thead className="text-xs">
                      <tr>
                        <th className="pb-3"></th>
                        <th className="pb-3"></th>
                        <th className="pb-3 font-normal">Matches</th>
                        <th className="pb-3 font-normal">W</th>
                        <th className="pb-3 font-normal">D</th>
                        <th className="pb-3 font-normal">L</th>
                        <th className="pb-3 font-normal">Goals</th>
                        <th className="pb-3 font-normal">+/-</th>
                        <th className="pb-3 font-normal">Points</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {clubs.map((club) => (
                        <tr
                          key={club.id}
                          onClick={() => handleToClub(club.id)}
                          className="cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-200"
                        >
                          <td className="relative py-3 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-blue-500">
                            <div className="relative flex items-center pl-8">
                              <p>{club.id}</p>
                              <SolidArrowDownIcon className="ml-2 rotate-180 text-green-500" />
                            </div>
                          </td>
                          <td className="py-3">
                            <div className="flex items-center gap-x-2">
                              <div
                                className="inline-block h-7 w-7 rounded-full"
                                style={{
                                  backgroundColor: club.color,
                                }}
                              ></div>
                              <p>{club.name}</p>
                            </div>
                          </td>
                          <td className="py-3 text-gray-900">
                            {Number(club.win) +
                              Number(club.draw) +
                              Number(club.lose)}
                          </td>
                          <td>{club.win}</td>
                          <td>{club.draw}</td>
                          <td>{club.lose}</td>
                          <td>55:31</td>
                          <td>+24</td>
                          <td className="pr-3">53</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="grid grid-cols-2 gap-x-16 bg-white py-10 px-8 text-start text-xs">
                    <div>
                      <p className="mb-8 font-bold uppercase text-gray-900">
                        QUALIFICATION / RELEGATION
                      </p>
                      <ul className="flex max-w-[400px] flex-wrap items-center gap-y-6 gap-x-4">
                        <li className="relative inline-block py-1 pl-4 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-green-500 before:content-['']">
                          UEFA Champions League
                        </li>
                        <li className="relative inline-block py-1 pl-4 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-blue-500 before:content-['']">
                          UEFA Europa League
                        </li>
                        <li className="relative inline-block py-1 pl-4 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-blue-500 before:content-['']">
                          UEFA Europa Conference League
                        </li>
                        <li className="relative inline-block py-1 pl-4 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-orange-500 before:content-['']">
                          Play-offs
                        </li>
                        <li className="relative inline-block py-1 pl-4 before:absolute before:top-0 before:left-0 before:h-full before:w-1 before:bg-red-500 before:content-['']">
                          Relegation
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-8 font-bold uppercase text-gray-900">
                        Legend
                      </p>
                      <div className="grid grid-cols-2">
                        <ul>
                          <li>M Matches</li>
                          <li>W Won</li>
                          <li>D Draw</li>
                          <li>L Lost</li>
                        </ul>
                        <ul>
                          <li>+/- Goal Difference</li>
                          <li>P Points</li>
                          <li>G Goals</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>No clubs</p>
              )}
            </div>
          </div>
        </Container>
      </section>
      <Articles articles={articles} />
    </>
  );
};
