import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

export const Modal1 = ({ story }) => {
  const [openModal, setOpenModal] = useState(false);
  const {
    message,
    ratings,
    img,
  } = story;
  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-[#16BAC5] text-white p-2 rounded-lg"
      >
        View story
      </button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } inset-0 backdrop-blur-sm bg-black/20 duration-100`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`absolute w-80 p-6 text-center bg-white drop-shadow-2xl rounded-lg ${
            openModal
              ? "translate-y-0 opacity-1 duration-300"
              : "translate-y-20 opacity-0 duration-150"
          }`}
        >
          <div className="space-y-3 flex flex-col justify-center items-center">
           <img src={img} alt="couple img"  className=" w-36 h-36 object-cover rounded-full"/>
           <Rating style={{ maxWidth: 110 }} value={ratings} readOnly />
            <h6 className="font-medium text-center text-slate-700">
              {message}
            </h6>
           <div className="w-full">
            <button
              onClick={() => setOpenModal(false)}
              className="text-[#c51636] w-full hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full"
            >
              Close Modal
            </button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};
