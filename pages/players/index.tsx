import { clubService, footballerService } from "@/src/api";
import { Players } from "@/src/components/pages";
import { IPlayers } from "@/src/components/pages/Players/Players.interface";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

const PlayersPage: NextPage<IPlayers> = ({ clubs, players }) => {
  return (
    <>
      <Head>
        <title>Players | Bundesliga</title>
      </Head>
      <Players clubs={clubs} players={players} />
    </>
  );
};

export const getStaticProps: GetStaticProps<IPlayers> = async ({ locale }) => {
  try {
    const playersResponse = await footballerService.getFootballers();
    const clubsResponse = await clubService.getClubs();

    return {
      props: {
        ...(await serverSideTranslations(locale ?? "en", ["common", "header"])),
        players: playersResponse.data.data,
        clubs: clubsResponse.data.data,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default PlayersPage;
