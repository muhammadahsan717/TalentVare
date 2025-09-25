import React, { Fragment } from 'react'
import { ReactComponent as SearchIcon } from "../../assets/svgs/SearchIcon.svg";
import { ReactComponent as AccordionIcon } from "../../assets/svgs/AccordionIcon.svg";

const Filters = () => {
  return (
    <Fragment>
        <div className="bg-white p-5 rounded-xl flex items-center gap-7">
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="placeholder:text-[#585D6E] text-[#585D6E] outline-none text-base flex-1"
          />

          <div className="h-8 border-r border-[#E9ECEF]"></div>

          {/* Custom Select with AccordionIcon */}
          <div className="relative flex items-center">
            <select className="appearance-none outline-none text-[#585D6E] text-base pr-8">
              <option value="Select Location">Select Location</option>
            </select>
            <AccordionIcon className="absolute text-[#585D6E] right-0 w-[10px]  pointer-events-none" />
          </div>

          <div className="h-8 border-r border-[#E9ECEF]"></div>

          <div className="relative flex items-center">
            <select className="appearance-none outline-none text-[#585D6E] text-base pr-8">
              <option value="Job Type">Job Type</option>
            </select>
            <AccordionIcon className="absolute text-[#585D6E] right-0 w-[10px]  pointer-events-none" />
          </div>

          <button className="bg-[#0154AA] hover:bg-blue-800 min-w-[140px] flex items-center justify-center gap-3 leading-[100%] cursor-pointer h-[37px] rounded-lg px-5 text-base text-white">
            <SearchIcon className="w-[16px] h-[16px]" />
            Search
          </button>
        </div>
    </Fragment>
  )
}

export default Filters