import useCurrentSlide from "../hooks/useCurrentSlide";
import Navigation from "./Navigation";

export default function SlidesManager() {
  const { currentSlide, incrementCurrentSlide, decrementCurrentSlide } =
    useCurrentSlide();

  return (
    <>
      {currentSlide}
      <Navigation
        nextFunc={incrementCurrentSlide}
        prevFunc={decrementCurrentSlide}
      />
    </>
  );
}
