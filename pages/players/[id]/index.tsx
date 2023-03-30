import { clubService, footballerService, newsService } from "@/src/api";
import { Player } from "@/src/components/pages";
import { IPlayerPageData } from "@/src/interfaces";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const PlayerPage: NextPage<IPlayerPageData> = ({ player, articles, club }) => {
  return <Player player={player} articles={articles} club={club} />;
};

export const getStaticPaths: any = async ({ locales }: any) => {
  const res = await footballerService.getFootballers();

  const paths = res.data.data
    .map((path) =>
      locales?.map((locale: any) => ({
        params: {
          id: path.id.toString(),
        },
        locale,
      }))
    )
    .flat();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPlayerPageData> = async ({
  params,
  locale,
}) => {
  try {
    const playerResponse = await footballerService.getFootballer(
      Number(params?.id)
    );
    const playerClubId = playerResponse.data.data.club_id;
    const clubResponse = await clubService.getClub(playerClubId);
    const newsResponse = await newsService.getNews();

    const articles = newsResponse.data.data;
    articles.reverse();
    const lastNews = articles.slice(0, 3);

    return {
      props: {
        ...(await serverSideTranslations(locale ?? "en", ["common", "header"])),
        player: playerResponse.data.data,
        articles: lastNews,
        club: clubResponse.data.data,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }
};

export default PlayerPage;
