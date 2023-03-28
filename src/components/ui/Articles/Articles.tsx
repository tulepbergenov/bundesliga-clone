import classNames from "classnames";
import lodash from "lodash";
import { useState } from "react";
import { Article } from "../Article/Article";
import { Button } from "../Button";
import { Container } from "../Container";
import { IArticles } from "./Articles.interface";

export const Articles = ({ articles }: IArticles) => {
  const chunkedArticles = lodash.chunk(articles, 3);
  const [visibleArticles, setVisibleArticles] = useState(1);

  const loadMore = () => {
    setVisibleArticles(visibleArticles + 1);
  };

  const sliceArticles = chunkedArticles.slice(0, visibleArticles).flat();

  return (
    <section className="mt-20">
      <Container>
        <div className="flex flex-col items-center gap-y-6">
          <article className="mb-12 grid grid-cols-3 gap-6">
            {articles.length > 0 ? (
              <>
                {sliceArticles.map((article) => (
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
          <Button
            type="button"
            onClick={loadMore}
            className={classNames({
              ["hidden"]: sliceArticles.length === articles.length,
            })}
          >
            Load more
          </Button>
        </div>
      </Container>
    </section>
  );
};
