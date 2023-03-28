import { Container } from "../../ui";
import { IClubPage } from "./Club.interface";

export const Club = ({ club }: IClubPage) => {
  return (
    <section>
      <Container>
        <div>
          <h1>{club.name}</h1>
        </div>
      </Container>
    </section>
  );
};
