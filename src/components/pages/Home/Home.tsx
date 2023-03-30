import { BasketballIcon } from "@/src/assets/imgs/icons";
import { IHomePageData } from "@/src/interfaces/home-page.interface";
import Link from "next/link";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Articles, Container, SwiperButton } from "../../ui";

export const Home = ({ articles, lastArticle, clubs }: IHomePageData) => {
  return (
    <>
      <section>
        <Container>
          <div>
            <div className="relative min-h-[500px] bg-gray-500 shadow-lg">
              <div className="absolute bottom-0 left-0 z-10 w-full bg-white px-5 py-7">
                <h2 className="mb-4 text-2xl font-bold">{lastArticle.title}</h2>
                <p className="text-sm text-gray-600">
                  {lastArticle.short_description}
                </p>
              </div>
              <Link
                href={`/news/${lastArticle.id}`}
                className="absolute top-0 left-0 z-20 h-full w-full text-[0] leading-none"
              >
                {lastArticle.title}
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-7">
        <Container>
          <div className="grid grid-cols-[min-content_1fr] gap-x-20 bg-white px-5 py-7 shadow-lg">
            <p className="flex flex-col text-xs uppercase">
              <span>OFFICIAL</span>
              <span className="font-bold">PARTNERS</span>
              <span>OF&nbsp;THE&nbsp;BUNDESLIGA</span>
            </p>
            <div className="flex items-center justify-between">
              <Link href="#">
                <BasketballIcon className="h-8 w-full" />
              </Link>
              <Link href="#">
                <BasketballIcon className="h-8 w-full" />
              </Link>
              <Link href="#">
                <BasketballIcon className="h-8 w-full" />
              </Link>
              <Link href="#">
                <BasketballIcon className="h-8 w-full" />
              </Link>
              <Link href="#">
                <BasketballIcon className="h-8 w-full" />
              </Link>
              <Link href="#">
                <BasketballIcon className="h-8 w-full" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="mt-14">
        <Container>
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-bold">CLUBS</h2>
              <Link href="/clubs" className="text-sm font-bold uppercase">
                All Clubs
              </Link>
            </div>
            <div className="my-swaper-wrapper relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={7}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                {clubs.map((club) => (
                  <SwiperSlide key={club.id}>
                    <Link
                      href={`/clubs/${club.id}`}
                      className="flex h-[114px] w-[100px] flex-col items-center justify-between bg-white py-5"
                    >
                      <div
                        style={{ backgroundColor: club.color }}
                        className="inline-block h-10 w-10 rounded-full"
                      ></div>
                      <p>{club.short_name}</p>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
              <SwiperButton className="swiper-button-prev" />
              <SwiperButton className="swiper-button-next" />
            </div>
          </div>
        </Container>
      </section>
      <Articles articles={articles} />
    </>
  );
};
