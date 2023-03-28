import { IClubPage } from "./Club.interface";

export const Club = ({ club }: IClubPage) => {
  return (
    <section>
      <div className="container lg:max-w-screen-lg">
        <div>
          <h1>{club.name}</h1>
        </div>
      </div>
    </section>
  );
};
