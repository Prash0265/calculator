import React, { useState } from "react";
import { IoRefreshSharp } from "react-icons/io5";
import beer from "../Assets/beer.png";
import wine from "../Assets/wine.png";
import liquor from "../Assets/liquor.png";

const Calculation = () => {
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState(0);
  const [beerCount, setBeerCount] = useState(0);
  const [wineCount, setWineCount] = useState(0);
  const [liquorCount, setLiquorCount] = useState(0);
  const [hoursSinceFirstDrink, setHoursSinceFirstDrink] = useState(0);
  const [minutesSinceFirstDrink, setMinutesSinceFirstDrink] = useState(0);
  const [bac, setBAC] = useState(0);

  const handleGenderButton = (e) => {
    setGender(e);
  };

  const calculateBAC = () => {
    // Formula for BAC calculation
    const alcoholConsumed =
      (beerCount * 12 * 0.05 + wineCount * 5 * 0.12 + liquorCount * 1.5 * 0.4) *
      7.5; // Standard drink sizes and alcohol content
    const weightInGrams = weight * 1000; // Convert weight to grams
    const totalBodyWater =
      gender === "MALE" ? weightInGrams * 0.58 : weightInGrams * 0.49;
    const metabolismRate = 0.017;
    const hours = hoursSinceFirstDrink + minutesSinceFirstDrink / 60;
    const bacValue =
      (alcoholConsumed / totalBodyWater - metabolismRate * hours).toFixed(2);
    setBAC(bacValue);
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
          <li
            className={`text-3xl  mr-5 cursor-pointer ${
              gender === "MALE"
                ? "text-red-500 pb-1 border-b-2 border-red-500"
                : ""
            }`}
            onClick={() => handleGenderButton("MALE")}
          >
            MALE
          </li>
          <li
            className={`text-3xl  mr-5 cursor-pointer ${
              gender === "FEMALE"
                ? "text-red-500 pb-1 border-b-2 border-red-500"
                : ""
            }`}
            onClick={() => handleGenderButton("FEMALE")}
          >
            FEMALE
          </li>
        </ul>
        <div>
          <span className="mr-5">BODY WEIGHT IN KGS</span>
          <input
            type="number"
            placeholder="ENTER WEIGHT"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="flex items-center my-10">
          <div>
            <img src={beer} alt="beer" />{" "}
            <input
              type="number"
              placeholder="0"
              value={beerCount}
              onChange={(e) => setBeerCount(e.target.value)}
            />
          </div>
          <div>
            <img src={wine} alt="wine" />{" "}
            <input
              type="number"
              placeholder="0"
              value={wineCount}
              onChange={(e) => setWineCount(e.target.value)}
            />
          </div>
          <div>
            <img src={liquor} alt="liquor" />{" "}
            <input
              type="number"
              placeholder="0"
              value={liquorCount}
              onChange={(e) => setLiquorCount(e.target.value)}
            />
          </div>
        </div>
        <div className="my-5">
          <span className="mr-5">TIME SINCE FIRST DRINK(HOURS)</span>
          <input
            type="number"
            placeholder="0"
            value={hoursSinceFirstDrink}
            onChange={(e) => setHoursSinceFirstDrink(e.target.value)}
          />
        </div>
        <div className="my-5">
          <span className="mr-5">TIME SINCE FIRST DRINK(MINUTES)</span>
          <input
            type="number"
            placeholder="0"
            value={minutesSinceFirstDrink}
            onChange={(e) => setMinutesSinceFirstDrink(e.target.value)}
          />
        </div>
        <button onClick={calculateBAC}>Calculate BAC</button>
        <div className="my-5">Blood Alcohol Content (BAC): {bac}</div>
      </div>
    </div>
  );
};

export default Calculation;
