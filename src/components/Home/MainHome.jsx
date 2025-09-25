import React, { Fragment } from "react";
import PersonalDetail from "./PersonalDetail";
import JobSections from "./JobSections";

const MainHome = () => {
  return (
    <Fragment>
      <div className="py-6 px-[50px] flex items-start gap-6 h-[calc(100vh-77px)]">
        <div className="w-[26%] h-full overflow-hidden">
          <PersonalDetail />
        </div>
        <div className="w-[74%] h-full overflow-y-auto no-scrollbar">
          <JobSections />
        </div>
      </div>
    </Fragment>
  );
};

export default MainHome;
