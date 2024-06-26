import { useContext, useState } from "react";
import "./NewsFeed.css";
import { IPostProps, Post } from "./Post";
import { ThemeContext } from "../context/ThemeContext";

export interface INewsFeedProps {
    posts: IPostProps["details"][];
    onClickAdd: (post: IPostProps["details"]) => void
}

export const NewsFeed: React.FC<INewsFeedProps> = ({ posts, onClickAdd }) => {
    const [newPost, setNewpost] = useState("");
    const handleClickAdd = () =>{
        onClickAdd({
            date: new Date().toISOString().substring(0,10),
            text: newPost
        })
    }
    const theme = useContext(ThemeContext);

    return (
        <div className={`newsfeed ${theme}`}>
            <h2>News Feed</h2>
            <div className="new-post-container">
                <input onChange={(e) => setNewpost(e.target.value)} value={newPost} />
                <button onClick={handleClickAdd}>Add Post</button>
            </div>
            <div >
            {posts.map(post => <Post key={`${post.date}`} details={post} />)}
            </div>
        </div>
    )
}