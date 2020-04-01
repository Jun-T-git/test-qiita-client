import React from 'react';
import { Post } from '~/domain/post';

type Props = {
  post: Post;
};

const PostItem = ({ post }: Props) => {
  return (
    <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-lg">
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <img
            src={post.userIconUrl}
            className="w-8 h-8 object-cover rounded-full"
            alt="avatar"
          />
          <div className="text-gray-700 text-sm mx-3">{post.userName}</div>
          <div className="text-gray-700 text-sm mx-3">
            @{post.userScreenName}
          </div>
        </div>
      </div>

      <div className="my-4">
        <div className="text-lg text-gray-700 font-medium">{post.text}</div>
      </div>

      <div className="flex items-center">
        <span
          className="tracking-wider text-white bg-green-500 px-3 py-1 text-xs rounded leading-loose mx-2 font-semibold"
          title=""
        >
          <i className="fas fa-retweet" aria-hidden="true" /> {post.retweet}
        </span>

        <span
          className="tracking-wider text-white bg-red-500 px-3 py-1 text-xs rounded leading-loose mx-2 font-semibold"
          title=""
        >
          <i className="fas fa-heart" aria-hidden="true" /> {post.favorite}
        </span>

        {/*<span className="font-light text-sm text-gray-600">Mar 10, 2018</span>*/}
      </div>
    </div>
  );
};

export default PostItem;
