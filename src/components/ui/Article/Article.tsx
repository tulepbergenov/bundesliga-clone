import Link from "next/link";
import { IArticle } from "./Article.interface";
import styles from "./Article.module.css";

export const Article = ({ title, body, id }: IArticle) => {
  return (
    <article className="group relative flex flex-col bg-white shadow transition-shadow duration-300 ease-in-out hover:shadow-lg">
      <header>
        <div className="h-[200px] bg-gray-300 transition-colors duration-300 ease-in-out group-hover:bg-gray-400"></div>
        <div className="p-5 pb-2">
          <p className="text-xl font-bold">{title}</p>
        </div>
      </header>
      <main className={styles.body}>
        <p>{body}</p>
      </main>
      <footer className="px-5 pt-7 pb-5 text-xs uppercase text-gray-400">
        <time>18 hours ago</time>
      </footer>
      <Link
        href={`/news/${id}`}
        className="absolute top-0 left-0 h-full w-full text-[0] leading-none"
      >
        {title}
      </Link>
    </article>
  );
};
