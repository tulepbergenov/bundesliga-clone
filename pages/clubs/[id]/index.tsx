import { clubService } from "@/src/api";
import { Club } from "@/src/components/pages";
import { IClubData } from "@/src/interface";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

const ClubPage: NextPage<IClubData> = ({ club }) => {
  return <Club club={club} />;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await clubService.getClubs();

  const paths = res.data.data.map((path) => ({
    params: {
      id: path.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IClubData> = async ({ params }) => {
  const club = await clubService.getClub(Number(params?.id));

  return {
    props: {
      club: club.data.data,
    },
  };
};

export default ClubPage;
