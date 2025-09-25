import React, { Fragment } from "react";
import Filters from "./Filters";
import JobsList from "./JobsList";
import { promotedJobs, RecommendedJobsArray } from "../../constant/data";

/* Main section that displays job search filters, similar categories, and job lists. */
const JobSections = () => {
  return (
    <Fragment>
      <div className="py-3.5 space-y-5">
        {/* Header */}
        <div>
          <p className="text-dark-grey font-medium text-[22px] leading-[100%] mb-1 fontSixtyFive">
            Find your Dream Job, <span className="text-blue">Albert!</span>
          </p>
          <p className="text-[#585D6E] text-sm fontFiftyFive">
            Explore the latest job openings and apply for the best opportunities available today!
          </p>
        </div>

        {/* Filters Section */}
        <Filters />

        {/* Similar Categories */}
        <div className="flex items-center gap-4 text-[#737A91] text-base">
          <span>Similar:</span>
          <div className="flex items-center gap-3">
            {["Frontend", "Backend", "Graphic Designer"].map((category) => (
              <button
                key={category}
                className="text-xs text-[#737A91] border border-[#737A91] rounded-md h-[30px] px-4 fontFiftyFive"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-[#E9ECEF] w-full"></div>

        {/* Featured Jobs */}
        <JobsList arrray={promotedJobs} title="Featured Jobs" link="featured-jobs" />

        <div className="border-t border-[#E9ECEF] w-full"></div>

        {/* Recommended Jobs */}
        <JobsList arrray={RecommendedJobsArray} title="Recommended Jobs" link="recommended-jobs" />

        <div className="border-t border-[#E9ECEF] w-full"></div>

        {/* Latest Jobs */}
        <JobsList arrray={RecommendedJobsArray} title="Latest Jobs" link="latest-jobs" />
      </div>
    </Fragment>
  );
};

export default JobSections;
