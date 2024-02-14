import React from "react";
import Calculation from "./Calculation";

const Body = () => {
  return (
    <div>
      <div className="font-bold text-2xl text-center my-10">
        Blood Alcohol Content (BAC) Calculator
      </div>
      <div className="mx-10">
        Blood Alcohol Content, or BAC, refers to the percentage of alcohol in a
        person's bloodstream, and can be measured within 30-70 minutes after
        drinking. Contrary to popular belief, nothing can lower BAC except time;
        coffee, cold showers, and chugging glasses of water will not help you
        sober up any faster. Curious what your BAC might be? Use our calculator
        to estimate, but don't forget that everyone metabolizes alcohol (beer,
        wine, liquor) differently. Our calculator can give you an approximate
        BAC level, but do not rely upon it to determine if you're fit to drive
        or work
      </div>
      <Calculation/>
    </div>
  );
};

export default Body;
