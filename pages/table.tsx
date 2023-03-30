import { clubService, newsService } from "@/src/api";
import { Table } from "@/src/components/pages";
import { ITablePage } from "@/src/interface";
import type { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const TablePage: NextPage<ITablePage> = ({ clubs, articles }) => {
  return <Table clubs={clubs} articles={articles} />;
};

export const getStaticProps: GetStaticProps<ITablePage> = async ({
  locale,
}) => {
  try {

  const res = await clubService.getClubs();
  const articleData = await newsService.getNews();

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common", "header"])),
      clubs: res.data.data,
      articles: articleData.data.data,
    },
    revalidate: 60,
  };
  } catch (error) {
    return {
      notFound:true
    }
  }
};

export default TablePage;
