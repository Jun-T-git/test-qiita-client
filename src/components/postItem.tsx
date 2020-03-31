import React from "react";
import {Post} from "~/domain/post";

type Props = {
    post: Post;
};

const PostItem = ({ post }: Props) => {
    return <div>{post.text}</div>;
};

export default PostItem;