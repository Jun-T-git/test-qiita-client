import React from 'react';
import { PostViewModel } from '~/interface/presenter/postPresenter';
import UserInfo from '~/components/molecules/userInfo';
import Text from '~/components/atoms/text';
import MetaInfo from '~/components/molecules/metaInfo';

type Props = {
  post: PostViewModel;
};

const PostItem = ({ post }: Props) => {
  return (
    <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-lg">
      <div className="mt-4">
        <UserInfo
          userIconUrl={post.userIconUrl}
          userName={post.userName}
          userScreenName={post.userScreenName}
        />
      </div>

      <div className="my-4">
        <Text content={post.text} />
      </div>

      <MetaInfo retweet={post.retweetCount} favorite={post.favoriteCount} createdAt={post.createdAt} />
    </div>
  );
};

export default PostItem;
