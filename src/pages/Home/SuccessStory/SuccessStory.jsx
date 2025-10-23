  import { useState, useEffect, useCallback } from "react";
  import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
  import Heading from "../../../components/common/Heading";
  import { Rating } from "@smastrom/react-rating";
  import "@smastrom/react-rating/style.css";
import useSuccessStory from "../../../hooks/useSuccessStory";
import { secCl } from "../../../utils/options";
import Loading from "../../../components/Loading";

  const SuccessStory = () => {
    const [stories] = useSuccessStory();

    const [currentSlider, setCurrentSlider] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
      };
      
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const prevSlider = () =>
      setCurrentSlider((current) =>
        current === 0 ? stories.length - 1 : current - 1
      );

      const nextSlider = useCallback(() => {
        setCurrentSlider((current) =>
          current === stories.length - 1 ? 0 : current + 1
        );
      }, [stories.length]);

    useEffect(() => {
      const intervalId = setInterval(nextSlider, 5000);
      return () => clearInterval(intervalId);
    }, [nextSlider]);

    return (
      <div className={secCl}>
          <Heading
            title="Our Success Stories"
            desc="Real couples sharing their journey from first meeting to happily ever after"
          />
          
           {stories.length === 0 && <Loading />}

          <div className="relative mt-[-28px]">
            <div className="relative flex items-center justify-center overflow-hidden rounded-2xl px-8">
              {/* Navigation Arrows for Desktop (left/right) */}
              <button
                onClick={prevSlider}
                className="hidden md:flex absolute left-1 z-20 justify-center items-center text-white bg-pink-500 hover:bg-pink-600 rounded-full 
                shadow-elegant w-10 h-10 md:w-12 md:h-12 transition-all duration-300 hover:scale-110 group"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>

              <button
                onClick={nextSlider}
                className="hidden md:flex absolute right-1 z-20 justify-center items-center text-white bg-pink-500 hover:bg-pink-600 rounded-full 
                shadow-elegant w-10 h-10 md:w-12 md:h-12 transition-all duration-300 hover:scale-110 group"
                aria-label="Next story"
              >
                <ChevronRight className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>

              {/* Prev Button (Top Center on Mobile) */}
              <button
                onClick={prevSlider}
                className="md:hidden absolute top-2 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center 
                text-white bg-pink-500 hover:bg-pink-600 rounded-full shadow-elegant w-10 h-10 
                transition-all duration-300 hover:scale-110 group"
                aria-label="Previous story"
              >
                <ChevronUp className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>

              {/* Next Button (Bottom Center on Mobile) */}
              <button
                onClick={nextSlider}
                className="md:hidden absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex justify-center items-center 
                text-white bg-pink-500 hover:bg-pink-600 rounded-full shadow-elegant w-10 h-10 
                transition-all duration-300 hover:scale-110 group"
                aria-label="Next story"
              >
                <ChevronDown className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </button>



              {/* Slider container */}
              <div
                className="flex transition-transform ease-in-out duration-700"
                style={{
                  transform: `translateX(-${
                    currentSlider * (isSmallScreen ? 100 : 100 / 2)
                  }%)`,
                  width: `${stories.length * 100}%`,
                }}
              >
                {stories.map((story) => (
                  <div
                    key={story._id}
                    className="p-6 md:p-8 w-full md:w-1/2 flex-shrink-0"
                  >
                    <div className="h-full bg-card rounded-2xl shadow-elegant border border-border p-8 flex flex-col justify-between hover:shadow-romantic transition-all duration-500 hover:scale-[1.02] group">
                      <div className="mb-6">
                        <Rating style={{ maxWidth: 130 }} value={story?.ratings} readOnly />
                      </div>
                      <blockquote className="flex-1 mb-8">
                        <p className="leading-relaxed italic">
                          {story.message}
                        </p>
                      </blockquote>

                      {/* Profile */}
                      <div className="flex items-center">
                          <img
                            alt="wedding-photo"
                            src={story.img}
                            className="w-16 h-16 rounded-full object-cover border-2 border-primary group-hover:border-pink-400 transition-colors"
                          />
                        <div className="ml-4">
                          <p> Married on </p>
                          <p> {new Date(story.post_date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })} </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {stories?.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlider(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlider === idx
                      ? "bg-pink-600 scale-125"
                      : "bg-slate-400 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to story ${idx + 1}`}
                />
              ))}
            </div>
          </div>
      </div>
    );
  };

  export default SuccessStory;