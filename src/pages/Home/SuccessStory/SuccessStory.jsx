import { useState } from "react";
import { useEffect } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SuccessStory = () => {
  const axiosPublic = useAxiosPublic();
  // get success stories
  const { data: stories = [] } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/sortSuccessStories");
      return res.data;
    },
  });
 
  const [currentSlider, setCurrentSlider] = useState(0);
  // The slider images array
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? stories.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === stories.length - 1 ? 0 : currentSlider + 1
    );
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const isSmallScreen = window.innerWidth <= 768;
  return (
    <div className="my-16">
      <h3 className="text-center md:text-4xl text-2xl font-semibold">Success Story Of Got Marriage</h3>
      <div className="max-w-full  min-w-[350px]  mx-auto h-[400px] flex flex-row items-center justify-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
      <div className="relative overflow-hidden">
        <div className="absolute w-full h-full flex items-center justify-between z-50 ">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
            >
             
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>{" "}
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>{" "}
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="black"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              transform="rotate(180)"
            >
              {" "}
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>{" "}
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>{" "}
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill="black"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
        </div>
        {/* slider container */}
        <div
          className="ease-linear duration-300 flex"
          style={{
            transform: `translateX(-${
              currentSlider * (isSmallScreen ? 100 : 50)
            }%)`,
          }}
        >
          {/* sliders */}
          {stories.map((story, idx) => (
            <div key={idx} className="p-12   min-w-full md:min-w-[60%]">
              <div className="h-full p-12 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
                <Rating style={{ maxWidth: 130 }} value={story?.ratings} readOnly />
                <p className="leading-relaxed my-4 text-gray-500">
                  {story?.message}
               
                </p>
                <a className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={story?.img}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font  text-gray-900">
                      Marriage Date
                    </span>
                    <span className="text-gray-500 text-sm">
                      {story?.marriage_date}
                    </span>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
export default SuccessStory;
