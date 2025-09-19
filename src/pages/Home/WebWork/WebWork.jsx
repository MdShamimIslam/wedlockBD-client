import { Link } from "react-router-dom";
import useBio from "../../../hooks/useBio";
import { secCl, steps } from "../../../utils/options";
import Heading from "../../../component/common/Heading";
import Button from "../../../component/common/Button";

const WebWork = () => {
  const {bio = {}} = useBio();

  return (
   
       <div className={secCl}>
        <Heading 
          title="How WedlockBD Works"
          desc=" Finding your life partner has never been easier. Follow these simple steps to start your journey towards a happy marriage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const {icon, color, bgColor, title,description } = step || {};
            const IconComponent = icon;

            return (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3"> {title}</h3>
                <p className="text-gray-600 leading-relaxed"> {description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link to={`${bio.biodata_id ? "/alreadyCreate" : "/dashboard/add-biodata"}`}>
            <Button> Start Your Journey Today</Button>
          </Link>
        </div>

      </div>
   
  );
};

export default WebWork;
