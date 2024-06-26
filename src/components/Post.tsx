import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "./Post.css";

export interface IPostProps {
    details: {
        text: string,
        date: string
    };
}

export const Post: React.FC<IPostProps> = ({ details }) => {
    const theme = useContext(ThemeContext);
    return (
        <div className={`post ${theme}`}>
            {details.text}
            <br/>
            <span className="date">{details.date}</span>
        </div>
    )
}