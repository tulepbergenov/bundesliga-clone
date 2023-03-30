import { clubService, footballerService, newsService } from "@/src/api";
import { Club } from "@/src/components/pages";
import { IClubData } from "@/src/interfaces";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ClubPage: NextPage<IClubData> = ({ club, players, articles }) => {
  return <Club club={club} players={players} articles={articles} />;
};

export const getStaticPaths: any = async ({ locales }: any) => {
  const res = await clubService.getClubs();

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

export const getStaticProps: GetStaticProps<IClubData> = async ({
  params,
  locale,
}) => {
  try {
    const clubId = Number(params?.id);
    const clubResponse = await clubService.getClub(Number(params?.id));
    const playerResponse = await footballerService.getFootballers();
    const articleData = await newsService.getNews();
    const players = playerResponse.data.data;
    const filterPlayers = players.filter((player) => player.club_id === clubId);

    return {
      props: {
        ...(await serverSideTranslations(locale ?? "en", ["common", "header"])),
        club: clubResponse.data.data,
        players: filterPlayers,
        articles: articleData.data.data,
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

export default ClubPage;
