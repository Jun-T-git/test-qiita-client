import PostItem from '~/components/postItem';
import {PostViewModel} from "~/clean/interface/presenter/postPresenter";

type Props = {
  posts:PostViewModel[]
};

const Posts = ({ posts }: Props) => {


  return (
    <>
      {posts.map((post) => (
          <div className="mb-5">
            <PostItem key={post.id} post={post} />
          </div>
      ))}
    </>
  );
};

export default Posts;
