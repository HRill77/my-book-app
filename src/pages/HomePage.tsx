import { NewsFeed } from "../components/NewsFeed"
import { Sidebar } from "../components/Sidebar"
import "./HomePage.css";
import { IPostProps } from "../components/Post";
import { useState } from "react";


interface IHomePageProps {
    children: React.ReactNode;
}


export const HomePage: React.FC<IHomePageProps> = ({children}) => {
  
    
    return (
        <div className="homepage">
            {children}
        </div>
    )
}