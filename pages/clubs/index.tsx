import { clubService } from "@/src/api";
import { IClubs } from "@/src/interface";
import { Clubs } from "@/src/pages";
import type { GetStaticProps, NextPage } from "next";

const ClubsPage: NextPage<IClubs> = ({ clubs }) => {
  return <Clubs clubs={clubs} />;
};

export const getStaticProps: GetStaticProps<IClubs> = async () => {
  const res = await clubService.getClubs();

  return {
    props: {
      clubs: res.data.data,
    },
    revalidate: 60,
  };
};

export default ClubsPage;
