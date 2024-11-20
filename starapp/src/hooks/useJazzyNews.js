import { newsFeed } from "../NewsFeed";
import { useMemo, useEffect, useState } from "react";

export const useJazzyNews = () => {
    const [_posts, setPosts] = useState([]);
    const addPost = post => setPosts(allPosts => [post, ...allPosts]);

    const posts = useMemo(() => _posts, [_posts]);

    useEffect(() => {
        //newPostChime.play();
        console.log("new post chime")
        }, [posts]);

    useEffect(() => {
        //newsFeed.subscribe(addPost);
        console.log("subscribe")
        //return () => newsFeed.unsubscribe(addPost);
        return () => console.log("unsubscribe")
    }, []);

    useEffect(() => {
        //welcomeChime.play();
        console.log("welcome chime")
        // return () => goodbyeChime.play();
        return () => console.log("goodbye chime")
    }, []);
    
    return posts;
};   