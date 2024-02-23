import React from "react";
import { useTranslation } from "react-i18next";

function Welcome() {
  const { t } = useTranslation();
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-slate-800 dark:text-slate-200">{t("welcomePlaceholder")}</h1>
      <div className="flex">
        <h1 className="text-slate-800 dark:text-slate-200">{t("increaseTimerMessage")}</h1>
        <button>
          <h1 className="text-sky-400	 dark:text-amber-300">{30}</h1>
        </button>
      </div>
    </div>
  );
}

export default Welcome;
