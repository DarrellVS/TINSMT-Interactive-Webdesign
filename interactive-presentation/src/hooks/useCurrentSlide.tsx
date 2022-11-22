import { useCallback, useEffect, useState } from "react";
import { map } from "../utils/constants";

export default function useCurrentSlide() {
  const [currentSlideIndex, setCurrentSlide] = useState(0);

  useEffect(() => {
    const cachedCurrentSlide = localStorage.getItem("cached_currentSlide");
    if (cachedCurrentSlide) {
      setCurrentSlide(Number(cachedCurrentSlide));
    }
  }, []);

  const incrementCurrentSlide = useCallback(() => {
    if (currentSlideIndex < map.length - 1) {
      setCurrentSlide(currentSlideIndex + 1);
      localStorage.setItem(
        "cached_currentSlide",
        String(currentSlideIndex + 1)
      );
    }
  }, [currentSlideIndex]);

  const decrementCurrentSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlide(currentSlideIndex - 1);
      localStorage.setItem(
        "cached_currentSlide",
        String(currentSlideIndex - 1)
      );
    }
  }, [currentSlideIndex]);

  // Advance slides on keypress
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        incrementCurrentSlide();
      } else if (event.key === "ArrowLeft") {
        decrementCurrentSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [decrementCurrentSlide, incrementCurrentSlide]);

  // Advance slides on scroll
  useEffect(() => {
    const handleScoll = (e: WheelEvent) => {
      e.deltaY > 0 ? incrementCurrentSlide() : decrementCurrentSlide();
    };

    window.addEventListener("wheel", handleScoll);
    return () => window.removeEventListener("wheel", handleScoll);
  }, [decrementCurrentSlide, incrementCurrentSlide]);

  return {
    currentSlide: map[currentSlideIndex],
    currentIndex: currentSlideIndex,
    incrementCurrentSlide,
    decrementCurrentSlide,
  };
}
