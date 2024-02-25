import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AppDataContext } from "../context/AppDataContext";

export const useTimer = (): { hours: number; minutes: number; seconds: number } => {
  const navigate = useNavigate();

  const appDataContext = useContext(AppDataContext);

  const link = appDataContext.link;
  // Duration in mins
  const duration = appDataContext.duration;

  // Initial time in seconds
  const initialTime = duration * 60;

  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          link ? navigate(link) : console.log("complete");
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []); // The empty dependency array ensures the effect runs only once on mount

  // Convert seconds to hours, minutes, and seconds
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;
  return { hours, minutes, seconds };
};
