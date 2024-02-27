import React from "react";
import { oneLetter } from "../../assets/ua";
import { useTimer } from "../../hooks/useTimer";

function Main() {
  const { hours, minutes, seconds } = useTimer();
  const length = oneLetter.length;

  return (
    <div className="flex h-full w-2/4 flex-col items-center justify-center">
      <p>{`${hours}h ${minutes}m ${seconds}s`}</p>
    </div>
  );
}

export default Main;
