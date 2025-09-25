import React, { Fragment } from "react";
import { ReactComponent as LocationIcon } from "../../assets/svgs/LocationIcon.svg";
import { ReactComponent as ClockIcon } from "../../assets/svgs/ClockIcon.svg";
import { ReactComponent as SaveIcon } from "../../assets/svgs/SaveIcon.svg";

const JobCard = ({ item }) => {
  return (
    <Fragment>
      <div className="py-3 px-[16px] overflow-visible bg-white border border-[#E1E1E1] rounded-xl flex flex-col gap-4 ">
        <div className="space-y-1.5">
          {item.promoted && (
            <p className="mb-0 fontSixtyFive font-semibold text-[10px] text-dark-grey">
              Promoted
            </p>
          )}
          <div className="flex items-center 2xl:gap-2.5 gap-2  text-dark-grey">
            <div className="w-10 h-10 bg-[#FAFAFA] rounded-xl border-[0.76px] flex items-center justify-center border-[#FFFFFF]">
              <img src={item.logo} alt="" className="w-[23px] h-auto" />
            </div>
            <div>
              <p className="leading-[100%] text-sm">{item.title}</p>
              <span className="text-xs leading-[100%]">{item.company}</span>
            </div>
          </div>
          <div className="flex text-xs items-center gap-[6px] text-[#585D6E]">
            <LocationIcon className="h-[12px]" />
            {item.location}
          </div>
          <div className="flex text-xs items-center gap-[6px] text-[#585D6E]">
            <ClockIcon className="h-[12px]" />
            <span>
              {item.posted} |{" "}
              <span className="text-[#0154AA]">
                {item.applicants} applicants
              </span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="bg-[#0154AA] fontFiftyFive hover:bg-blue-800 min-w-[110px] leading-[100%] cursor-pointer h-[34px] rounded-md text-xs text-white">
            {/* <SearchIcon className="w-[16px] h-[16px]" /> */}
            Apply Now
          </button>
          <SaveIcon className="h-[16px] text-[#AAAAAA] cursor-pointer" />
        </div>
      </div>
    </Fragment>
  );
};

export default JobCard;
