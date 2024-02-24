import React, { FC, useContext } from "react";
import { useTranslation } from "react-i18next";
import { AppDataContext, AppDataType, Difficulty } from "../../context/AppDataContext";

interface WelcomeProps {
  duration: AppDataType["duration"];
  difficulty: AppDataType["difficulty"];
  link: AppDataType["link"];
  onDurationClick: () => void;
  onDifficultyClick: () => void;
  onLinkInsert: (link: string) => void;
}

const Welcome: FC<WelcomeProps> = ({
  duration,
  difficulty,
  link,
  onDifficultyClick,
  onDurationClick,
  onLinkInsert
}) => {
  const appDataContext = useContext(AppDataContext);
  console.log("context", appDataContext);
  const { t } = useTranslation();

  const DIFFICULTY_DESCRIPTIONS: Record<Difficulty, string> = {
    0: t("basicDifficulty"),
    1: t("avarageDifficulty"),
    2: t("hardDifficulty"),
    3: t("veryHardDiffiulty"),
    4: t("extremeDifficulty")
  };

  const handleIncreaseDurationClick = () => {
    onDurationClick();
  };
  const handleIncreaseDifficultyClick = () => {
    onDifficultyClick();
  };
  const handleLinkInsert = (link: string) => {
    onLinkInsert(link);
  };
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-slate-800 dark:text-slate-200">{t("welcomePlaceholder")}</h1>
      <div className="flex">
        <h1 className="text-slate-800 dark:text-slate-200">{t("increaseDurationMessage")}</h1>
        <button onClick={handleIncreaseDurationClick}>
          <h1 className="text-sky-400	 dark:text-amber-300">&nbsp;{duration}</h1>
        </button>
      </div>
      <div className="flex">
        <h1 className="text-slate-800 dark:text-slate-200">{t("increaseDifficultyMessage")}</h1>
        <button onClick={handleIncreaseDifficultyClick}>
          <h1 className="text-sky-400	 dark:text-amber-300">
            &nbsp;{DIFFICULTY_DESCRIPTIONS[difficulty]}
          </h1>
        </button>
      </div>
      <div className="flex flex-col">
        <h1 className="text-slate-800 dark:text-slate-200">{t("inputLinkMessage")}</h1>
        <input
          type="text"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="John"
          required
        />

        <button>
          <h1 className="text-sky-400	 dark:text-amber-300">&nbsp;{t("submitButton")}</h1>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
