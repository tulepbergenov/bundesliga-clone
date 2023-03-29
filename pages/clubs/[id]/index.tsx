import { clubService } from "@/src/api";
import { Club } from "@/src/components/pages";
import { IClubData } from "@/src/interface";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ClubPage: NextPage<IClubData> = ({ club }) => {
  return <Club club={club} />;
};

// interface Params extends ParsedUrlQuery {
//   id: string;
// }

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
    const clubResponse = await clubService.getClub(Number(params?.id));

    return {
      props: {
        ...(await serverSideTranslations(locale ?? "en", ["common", "header"])),
        club: clubResponse.data.data,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      notFound: true,
    };
  }
};

export default ClubPage;
