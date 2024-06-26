import React, { useState } from 'react';
import { INavbarProps, Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import "./App.css";
import { Theme, ThemeContext } from './context/ThemeContext';
import { IPostProps } from './components/Post';
import { NewsFeed } from './components/NewsFeed';
import { Sidebar } from './components/Sidebar';
import AboutUsPage from './pages/AboutUsPage';

export type Page = "Home" | "About Us"

/**
 * useState and contextUpdate are batch
 * @returns 
 */
function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const [selectedPage, setSelectedPage] = useState<Page>("Home")
  const [posts, addPosts] = useState<IPostProps["details"][]>([
    { text: "ReactJS", date: "2020-10-23" },
    { text: "Facebook", date: "2021-10-23" }
  ]);

  const handleAddPostClick = (post: IPostProps["details"]) => {
    addPosts([...posts, post]);
  }

  const handleThemeClick = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const handleNavbarLinkClick = (page: Page) => {
    setSelectedPage(page);
  }
  const name = {firtName : "Harries Rill", lastName: "Macalatan"};

  return (
    <div className={`app ${theme}`}>
      <ThemeContext.Provider value={theme}>
        <Navbar
          buttons={["Home", "About Us"]}
          selected={selectedPage}
          theme={theme}
          onClickTheme={handleThemeClick}
          onClickNavbarLink={handleNavbarLinkClick}
        />
        {selectedPage === "Home" ?
          <HomePage>
            <Sidebar
              details={{firstName: name.firtName, lastName: name.lastName}}
              countPost={posts.length}
            />
            <NewsFeed
              posts={posts}
              onClickAdd={handleAddPostClick}
            />
          </HomePage>
          : <AboutUsPage />}
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
