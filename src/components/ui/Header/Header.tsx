import {
  BasketballIcon,
  ThinArrowUpRightIcon,
  UserIcon,
} from "@/src/assets/imgs/icons";
import { HEADER_NAV_LINKS } from "@/src/constants";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container } from "../Container";

export const Header = () => {
  const router = useRouter();

  useEffect(() => {
    const root = window.document.documentElement;
    const header = window.document.getElementById("header");
    const headerTop = window.document.getElementById("header-top");
    const headerTopHeight = headerTop?.offsetHeight;
    root.style.setProperty("--header-top-height", `${headerTopHeight}px`);
    let lastScroll = 0;

    const stickyHeader = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 0) {
        if (header) {
          header.dataset.sticky = "false";
        }
      }

      if (currentScroll > lastScroll && header?.dataset.sticky !== "true") {
        if (header) {
          header.dataset.sticky = "true";
        }
      }

      if (currentScroll < lastScroll && header?.dataset.sticky !== "false") {
        if (header) {
          header.dataset.sticky = "false";
        }
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", stickyHeader);

    return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  return (
    <header id="header">
      <div id="header-top" className="border-b bg-white text-xs">
        <Container width="xl">
          <div className="flex items-center justify-between py-3">
            <ul className="flex items-center gap-x-7 font-bold">
              <li>
                <Link
                  href="#"
                  className="relative flex items-end gap-x-1 leading-none text-gray-900 before:absolute before:-bottom-1 before:left-0 before:h-px before:w-full before:bg-gray-900"
                >
                  <BasketballIcon className="h-auto w-4" />
                  <span>BL</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-end gap-x-1 leading-none transition-colors duration-300 ease-in-out hover:text-gray-900"
                >
                  <BasketballIcon className="h-auto w-4" />
                  <span>BL2</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-end gap-x-1 leading-none transition-colors duration-300 ease-in-out hover:text-gray-900"
                >
                  <BasketballIcon className="h-auto w-4" />
                  <span>VBL</span>
                </Link>
              </li>
            </ul>
            <ul className="flex items-center gap-x-3">
              <li>
                <Link
                  href="#"
                  className="transition-colors duration-300 ease-in-out hover:text-gray-900"
                >
                  <span>Broadcasters</span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-x-1 transition-colors duration-300 ease-in-out hover:text-gray-900"
                >
                  <span>Fantasy Manager</span>
                  <ThinArrowUpRightIcon />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center gap-x-1 transition-colors duration-300 ease-in-out hover:text-gray-900"
                >
                  <span>DFL</span>
                  <ThinArrowUpRightIcon />
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="bg-white">
        <Container width="xl">
          <div className="flex items-center justify-between py-3">
            <Link
              href="/"
              className="grid grid-cols-[1.4rem_1fr] items-center gap-x-2 py-1"
            >
              <BasketballIcon className="h-auto w-full text-red-500" />
              <p className="text-2xl font-bold uppercase leading-none text-gray-900">
                Bundesliga
              </p>
            </Link>
            <nav>
              <ul className="flex items-center gap-x-3 text-sm">
                {HEADER_NAV_LINKS.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.pathname}
                      className={classNames(
                        "relative inline-block transition-colors duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:h-px before:w-full before:bg-gray-900 before:transition-opacity before:duration-300 before:ease-in-out before:content-[''] hover:text-gray-900",
                        {
                          ["before:opacity-0"]:
                            router.pathname !== link.pathname,
                          ["text-gray-900"]: router.pathname === link.pathname,
                        }
                      )}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              href="https://bundesliga-clone-admin.vercel.app/"
              className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-500"
            >
              <UserIcon className="h-auto w-4" />
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
};
