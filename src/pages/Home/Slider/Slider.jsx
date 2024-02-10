import { useEffect, useState } from "react";

export const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://i.ibb.co/GF8yDjN/1r.jpg",
      title: "The Perfect Venue",
      des: "Discover the ideal setting for your special day. From charming gardens to elegant ballrooms, we have the perfect venue to make your wedding dreams come true.",
    },
    {
      img: "https://i.ibb.co/JsH7BTT/2.jpg",
      title: "Exquisite Bridal Gowns",
      des: "Find the dress of your dreams from our stunning collection of bridal gowns. Whether you're looking for something classic and timeless or modern and chic, we have a style for every bride.",
    },
    {
      img: "https://i.ibb.co/hZtFnw3/3.jpg",
      title: "Personalized Wedding Invitations",
      des: "Set the tone for your wedding with beautifully designed invitations that reflect your unique style and personality. From traditional to contemporary, we'll help you create invitations that leave a lasting impression.",
    },
    {
      img: "https://i.ibb.co/qkgmdcX/4.jpg",
      title: "Delicious Catering Options",
      des: "Treat your guests to a culinary experience they won't forget with our delicious catering options. From elegant plated dinners to casual buffet-style feasts, we'll work with you to create a menu that delights every palate.",
    },
    {
      img: "https://i.ibb.co/8dJbJfZ/5.jpg",
      title: "Capturing Precious Moments",
      des: "Trust our team of talented photographers and videographers to capture every precious moment of your wedding day. From the first look to the last dance, we'll ensure that every memory is preserved for a lifetime.",
    },
  ];
  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider]);

  return (
    <div className="flex flex-row-reverse justify-between mt-8 mb-16">
      <div
        className="w-full h-72 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        {/* text container here */}
        <div className="drop-shadow-lg text-white text-center px-5 md:w-3/4 w-full">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            {sliders[currentSlider].des}
          </p>
        </div>
      </div>
      {/* slider container */}
      <div className="flex flex-col justify-center items-center gap-3 p-2">
        {/* sliders */}
        {sliders.map((slide, inx) => (
          <img
            onClick={() => setCurrentSlider(inx)}
            key={inx}
            src={slide.img}
            className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${
              currentSlider === inx ? "border-2 border-black p-px" : ""
            } rounded-md md:rounded-lg box-content cursor-pointer`}
            alt={slide.title}
          />
        ))}
      </div>
    </div>
  );
};
