import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import "./AboutUsPage.css";

const AboutUsPage = () => {
    const theme = useContext(ThemeContext)
  return (
    <div className={`about-us ${theme}`}>
        <h1>About Us</h1>
        <p>We are currently learning how to use hooks in React. This is a simple application that will tests if we understand how it works.</p>
        <h5>Please remember to use Context for the light/dark mode.</h5>
        </div>
  )
}

export default AboutUsPage