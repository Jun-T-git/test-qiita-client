import React from 'react';
import { PostViewModel } from '~/clean/interface/presenter/postPresenter';
import UserInfo from '~/components/molecules/userInfo';
import Text from '~/components/atoms/text';
import MetaInfo from '~/components/molecules/metaInfo';

type Props = {
  post: PostViewModel;
};

const PostItem = ({ post }: Props) => {
  return (
    <div className="relative flex flex-col bg-white px-8 py-6 max-w-3xl mx-auto rounded-lg shadow-lg hover:bg-gray-100">
      <div className="mt-4">
        <UserInfo
          userIconUrl={post.userIconUrl}
          userName={post.userName}
          userScreenName={post.userId}
        />
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className={'absolute top-0 left-0 h-full w-full'}
        />
      </div>

      <div className="my-4 text-lg font-bold">
        <Text content={post.title} />
      </div>

      <MetaInfo
        tagList={post.tagList}
        likesCount={post.likesCount}
        createdAt={post.createdAt}
      />

      <a
        href={post.url}
        target="_blank"
        rel="noopener noreferrer"
        className={'absolute top-0 left-0 h-full w-full'}
      />
    </div>
  );
};

export default PostItem;
