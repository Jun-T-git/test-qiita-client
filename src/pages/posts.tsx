import React, { useEffect, useState } from 'react';
import Posts from '~/components/organisms/posts';
import PostUseCaseImpl from '~/clean/useCase/postUseCase';
import PostRepositoryImpl from '~/clean/repository/postRepository';
import PostDriverImpl from '~/clean/driver/postDriver';
import PostPresenterImpl from '~/clean/presenter/postPresenter';
import { PostViewModel } from '~/clean/interface/presenter/postPresenter';

const repository = new PostRepositoryImpl(new PostDriverImpl());
const useCase = new PostUseCaseImpl(repository);
const presenter = new PostPresenterImpl(useCase);

export default function Index() {
  const [posts, setPosts] = useState<PostViewModel[]>([]);

  useEffect(() => {
    getViewModel();
  }, []);

  const getViewModel = async () => {
    setPosts(await presenter.getViewModelList());
  };
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}
