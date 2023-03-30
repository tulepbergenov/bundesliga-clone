import { clubService, newsService } from "@/src/api";
import { Home } from "@/src/components/pages";
import { IHomePageData } from "@/src/interfaces/home-page.interface";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage: NextPage<IHomePageData> = ({
  articles,
  lastArticle,
  clubs,
}) => {
  return <Home articles={articles} lastArticle={lastArticle} clubs={clubs} />;
};

export const getStaticProps: GetStaticProps<IHomePageData> = async ({
  locale,
}) => {
  try {
    const articleData = await newsService.getNews();
    const clubsData = await clubService.getClubs();
    const reverseNews = articleData.data.data.reverse();
    const lastArticle = reverseNews[0];

    return {
      props: {
        ...(await serverSideTranslations(locale ?? "en", ["common", "header"])),
        articles: articleData.data.data,
        lastArticle: lastArticle,
        clubs: clubsData.data.data,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default HomePage;
