import React, { useEffect, useState } from "react";
import { IoRefreshSharp } from "react-icons/io5";
import beer from "../Assets/beer.png";
import wine from "../Assets/wine.png";
import liquor from "../Assets/liquor.png";
import { IoIosMale } from "react-icons/io";
import { IoIosFemale } from "react-icons/io";
import bacgif from "../Assets/bac.png";
import chart from "../Assets/chart.png";

const Calculation = () => {
  const [gender, setGender] = useState("MALE");
  const [weight, setWeight] = useState(0);
  const [beerVolume, setBeerVolume] = useState(0);
  const [beerABV, setBeerABV] = useState(0); // State for beer ABV
  const [wineVolume, setWineVolume] = useState(0);
  const [wineABV, setWineABV] = useState(0); // State for wine ABV
  const [liquorVolume, setLiquorVolume] = useState(0);
  const [liquorABV, setLiquorABV] = useState(0); // State for liquor ABV
  const [hoursSinceFirstDrink, setHoursSinceFirstDrink] = useState(0);
  const [minutesSinceFirstDrink, setMinutesSinceFirstDrink] = useState(0);
  const [bac, setBAC] = useState(0);

  const handleGenderButton = (e) => {
    setGender(e);
  };

  const calculateBAC = () => {
    // Formula for BAC calculation
    // const alcoholConsumed =
    //   beerVolume * (beerABV / 100) +
    //   wineVolume * (wineABV / 100) +
    //   liquorVolume * (liquorABV / 100);
    // const weightInGrams = weight * 1000; // Convert weight to grams
    // const totalBodyWater =
    //   gender === "MALE" ? weightInGrams * 0.58 : weightInGrams * 0.49;
    // const metabolismRate = 0.017;
    const hours = hoursSinceFirstDrink + minutesSinceFirstDrink / 60;
    // let bacValue = (
    //   alcoholConsumed / totalBodyWater -
    //   metabolismRate * hours
    // ).toFixed(2);

    //alcoho volume to grams
    const totalAlcoholConsumed =
      beerVolume * beerABV * 0.789 +
      wineVolume * wineABV * 0.789 +
      liquorVolume * liquorABV * 0.789;
    //body weight to grams
    const bodyWeight = weight * 1000;
    //rate
    const r = gender === "MALE" ? 0.68 : 0.55;
    //blood alcohol calculator based on Widmark Formula(with time)
    const bacValue = (
      (totalAlcoholConsumed / (bodyWeight * r * 100) -
        (hours * 0.015) / (bodyWeight * r * 100)) *
      100
    ).toFixed(2);

    setBAC(bacValue);
    showAlert();
  };

  const resetForm = () => {
    setGender("MALE");
    setWeight(0);
    setBeerVolume(0);
    setWineVolume(0);
    setLiquorVolume(0);
    setHoursSinceFirstDrink(0);
    setMinutesSinceFirstDrink(0);
    setBAC(0);
  };

  const showAlert = () => {
    if (bac > 0.2) {
      alert("Your Blood Alcohol Content (BAC) is greater than 0.2!");
    }
  };

//   useEffect(() => {
//     showAlert();
//   });

  return (
    <div className="md:flex">
      <div className="my-5 mx-10 bg-gray-100 p-3 rounded-lg md:w-[450px] shadow-lg">
        <div className=" font-bold text-center mb-10">START HERE</div>

        <div>
          <ul className="flex my-5 items-center">
            <li className=" mr-5 font-semibold text-black">GENDER: </li>
            <li
              className={` text-sm flex items-center  mr-5 cursor-pointer p-1 rounded-md ${
                gender === "MALE"
                  ? " bg-gray-200  border-2 border-gray-500"
                  : ""
              }`}
              onClick={() => handleGenderButton("MALE")}
            >
              <IoIosMale className="mr-1" />
              MALE
            </li>
            <li
              className={`text-sm  mr-5 cursor-pointer flex items-center rounded-md p-1 ${
                gender === "FEMALE"
                  ? " bg-gray-200  border-2 border-gray-500"
                  : ""
              }`}
              onClick={() => handleGenderButton("FEMALE")}
            >
              <IoIosFemale className="mr-1" />
              FEMALE
            </li>
          </ul>
          <div>
            <span className=" mr-5 font-semibold text-black">
              BODY WEIGHT IN KGS:{" "}
            </span>
            <input
              className="w-20 p-1 rounded-lg"
              type="number"
              placeholder="ENTER WEIGHT"
              value={weight}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (/^\d+$/.test(inputValue) || inputValue === "") {
                  setWeight(inputValue);
                }
              }}
            />
          </div>

          <div className="my-5">
            <span className=" mr-5 font-semibold text-black">
              TIME SINCE FIRST DRINK(HOURS):
            </span>
            <input
              className="w-20  p-1 rounded-lg"
              type="number"
              placeholder={0}
              value={hoursSinceFirstDrink}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (/^\d+$/.test(inputValue) || inputValue === "") {
                  setHoursSinceFirstDrink(inputValue);
                }
              }}
            />
          </div>
          <div className="my-5">
            <span className=" mr-5 font-semibold text-black">
              TIME SINCE FIRST DRINK(MINUTES):
            </span>
            <input
              className="w-20  p-1 rounded-lg"
              type="number"
              placeholder={0}
              value={minutesSinceFirstDrink}
              onChange={(e) => {
                const inputValue = e.target.value;
                if (/^\d+$/.test(inputValue) || inputValue === "") {
                  setMinutesSinceFirstDrink(inputValue);
                }
              }}
            />
          </div>
          <div className="flex my-5 mt-10 justify-between">
            <div>
              <div className="flex flex-col items-center">
                <span className="text-center text-black font-semibold">
                  BEER{" "}
                </span>
                <img className="w-16 mx-auto mb-2" src={beer} alt="beer" />
              </div>

              <div className="flex flex-col items-center">
                <span className="text-sm">VOLUME (ml)</span>
                <input
                  className="w-20 p-1 rounded-lg"
                  type="number"
                  placeholder="0"
                  value={beerVolume}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^\d+$/.test(inputValue) || inputValue === "") {
                      setBeerVolume(inputValue);
                    }
                  }}
                />
              </div>
              <div className="flex flex-col items-center mt-3">
                <span className="text-sm">ABV (%)</span>
                <input
                  className="w-20 p-1 rounded-lg"
                  type="number"
                  placeholder="0"
                  value={beerABV}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^\d+$/.test(inputValue) || inputValue === "") {
                      setBeerABV(inputValue);
                    }
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-center text-black font-semibold">
                WINE{" "}
              </span>
              <img className="w-16 mx-auto" src={wine} alt="wine" />

              <div className="flex flex-col items-center">
                <span className="text-sm">VOLUME (ml)</span>{" "}
                {/* Adding volume label for wine */}
                <input
                  className="w-20 p-1 rounded-lg"
                  type="number"
                  placeholder="0"
                  value={wineVolume}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^\d+$/.test(inputValue) || inputValue === "") {
                      setWineVolume(inputValue);
                    }
                  }}
                />
              </div>
              <div className="flex flex-col items-center mt-3">
                <span className="text-sm">ABV (%)</span>
                <input
                  className="w-20 p-1 rounded-lg"
                  type="number"
                  placeholder="0"
                  value={wineABV}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^\d+$/.test(inputValue) || inputValue === "") {
                      setWineABV(inputValue);
                    }
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-center text-black font-semibold">
                LIQUOR{" "}
              </span>
              <img className="w-16 mx-auto  mb-2" src={liquor} alt="liquor" />

              <div className="flex flex-col items-center">
                <span className="text-sm">VOLUME (ml)</span>{" "}
                {/* Adding volume label for liquor */}
                <input
                  className="w-20 p-1 rounded-lg"
                  type="number"
                  placeholder="0"
                  value={liquorVolume}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^\d+$/.test(inputValue) || inputValue === "") {
                      setLiquorVolume(inputValue);
                    }
                  }}
                />
              </div>
              <div className="flex flex-col items-center mt-3">
                <span className="text-sm">ABV (%)</span>
                <input
                  className="w-20 p-1 rounded-lg"
                  type="number"
                  placeholder="0"
                  value={liquorABV}
                  onChange={(e) => {
                    const inputValue = e.target.value;
                    if (/^\d+$/.test(inputValue) || inputValue === "") {
                      setLiquorABV(inputValue);
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={calculateBAC}
              className="p-1 px-2 bg-black  text-white rounded-lg mr-5"
            >
              CALCULATE BAC
            </button>
            <button
              className="p-1 px-2 bg-black  text-white rounded-lg mr-5 "
              onClick={resetForm}
            >
              {" "}
              <IoRefreshSharp className="inline-block mr-2" />
              <span>RESET FIELDS</span>
            </button>
          </div>
        </div>
      </div>
      {bac !== 0 && (
        <div className="my-5 md:flex font-semibold text-black">
          <div
            className={`mb-10 text-center font-bold ${
              bac > 0.2 ? "text-red-500" : "text-green-500"
            }`}
          >
            <img className="w-96 h-56 rounded-lg" src={bacgif} alt="bac" />
            BLOOD ALCOHOL CONTENT (BAC): {bac}
          </div>
          <div className="w-96 md:w-[550px]">
            <img src={chart} alt="chart" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculation;
