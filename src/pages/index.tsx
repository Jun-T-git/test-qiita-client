import React, { useEffect, useState } from 'react';
import Posts from '~/components/organisms/posts';
import { PostViewModel } from '~/clean/interface/presenter/postPresenter';
import { postPresenter } from '~/clean/utility/instance/logic';

export default function Index({ hasToken: hasToken }) {
  const [posts, setPosts] = useState<PostViewModel[]>([]);

  useEffect(() => {
    if (hasToken) {
      getViewModel();
    }
  }, [hasToken]);

  const getViewModel = async () => {
    setPosts(await postPresenter.getViewModelList());
  };
  return (
    <div>
      <Posts posts={posts} />
    </div>
  );
}
