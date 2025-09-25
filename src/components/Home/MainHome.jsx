import React, { Fragment } from "react";
import PersonalDetail from "./PersonalDetail";
import JobSections from "./JobSections";

/*
Layout container with two sections:
Left Column (26%): User's personal details (Profile, Stats, Calendar, etc.)
Right Column (74%): Job search filters, job listings, and related content

The parent container uses:
Fixed height: Full viewport minus header (77px)
Flexbox: To align left and right columns side by side
Gap: Space between the two columns

Scrolling behavior:
Left column: `overflow-hidden` (no scroll, content is fixed height)
Right column: `overflow-y-auto` (independent scrollable content with custom `no-scrollbar`)
 */
const MainHome = () => {
  return (
    <Fragment>
      <div className="py-6 px-[50px] flex items-start gap-6 h-[calc(100vh-77px)]">
        {/* Left Column: Personal details sidebar */}
        <div className="w-[26%] h-full overflow-hidden">
          <PersonalDetail />
        </div>

        {/* Right Column: Scrollable job sections */}
        <div className="w-[74%] h-full overflow-y-auto no-scrollbar">
          <JobSections />
        </div>
      </div>
    </Fragment>
  );
};

export default MainHome;
