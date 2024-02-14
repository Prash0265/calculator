import React, { useState } from "react";
import { IoRefreshSharp } from "react-icons/io5";

const Calculation = () => {
  const [gender, setGender] = useState("");

  const handleGenderButton = (e) => {
    setGender(e);
  };

  return (
    <div className="my-10 mx-10">
      <div className="flex">
        <div className="mr-10">START HERE</div>
        <div className="flex items-center cursor-pointer">
          {" "}
          <IoRefreshSharp />
          <span>RESET FIELDS</span>
        </div>
      </div>
      <div>
        <ul className="flex my-10">
          <li className={`text-3xl  mr-5 cursor-pointer ${gender === "MALE" ? "text-red-500 pb-1 border-b-2 border-red-500" : ""}`} onClick={()=>handleGenderButton("MALE")}>MALE</li>
          <li className={`text-3xl  mr-5 cursor-pointer ${gender === "FEMALE" ? "text-red-500 pb-1 border-b-2 border-red-500" : ""}`} onClick={()=>handleGenderButton("FEMALE")}>FEMALE</li>
        </ul>
        <div >
            <span className="mr-5">BODY WEIGHT IN KGS</span>
            <input  type="number" placeholder="ENTER WEIGHT"/>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
