import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import { promotedJobs } from "../../constant/data";

import JobCard from "./JobCard";

const JobsList = ({title, link, arrray}) => {
  return (
    <Fragment>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className=" leading-[100%] text-dark-grey text-lg font-medium">
            {title}
          </span>
          <Link
            to={`/${link}`}
            className="text-blue text-sm font-medium underline leading-[100%]"
          >
            See {title}
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-[15px]">
          {arrray.map((item) => (
            <JobCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default JobsList;
