import { useContext } from "react";
import { StyleContext } from "../../../contexts/StyleContext";

type Props = {
  name: string;
  description: string;
  img: string;
  timeduration: string;
  theme: string;
};
export default function ExperienceCard({
  name,
  description,
  img,
  timeduration,
  theme,
}: Props) {
  const { isDark } = useContext(StyleContext);
  return (
    <div className={`relative flex flex-col md:w-96 w-full md:h-[500px] h-96 border-spacing-1 border-gray-500 rounded-xl shadow-2xl ${isDark ? "bg-primary-light text-black" : ""}`}>
      <div
        className={`relative md:h-2/6 h-2/6 flex justify-center items-center rounded-t-xl`}
        style={{ backgroundColor: theme }}
      >
        <h2 className="text-white text-center text-2xl font-semibold">
          {name}
        </h2>
      </div>
      <div className={`relative flex h-2/4 justify-center flex-col items-center ${isDark ? "bg-primary-light text-black" : ""}`}>
        <div className="absolute -top-12 w-24">
          <img src={img} alt={name} />
        </div>
        <div className="flex flex-col items-center mt-16">
          <h3 className="text-xl">{timeduration}</h3>
          <p className="text-center text-lg opacity-55 mt-3 w-3/4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
