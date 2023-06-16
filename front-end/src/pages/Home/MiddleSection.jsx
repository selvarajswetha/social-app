import React from "react";
import CreatePost from "./CreatePost";
import Post from './Post';


function MiddleSection() {
    return <React.Fragment>
        <CreatePost />
        <Post />
        <Post />
    </React.Fragment>
}
export default MiddleSection;