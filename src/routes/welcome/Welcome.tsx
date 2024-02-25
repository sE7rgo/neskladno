import React, { FC, useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
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
  const { t } = useTranslation();
  const navigate = useNavigate();

  const DIFFICULTY_DESCRIPTIONS: Record<Difficulty, string> = {
    0: t("basic"),
    1: t("basicPlus"),
    2: t("avarage"),
    3: t("hard"),
    4: t("veryHard")
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
  const handleSubmitButton = () => {
    navigate("/game");
  };
  return (
    <div className="flex h-full w-2/4 flex-col items-center justify-center">
      <h1 className="text-slate-800 dark:text-slate-200">{t("welcomePlaceholder")}</h1>
      <div className=" mt-20 flex w-3/5 items-center justify-start">
        <h1 className="text-slate-800 dark:text-slate-200">{t("increaseDurationMessage")}</h1>
        <button onClick={handleIncreaseDurationClick}>
          <h1 className="text-sky-400	 dark:text-amber-300">&nbsp;{duration}</h1>
        </button>
      </div>
      <div className="mt-3 flex w-3/5">
        <h1 className="text-slate-800 dark:text-slate-200">{t("increaseDifficultyMessage")}</h1>
        <button onClick={handleIncreaseDifficultyClick}>
          <h1 className="text-sky-400	 dark:text-amber-300">
            &nbsp;{DIFFICULTY_DESCRIPTIONS[difficulty]}
          </h1>
        </button>
      </div>
      <div className="mt-3 flex w-3/5 flex-col">
        <h1 className="text-slate-800 dark:text-slate-200">{t("insertLinkMessage")}</h1>
        <input
          type="text"
          className=" mt-1 block w-full rounded-lg border border-gray-50 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-900 dark:bg-slate-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder={t("placeholderLinkInput")}
          required
          onChange={event => handleLinkInsert(event.target.value)}
        />

        <button onClick={handleSubmitButton}>
          <h1 className="mt-5	 text-sky-600 dark:text-amber-500">&nbsp;{t("submitButton")}</h1>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
