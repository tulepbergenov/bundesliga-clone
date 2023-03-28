import { Heading } from "@/src/components/ui";
import Link from "next/link";
import { IClubs } from "./Clubs.interface";

export const Clubs = ({ clubs }: IClubs) => {
  return (
    <section>
      <div className="container lg:max-w-screen-lg">
        <div>
          <Heading as="h1">Clubs</Heading>
          <p className="mb-4 font-bold uppercase">SEASON 2022-2023</p>
          <ul className="grid grid-cols-3 gap-x-8 gap-y-6">
            {clubs.map((club) => (
              <li key={club.id}>
                <Link
                  href={`/clubs/${club.id}`}
                  className="grid w-full grid-cols-[60px_1fr] items-center gap-x-5 bg-white py-5 px-8 shadow-md transition-colors duration-300 ease-in-out hover:bg-gray-200"
                >
                  <div
                    className="row-span-2 h-[60px] w-full rounded-full"
                    style={{
                      backgroundColor: club.color,
                    }}
                  ></div>
                  <h2 className="text-xl font-bold">{club.name}</h2>
                  <p className="text-xs text-gray-400">{club.stadium}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
