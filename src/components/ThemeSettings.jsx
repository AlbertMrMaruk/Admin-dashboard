import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { themeColors } from "../data/dummy";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
const ThemeSettings = () => {
  const { setColor, setMode, currentColor, currentMode, setThemeSettings } =
    useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:[#484B52] w-400">
        <div className="flex justify-between ml-4 p-4 items-center">
          <p className=" text-lg font-semibold">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{
              color: "rgb(153,171,180)",
              borderRadius: "50%",
            }}
            className="text-2xl hover:drop-shadow-xl p-3 hover:bg-light-gray"
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="ml-4 p-4 border-t-1 flex-col border-color ">
          <p className="text-xl font-semibold">Theme Option</p>
          <div className="mt-4">
            <input
              type="radio"
              name="theme"
              id="light"
              checked={currentMode === "Light"}
              onChange={setMode}
              value="Light"
              className="cursor-pointer"
            />
            <label htmlFor="light" className="ml-2">
              Light
            </label>
          </div>
          <div className="mt-2">
            <input
              type="radio"
              name="theme"
              id="dark"
              onChange={setMode}
              checked={currentMode === "Dark"}
              value="Dark"
              className="cursor-pointer"
            />
            <label htmlFor="dark" className="ml-2">
              Dark
            </label>
          </div>
        </div>
        <div className="ml-4 p-4 border-t-1 flex-col border-color ">
          <p className="text-xl font-semibold">Theme Colors</p>
          <div className="mt-2 flex gap-3">
            {themeColors.map((item, index) => (
              <TooltipComponent
                key={index}
                content={item.name}
                position="TopCenter"
              >
                <div className="relative cursor-pointer flex  gap-5 items-center">
                  <button
                    className="h-10 w-10 rounded-full cursor-pointer"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck
                      className={`ml-2 text-2xl text-white ${
                        item.color === currentColor ? "block" : "hidden"
                      }`}
                    />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
