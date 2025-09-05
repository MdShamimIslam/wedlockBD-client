import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const GotMarried = () => {
  const { register, reset, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = (data) => {
    const {selfNumber,partnerNumber,marriage_date,img,ratings,message} = data;
   const storyInfo ={
        selfNumber,partnerNumber,img,marriage_date,ratings:parseInt(ratings),message,post_date:new Date(),
    }
    
    // save success story info to database
    axiosSecure.post('/successStories',storyInfo)
    .then(res=>{
        if(res.data.insertedId){
            reset();
            toast.success('Your married story created successfully !!')
        }
    })
   
  };

  return (
    <div className="w-5/6 mx-auto mt-24 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-6">
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="number"
            >
              Self Biodata Number
            </label>
            <input
              required
              {...register("selfNumber")}
              className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
              id="number"
              placeholder="Enter your number"
              type="text"
            />
          </div>
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="number"
            >
              Partner Biodata Number
            </label>
            <input
              required
              {...register("partnerNumber")}
              className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
              id="number"
              placeholder="Enter your partner number"
              type="text"
            />
          </div>
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="number"
            >
             Ratings
            </label>
            <input
              required
              {...register("ratings")}
              className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
              id="number"
              placeholder="Enter your ratings"
              type="number"
            />
          </div>
        </div>
        <div className="flex gap-6 mt-2">
        <div className="w-full ">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                htmlFor="image"
              >
                Your/Couple image Link
              </label>
              <input
                required
                {...register("img")}
                className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
                id="image"
                placeholder="Enter your image link"
                type="text"
              />
            </div>
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="date"
            >
            Marriage Date
            </label>
            <input
              required
              {...register("marriage_date")}
              className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
              id="number"
              placeholder="Enter your ratings"
              type="date"
            />
          </div>
        </div>
        <div className="w-full mt-2">
        <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="number"
            >
             Success Story Message
            </label>
            <textarea
                required
                {...register("message")}
                className="flex h-44 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
                id="number"
                placeholder="Type your success story"
                type="number"
              />
        </div>
        <div className="flex items-center justify-center mt-8">
          <input
            className="bg-gray-900 cursor-pointer text-white px-6 py-2 w-full rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default GotMarried;
