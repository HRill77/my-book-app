import { useContext } from "react";
import { Divider } from "./Divider";
import "./Sidebar.css";
import { ThemeContext } from "../context/ThemeContext";

interface ISidebarProps {
    details: {
        firstName: string;
        lastName: string;
    }
    countPost: number
}

export const Sidebar: React.FC<ISidebarProps> = ({ details, countPost }) => {
    const theme = useContext(ThemeContext);

    return (
        <div className={`sidebar ${theme}`}>
            <h2>About Me</h2>
            <div>First Name: {details.firstName}</div>
            <Divider type="horizontal" />
            <div>Last Name: {details.lastName}</div>
            <Divider type="horizontal" />
            <div><i>Number of Post</i>: {countPost}</div>
        </div>
    )
}