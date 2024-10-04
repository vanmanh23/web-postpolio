import { useContext } from "react";
import { StyleContext } from "../../../contexts/StyleContext";

type RepositoryProps = {
    id: number;
    name: string;
    language: string;
    stargazers_count: number;
    size: number;
    forks: number;
    description: string;
  }
export default function ReposCard({ ...props }: RepositoryProps) {
    const {isDark} = useContext(StyleContext);
  return (
    <div className={`flex flex-col w-full p-6 border-gray-600 gap-3 shadow-md ${isDark ? "bg-primary-dark" : ""}`}>
        <div className=''>
            <h2 className='text-2xl font-medium'>🔥 {props.name}</h2>
        </div>
        <div>
            <p className='text-gray-400 text-xl'>{props.description}</p>
        </div>
        <div className='flex flex-row justify-between'>
            <div>
                <ul className='flex flex-row gap-6'>
                    <li>🔵 {props.language}</li>
                    <li>⭐ {props.stargazers_count}</li>
                </ul>
            </div>
            <div>
                <p>{props.size} KB</p>
            </div>
        </div>
    </div>
  )
}
