import { useState, useEffect, useContext } from "react";
import ReposCard from "./components/ReposCard";
import { StyleContext } from "../../contexts/StyleContext";

export interface RepositoryProps {
  id: number;
  name: string;
  language: string;
  stargazers_count: number;
  size: number;
  forks: number;
  description: string;
}

export default function Projects() {
  const [arrayItems, setArrayItems] = useState<JSX.Element[]>([]);
  const {isDark} = useContext(StyleContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/vanmanh23/repos"
        );
        const data: RepositoryProps[] = await response.json();
        const items = data.slice(0, 6).map((arraySingleItem: RepositoryProps) => (
          <div key={arraySingleItem.id}>
            <ReposCard {...arraySingleItem} />
          </div>
        ));
        setArrayItems(items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={`${isDark ? "text-white" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-evenly gap-4">{arrayItems}</div>
      <div className="flex justify-center">
        <a
          href="https://github.com/vanmanh23"
          className="text-white uppercase font-medium bg-primary px-4 py-2 rounded-md mt-7"
        >
          more projects
        </a>
      </div>
    </div>
  );
}
