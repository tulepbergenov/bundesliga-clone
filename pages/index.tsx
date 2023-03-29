import { newsService } from "@/src/api";
import { Home } from "@/src/components/pages";
import { IHomePageData } from "@/src/interface/home-page.interface";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage: NextPage<IHomePageData> = ({ articles }) => {
  return <Home articles={articles} />;
};

export const getStaticProps: GetStaticProps<IHomePageData> = async ({
  locale,
}) => {
  const articleData = await newsService.getNews();

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common", "header"])),
      articles: articleData.data.data,
    },
    revalidate: 60,
  };
};

export default HomePage;
