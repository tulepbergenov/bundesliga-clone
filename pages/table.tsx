import { clubService, newsService } from "@/src/api";
import { Table } from "@/src/components/pages";
import { ITablePage } from "@/src/interface";
import type { GetStaticProps, NextPage } from "next";

const TablePage: NextPage<ITablePage> = ({ clubs, articles }) => {
  return <Table clubs={clubs} articles={articles} />;
};

export const getStaticProps: GetStaticProps<ITablePage> = async () => {
  const res = await clubService.getClubs();
  const articleData = await newsService.getNews();

  return {
    props: {
      clubs: res.data.data,
      articles: articleData.data.data,
    },
    revalidate: 60,
  };
};

export default TablePage;
