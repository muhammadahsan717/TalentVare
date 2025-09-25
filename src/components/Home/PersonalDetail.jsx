import React, { Fragment } from "react";
import CoverPhoto from "./../../assets/images/CoverPhoto.png";
import ProfileImage from "./../../assets/images/ProfileImage.png";
import { ReactComponent as AccordionIcon } from "./../../assets/svgs/AccordionIcon.svg";

const PersonalDetail = () => {
  return (
    <Fragment>
      <div className="flex flex-col gap-2.5">
        {/* Personal Details */}
        <div className="flex flex-col overflow-hidden rounded-xl bg-white relative">
          {/* Cover Photo */}
          <img
            src={CoverPhoto}
            alt="Cover"
            className="w-full h-[100px] 2xl:h-36 object-cover rounded-t-xl"
          />

          {/* Profile Picture */}
          <div className="mx-auto -mt-[45px] mb-2 border-2 border-white rounded-full w-[88px] h-[88px] overflow-hidden shadow-md">
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* User Information */}
          <div className="text-center px-[22%] pb-5 space-y-[5px]">
            <p className="text-[18px] font-medium text-dark-grey mb-0 fontSixtyFive">Albert Flores</p>
            <p className="text-[14px] font-normal text-dark-grey mb-0">
              Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
            </p>
            <p className="text-[12px] font-normal text-[#585D6E] mb-0">
              Clinton, Maryland
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white p-5 space-y-4 rounded-xl">
          {[
            { label: "Profile Visitors", value: 140 },
            { label: "Resume Viewers", value: 20 },
            { label: "My Jobs", value: 88 },
          ].map((item, index) => (
            <Fragment key={index}>
              <div className="flex items-center justify-between">
                <span className="text-base text-dark-grey">{item.label}</span>
                <span className="text-base text-blue">{item.value}</span>
              </div>
              {index < 2 && <div className="border-b border-[#E9ECEF] w-full"></div>}
            </Fragment>
          ))}
        </div>

        {/* Calendar Section */}
        <div className="bg-white rounded-xl p-2.5">
          <div className="flex items-center justify-between pr-4">
            <div className="flex flex-col">
              <span className="text-base font-medium text-dark-grey fontSixtyFive">My Calendar</span>
              <span className="text-base text-[#737A91] leading-[100%]">
                Upcoming Interviews
              </span>
            </div>
            <AccordionIcon className="w-3 text-dark-grey cursor-pointer" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PersonalDetail;
