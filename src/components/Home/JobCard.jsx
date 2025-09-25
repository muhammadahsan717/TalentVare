import React, { Fragment } from "react";
import { ReactComponent as LocationIcon } from "../../assets/svgs/LocationIcon.svg";
import { ReactComponent as ClockIcon } from "../../assets/svgs/ClockIcon.svg";
import { ReactComponent as SaveIcon } from "../../assets/svgs/SaveIcon.svg";

/*
A single job card with job details.
Props: item: Object containing job details (title, company, logo, location, posted, applicants, promoted)
*/
const JobCard = ({ item }) => {
  return (
    <Fragment>
      <div className="py-3 px-4 bg-white border border-[#E1E1E1] rounded-xl flex flex-col gap-4">
        {/* Job Header */}
        <div className="space-y-1.5">
          {item.promoted && (
            <p className="mb-0 fontSixtyFive font-semibold text-[10px] text-dark-grey">
              Promoted
            </p>
          )}

          {/* Company Logo and Job Title */}
          <div className="flex items-center gap-2.5 text-dark-grey">
            <div className="w-10 h-10 bg-[#FAFAFA] rounded-xl border-[0.76px] flex items-center justify-center border-[#FFFFFF]">
              <img src={item.logo} alt={`${item.company} logo`} className="w-[23px] h-auto" />
            </div>
            <div>
              <p className="text-sm leading-[100%]">{item.title}</p>
              <span className="text-xs leading-[100%]">{item.company}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-[#585D6E]">
            <LocationIcon className="h-[12px]" />
            {item.location}
          </div>

          {/* Posted time & applicants */}
          <div className="flex items-center gap-1.5 text-xs text-[#585D6E]">
            <ClockIcon className="h-[12px]" />
            <span>
              {item.posted} |{" "}
              <span className="text-[#0154AA]">{item.applicants} applicants</span>
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between">
          <button className="bg-[#0154AA] fontFiftyFive hover:bg-blue-800 min-w-[110px] leading-[100%] cursor-pointer h-[34px] rounded-md text-xs text-white">
            Apply Now
          </button>
          <SaveIcon className="h-[16px] text-[#AAAAAA] cursor-pointer" />
        </div>
      </div>
    </Fragment>
  );
};

export default JobCard;
