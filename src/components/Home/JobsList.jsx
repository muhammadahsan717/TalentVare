import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";

/*
Displays a list of jobs in a responsive grid.
Props: title: Section title, link: Route path for "See All" link, arrray: Array of job objects
*/
const JobsList = ({ title, link, arrray }) => {
  return (
    <Fragment>
      <div className="space-y-4">
        {/* Section Header */}
        <div className="flex items-center gap-4">
          <span className="text-dark-grey text-lg font-medium leading-[100%]">{title}</span>
          <Link
            to={`/${link}`}
            className="text-blue text-sm font-medium underline leading-[100%]"
          >
            See {title}
          </Link>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          {arrray.map((item) => (
            <JobCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default JobsList;
