import React from "react";
import "./Navbar.css";
import { Divider } from "./Divider";
import { Sun } from "./svg/Sun";
import { Moon } from "./svg/Moon";
import { Page } from "../App";
import { Theme } from "../context/ThemeContext";

export interface INavbarProps {
    buttons: Page[];
    selected: string;
    theme?: Theme;
    onClickNavbarLink: (page:Page) => void;
    onClickTheme?: () => void;
}

export const Navbar: React.FC<INavbarProps> = ({ 
    buttons,
    selected,
    theme="light",
    onClickTheme,
    onClickNavbarLink
}) => {
    const themeIcon = theme === "light" ? <Sun /> : <Moon/>;
    
    
    return (
        <div className={`navbar ${theme}`}>
            <div className="navlink-container">
            {
                buttons.map((button, index) => {
                    const className = selected === button ? "button selected" : "button"
                    const handleButtonClick = () => {
                        onClickNavbarLink(button);
                    }

                    return (
                        <React.Fragment key={button}>
                            {!!index && <Divider type="vertical" />}
                            <div onClick={handleButtonClick} className={className}> {button} </div>
                        </React.Fragment>

                    )
                })
            }
            </div>
            <div onClick={onClickTheme} className="theme-icon">
                {themeIcon}
            </div>
        </div >
    )
}