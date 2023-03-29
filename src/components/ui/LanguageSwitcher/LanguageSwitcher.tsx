import { ArrowBottomIcon } from "@/src/assets/imgs/icons";
import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { ILanguageSwitcher } from "./LanguageSwitcher.interface";

export const LanguageSwitcher = ({ className }: ILanguageSwitcher) => {
  const { locale, locales, push } = useRouter();
  const router = useRouter();

  if (locales) {
    return (
      <div className={className}>
        <Menu as="div" className={classNames("relative", className)}>
          {({ open }) => (
            <>
              <Menu.Button
                as="button"
                type="button"
                className={classNames(
                  "relative grid w-52 grid-cols-[1fr_1.2rem] items-center border-b border-b-gray-400 px-4 py-3 text-start text-base capitalize before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gray-50 before:opacity-0 before:transition-opacity before:duration-300 before:ease-in-out before:content-[''] hover:before:opacity-25",
                  {
                    ["before:opacity-25"]: open,
                  }
                )}
              >
                <span>
                  {locale === "ru" && "Russian"}
                  {locale === "en" && "English"}
                </span>
                <ArrowBottomIcon
                  className={classNames(
                    "h-auto w-full transition-transform duration-300 ease-in-out",
                    {
                      ["rotate-180"]: open,
                    }
                  )}
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  as="ul"
                  className="absolute bottom-[calc(100%+0.5rem)] left-0 z-10 w-full bg-white text-gray-900 shadow-md"
                >
                  {locales.map((l) => (
                    <Menu.Item key={l} value={l} as="li">
                      {({ active, close }) => (
                        <Link
                          href={router.asPath}
                          locale={l}
                          onClick={close}
                          className={classNames(
                            "relative inline-block w-full px-4 py-3 text-start capitalize transition-colors duration-300 ease-in-out",
                            {
                              ["text-red-500"]: locale === l,
                              ["bg-gray-200"]: active,
                            }
                          )}
                        >
                          {l === "ru" && "Russian"}
                          {l === "en" && "English"}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    );
  }

  return null;
};
