import React, { useEffect, useState } from 'react';
import { PostUseCase } from '~/interface/useCase/postUseCase';
import { Post } from '~/domain/post';

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

  return <div>posts</div>;
};

export default Posts;
