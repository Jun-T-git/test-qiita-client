import React, { useEffect, useState } from 'react';
import { PostUseCase } from '~/interface/useCase/postUseCase';
import { Post } from '~/domain/post';
import PostItem from './postItem';

type Props = {
  useCase: PostUseCase;
};

const Posts = ({ useCase }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setPosts(await useCase.fetchPosts());
  };

  return (
    <>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </>
  );
};

export default Posts;
