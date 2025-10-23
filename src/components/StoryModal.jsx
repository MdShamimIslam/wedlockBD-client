import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { CalendarDays, Clock } from "lucide-react";
import { formatDate } from "../utils/functions";

export const StoryModal = ({ story = {} }) => {
  const [openModal, setOpenModal] = useState(false);
  const { message, ratings, img, marriage_date, post_date } = story;

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:scale-105 transition-transform duration-300"
      >
        View Story
      </button>

      {openModal && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={() => setOpenModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden p-6 text-center animate-fadeInUp"
          >
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
            >
              ✕
            </button>

            <div className="flex flex-col items-center text-center space-y-4">
              <img
                src={img}
                alt="Couple"
                className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover border-4 border-pink-400 shadow-md"
              />

              <Rating style={{ maxWidth: 120 }} value={ratings} readOnly />

              <div className="flex flex-col sm:flex-row justify-center gap-3 text-gray-600 text-sm">
                <div className="flex items-center gap-1">
                  <CalendarDays size={16} className="text-pink-500" />
                  <span>
                    <strong>Marriage:</strong> {formatDate(marriage_date)}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} className="text-blue-500" />
                  <span>
                    <strong>Posted:</strong> {formatDate(post_date)}
                  </span>
                </div>
              </div>

              <div className="w-full max-h-[120px] overflow-y-auto px-1 sm:px-6">
                <p className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed break-words whitespace-pre-line">
                &quot; {message || 'We found our perfect match through WedlockBD! ❤️'}&quot; 
                </p>
              </div>

              <button
                onClick={() => setOpenModal(false)}
                className="mt-2 w-full bg-gradient-to-r from-blue-500 to-pink-600 text-white font-semibold py-2.5 rounded-full hover:scale-105 transition-transform duration-300 shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
