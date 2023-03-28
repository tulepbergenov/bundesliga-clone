import { FOOTER_LINKS } from "@/src/constants";
import Link from "next/link";
import { Container } from "../Container";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const Footer = () => {
  return (
    <footer className="text-sm">
      <div className="border-t border-t-gray-300 bg-white">
        <Container width="xl">
          <ul className="flex items-center justify-between py-6 px-16">
            {FOOTER_LINKS.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.pathname}
                  className="inline-block capitalize transition-colors duration-300 ease-in-out hover:text-red-500"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <div className="bg-gray-900 text-gray-400">
        <Container>
          <div className="flex items-center justify-between py-10">
            <p>&copy;&nbsp;2023&nbsp;DFL Deutsche Fu&szlig;ball Liga GmbH</p>
            <div className="flex items-center gap-x-3">
              <p>Choose language</p>
              <LanguageSwitcher />
            </div>
            <div className="flex items-center gap-x-2">
              <p>Display Mode</p>
              <ThemeSwitcher />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
