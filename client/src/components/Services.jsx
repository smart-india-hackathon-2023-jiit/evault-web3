import React from "react";
import { Link } from "react-router-dom";
import files from "../images/files.jpg";
import lawyer from "../images/lawyer.jpg";

const Services = ({isUserLogged, correctNetwork}) => {
  return (
    <div className="p-6 bg-[#EEEEEE] h-screen w-screen flex justify-center items-center">
      <div className="w-50px">
        <div className="pb-8">
          <h1 className="text-6xl text-[#053B50] font-bold text-center mb-8">
            SERVICES
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-5 pb-5">
          {/* Left Div */}
          <Link to={!isUserLogged && !correctNetwork ? '/login' : '/efiling'}>
            <div className="bg-[#279EFF] text-white rounded-lg p-4 max-w-lg mx-auto transition-transform transform hover:scale-105 mr-2">
              <div className="h-[200px] w-[400px] mb-4 overflow-hidden">
                <img
                  src={files}
                  alt="Service 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h2 className="text-4xl font-semibold mb-4">Service 1</h2>
              <p className="text-lg text-[#64CCC5] mb-6">
                Description of Service 1.
              </p>
            </div>
          </Link>
          {/* Right Div */}
          <div className="bg-[#176B87] text-white rounded-lg p-4 max-w-lg mx-auto transition-transform transform hover:scale-105 ml-2">
            <div className="h-[200px] w-[400px] mb-4 overflow-hidden">
              <img
                src={lawyer}
                alt="Service 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h2 className="text-4xl font-semibold mb-4">Service 2</h2>
            <p className="text-lg text-[#64CCC5] mb-6">
              Description of Service 2.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
