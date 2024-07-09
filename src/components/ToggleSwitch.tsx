import { useState, useContext, useEffect } from "react";
import { StyleContext } from "../contexts/StyleContext";
import emoji from "react-easy-emoji";

export default function ToggleSwitch() {
  const { isDark, handleSwitch } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);

  const handleChange = () => {
    setChecked(!isChecked);
  }
  useEffect(() => {
      handleSwitch(isChecked);
  }, [isChecked]);
  return (
    <div
      className={`relative inline-block w-16 h-8 flex  rounded-full items-center mx-auto text-center cursor-pointer transition duration-400 ease-in-out  ${
        isChecked ? "justify-end bg-gray-600" : "justify-start bg-gray-200"
      } `}
    >
      <div onClick={handleChange}>
        <span>
          {isChecked ?          
          <div className={`transition duration-1000 ease-in-out`}>{emoji("🌜")}</div>
          : 
          <div className={`transition duration-1000 ease-in-out`}>{emoji("☀️")}</div>}
        </span>
      </div>
    </div>
  );
}
