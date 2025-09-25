import React, { Fragment } from "react";
import Filters from "./Filters";
import JobsList from "./JobsList";
import RecommendedJobs from "./RecommendedJobs";
import { promotedJobs, RecommendedJobsArray } from "../../constant/data";

const JobSections = () => {
  return (
    <Fragment>
      <div className="py-3.5 space-y-5">
        <div>
          <p className="text-dark-grey font-semibold text-[22px] leading-[100%] mb-1 fontSixtyFive">
            Find your Dream Job, <span className="text-blue">Albert!</span>
          </p>
          <p className="text-[#585D6E] text-sm fontFiftyFive">
            Explore the latest job openings and apply for the best opportunities
            available today!
          </p>
        </div>

        <Filters />

        <div className="flex text-[#737A91] text-base items-center gap-4">
          <span>Similar: </span>
          <div className="flex items-center gap-3">
            <button className="text-xs text-[#737A91] border border-[#737A91] rounded-md h-[30px] px-4 fontFiftyFive">
              Frontend
            </button>
            <button className="text-xs text-[#737A91] border border-[#737A91] rounded-md h-[30px] px-4 fontFiftyFive">
              Backend
            </button>
            <button className="text-xs text-[#737A91] border border-[#737A91] rounded-md h-[30px] px-4 fontFiftyFive">
              Graphic Designer
            </button>
          </div>
        </div>

        <div className="border-t border-[#E9ECEF] w-full"></div>

        <JobsList
          arrray={promotedJobs}
          title="Featured Jobs"
          link="featured-jobs"
        />

        <div className="border-t border-[#E9ECEF] w-full"></div>

        {/* <RecommendedJobs /> */}
        <JobsList
          arrray={RecommendedJobsArray}
          title="Recommended Jobs"
          link="recommended-jobs"
        />

        <div className="border-t border-[#E9ECEF] w-full"></div>

        <JobsList
          arrray={RecommendedJobsArray}
          title="Latest Jobs"
          link="latest-jobs"
        />
      </div>
    </Fragment>
  );
};

export default JobSections;
