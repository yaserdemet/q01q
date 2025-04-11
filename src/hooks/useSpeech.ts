import { useCallback, useRef } from "react";

type UseSpeechOptions = {
  lang?: string;
  rate?: number;
  pitch?: number;
};

export function useSpeech(options?: UseSpeechOptions) {
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback(
    (text: string) => {
      if (!("speechSynthesis" in window)) {
        console.error("Speech Synthesis not supported in this browser");
        return;
      }

      // Önceki konuşmayı durdur

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = options?.lang ?? "en-US";
      utterance.rate = options?.rate ?? 1;
      utterance.pitch = options?.pitch ?? 1;

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [options?.lang, options?.rate, options?.pitch],
  );

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
  }, []);

  const pause = useCallback(() => {
    window.speechSynthesis.pause();
  }, []);

  const resume = useCallback(() => {
    window.speechSynthesis.resume();
  }, []);

  return {
    speak,
    stop,
    pause,
    resume,
  };
}
