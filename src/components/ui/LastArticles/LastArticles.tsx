import { Article } from "../Article";
import { Container } from "../Container";
import { ILastArticles } from "./LastArticles.interface";

export const LastArticles = ({ articles }: ILastArticles) => {
  return (
    <section className="mt-12">
      <Container>
        <div>
          <h2 className="mb-7 text-2xl font-bold">Related news</h2>
          <article className="mb-12 grid grid-cols-3 gap-6">
            {articles.length > 0 ? (
              <>
                {articles.map((article) => (
                  <Article
                    key={article.id}
                    id={article.id}
                    title={article.title}
                    body={article.short_description}
                  />
                ))}
              </>
            ) : (
              <p>News is missing</p>
            )}
          </article>
        </div>
      </Container>
    </section>
  );
};
