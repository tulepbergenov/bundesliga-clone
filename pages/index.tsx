import { newsService } from "@/src/api";
import { Home } from "@/src/components/pages";
import { IHomePageData } from "@/src/interface/home-page.interface";
import type { GetStaticProps, NextPage } from "next";

const HomePage: NextPage<IHomePageData> = ({ articles }) => {
  return <Home articles={articles} />;
};

export const getStaticProps: GetStaticProps<IHomePageData> = async () => {
  const articleData = await newsService.getNews();

  return {
    props: {
      articles: articleData.data.data,
    },
    revalidate: 60,
  };
};

export default HomePage;
