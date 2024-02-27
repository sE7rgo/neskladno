import React, { useEffect, useState } from "react";
import { fourLetters } from "../../assets/ua";
import { useTimer } from "../../utils/hooks/useTimer";

// import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { getRandomInt } from "../../utils/getRandomIntr";

// const appId = '<INSERT_SPEECHLY_APP_ID_HERE>';
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

function Main() {
  const [word, setWord] = useState<string | null>(fourLetters[0]);
  const { hours, minutes, seconds } = useTimer();
  const length = fourLetters.length;

  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
    resetTranscript,
    interimTranscript
  } = useSpeechRecognition();
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: false, language: "uk" });

  useEffect(() => {
    if (!transcript.length) return;
    const formattedTranscription = transcript.toLowerCase();
    console.log("wdwdwd", "чкск".localeCompare("Чкск"));
    if (word?.localeCompare(formattedTranscription) === 0) {
      console.log("correct", word, transcript, word?.toLowerCase === transcript.toLowerCase);
    } else {
      console.log(
        "not correct",
        word,
        transcript,
        word?.localeCompare(formattedTranscription) === 0
      );
    }
    // // TODO: check for int already used
    const index = getRandomInt(1, length);
    setWord(fourLetters[index].toLowerCase());
  }, [transcript]);

  useEffect(() => {
    console.log(transcript.length);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div className="flex h-full w-2/4 flex-col items-center justify-center">
      <p>{word}</p>

      <div>
        <p>Microphone: {listening ? "on" : "off"}</p>
        <button
          onTouchStart={startListening}
          onMouseDown={startListening}
          onTouchEnd={SpeechRecognition.stopListening}
          onMouseUp={SpeechRecognition.stopListening}
        >
          Hold to talk
        </button>
        <p>{transcript}</p>
      </div>
      <p>{`${hours}h ${minutes}m ${seconds}s`}</p>
    </div>
  );
}

export default Main;
