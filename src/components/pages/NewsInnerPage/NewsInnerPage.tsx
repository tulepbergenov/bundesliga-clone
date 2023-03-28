import {
  CopyIcon,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
} from "@/src/assets/imgs/icons";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { Container, LastArticles } from "../../ui";
import { INewsInnerPage } from "./NewsInnerPage.interface";

export const NewsInnerPage = ({ article, lastNews }: INewsInnerPage) => {
  const handleCopyToClipboard = async () => {
    await window.navigator.clipboard.writeText(window.location.href);
    toast("⚽Text copied:)");
  };

  return (
    <>
      <section>
        <Container>
          <div className="bg-white py-10 px-20">
            <p className="mb-5 text-xs uppercase text-red-500">Bundesliga</p>
            <h1 className="mb-4 text-4xl font-black">{article.title}</h1>
            <p className="mb-5 text-xs uppercase text-gray-400">2 day ago</p>
            <div className="mb-20 min-h-[600px] w-[calc(100%+160px)] -translate-x-[80px] bg-red-500"></div>
            <ul className="mb-10 flex items-center justify-center gap-x-3">
              <li>
                <Link
                  href="#facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2d4474] text-white transition-colors duration-300 ease-in-out hover:bg-[#3b5a99]"
                >
                  <FacebookIcon className="h-6 w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="#twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#019fe9] text-white transition-colors duration-300 ease-in-out hover:bg-[#1fb7fe]"
                >
                  <TwitterIcon className="h-6 w-full" />
                </Link>
              </li>
              <li>
                <Link
                  href="#mailto:email@gmail.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 transition-colors duration-300 ease-in-out hover:bg-gray-200"
                >
                  <EmailIcon className="h-6 w-full" />
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleCopyToClipboard}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300 align-middle transition-colors duration-300 ease-in-out hover:bg-gray-200"
                >
                  <CopyIcon className="h-6 w-full" />
                </button>
              </li>
            </ul>
            <h2 className="mb-5 font-bold">{article.short_description}</h2>
            <div className="pb-20">
              <p>{article.long_description}</p>
            </div>
          </div>
        </Container>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <LastArticles articles={lastNews} />
    </>
  );
};
