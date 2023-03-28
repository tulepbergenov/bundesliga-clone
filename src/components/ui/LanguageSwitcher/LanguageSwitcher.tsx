import { useState } from "react";
import { Select } from "../Select";
import { ILanguageSwitcher } from "./LanguageSwitcher.interface";

const LANGS = ["English", "Russian"];

export const LanguageSwitcher = ({ className }: ILanguageSwitcher) => {
  const [selectedLanguage, setSelectedLanguage] = useState(LANGS[0]);

  return (
    <Select
      items={LANGS}
      value={selectedLanguage}
      onChange={setSelectedLanguage}
      className={className}
    />
  );
};
