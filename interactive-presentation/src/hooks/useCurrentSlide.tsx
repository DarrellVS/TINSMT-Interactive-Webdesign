import { useCallback, useEffect, useState } from "react";
import Opening from "../pages/Opening/PageOne";
import AboutReact from "../pages/AboutReact/PageOne";
import DifferencesPageOne from "../pages/Differences/PageOne";
import DifferencesPageTwo from "../pages/Differences/PageTwo";
import AboutStatesPageOne from "../pages/AboutStates/PageOne";
import AboutStatesPageThree from "../pages/AboutStates/PageThree";
import AboutStatesPageTwo from "../pages/AboutStates/PageTwo";
import StructurePageOne from "../pages/Structure/PageOne";
import ComponentLibrariesPageOne from "../pages/ComponentLibraries/PageOne";
import ComponentLibrariesPageTwo from "../pages/ComponentLibraries/PageTwo";
import HooksPageOne from "../pages/Hooks/PageOne";
import HooksPageTwo from "../pages/Hooks/PageTwo";
import HooksPageThree from "../pages/Hooks/PageThree";
import HooksPageFour from "../pages/Hooks/PageFour";
import HooksPageFive from "../pages/Hooks/PageFive";
import ExamplePageOne from "../pages/Example/PageOne";
import ComponentsPageOne from "../pages/Components/PageOne";
import ExamplePageTwo from "../pages/Example/PageTwo";
import ApplicationsPageOne from "../pages/ApplicationsInProject/PageOne";
import ApplicationsPageTwo from "../pages/ApplicationsInProject/PageTwo";

export default function useCurrentSlide() {
  const [currentSlideIndex, setCurrentSlide] = useState(0);

  const map = [
    <Opening />,
    <AboutReact />,
    <ComponentsPageOne />,
    <DifferencesPageOne />,
    <StructurePageOne />,
    <ComponentLibrariesPageOne />,
    <ComponentLibrariesPageTwo />,
    <DifferencesPageTwo />,
    <AboutStatesPageOne />,
    <AboutStatesPageTwo />,
    <AboutStatesPageThree />,
    <HooksPageOne />,
    <HooksPageTwo />,
    <HooksPageThree />,
    <HooksPageFour />,
    <HooksPageFive />,
    <ExamplePageOne />,
    <ExamplePageTwo />,
    <ApplicationsPageOne />,
    <ApplicationsPageTwo />,
  ];

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
  }, [currentSlideIndex, map.length]);

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
