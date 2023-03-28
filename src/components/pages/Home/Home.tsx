import { IHomePageData } from "@/src/interface/home-page.interface";
import { Articles } from "../../ui";

export const Home = ({ articles }: IHomePageData) => {
  return (
    <>
      <section>
        <h1>Home Page</h1>
      </section>
      <Articles articles={articles} />
    </>
  );
};
