import { clubService } from "@/src/api";
import { Clubs } from "@/src/components/pages";
import { IClubs } from "@/src/interfaces";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ClubsPage: NextPage<IClubs> = ({ clubs }) => {
  return <Clubs clubs={clubs} />;
};

export const getStaticProps: GetStaticProps<IClubs> = async ({ locale }) => {
  try {
    const res = await clubService.getClubs();

    return {
      props: {
        ...(await serverSideTranslations(locale ?? "en", ["common", "header"])),
        clubs: res.data.data,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default ClubsPage;
