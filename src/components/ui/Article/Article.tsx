import { IArticle } from "./Article.interface";

export const Article = ({ title, body }: IArticle) => {
  return (
    <article>
      <header>
        <div className="h-[200px] bg-gray-200"></div>
        <p>{title}</p>
      </header>
      <main>
        <p>{body}</p>
      </main>
      <footer>
        <time>18 hours ago</time>
      </footer>
    </article>
  );
};
