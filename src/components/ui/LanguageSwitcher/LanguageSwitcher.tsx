import Link from "next/link";
import { useRouter } from "next/router";
import { ILanguageSwitcher } from "./LanguageSwitcher.interface";

export const LanguageSwitcher = ({ className }: ILanguageSwitcher) => {
  const { locale, locales, push } = useRouter();

  const handleClick = (l: any) => () => {
    push("/", undefined, { locale: l });
  };

  if (locales) {
    return (
      <div className={className}>
        {locales.map((l) => (
          <Link href="/" key={l} locale={l}>
            {l}
          </Link>
        ))}
      </div>
    );
  }

  return null;
};
