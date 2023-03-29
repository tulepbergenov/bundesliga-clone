import { clubService } from "@/src/api";
import { Clubs } from "@/src/components/pages";
import { IClubs } from "@/src/interface";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ClubsPage: NextPage<IClubs> = ({ clubs }) => {
  return <Clubs clubs={clubs} />;
};

export const getStaticProps: GetStaticProps<IClubs> = async ({ locale }) => {
  const res = await clubService.getClubs();

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common", "header"])),
      clubs: res.data.data,
    },
    revalidate: 60,
  };
};

export default ClubsPage;
